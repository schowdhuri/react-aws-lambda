const path = require("path");
const util = require("util");
const glob = require("glob");
const fs = require("fs");
const Lambda = require("aws-sdk/clients/lambda");

const LAMBDA_ROLE = "arn:aws:iam::667015330448:role/lambda-role";

const readFile = util.promisify(fs.readFile);

const lambda = new Lambda({
  region: "us-east-1",
});

async function getFunctions() {
  const result = await lambda.listFunctions().promise();
  return result.Functions;
}

async function createFunction(name) {
  console.log("Creating", name, "...");
  const zipFile = await readFile(
    path.join(process.cwd(), "dist", "server", "lambda-packs", `${name}.zip`)
  );
  return lambda
    .createFunction({
      Code: {
        ZipFile: zipFile,
      },
      FunctionName: name,
      Handler: `${name}.handler`,
      MemorySize: 128,
      Publish: true,
      Role: LAMBDA_ROLE,
      Runtime: "nodejs12.x",
    })
    .promise();
}

async function updateFunction(name) {
  console.log("Updating", name, "...");
  const zipFile = await readFile(
    path.join(process.cwd(), "dist", "server", "lambda-packs", `${name}.zip`)
  );
  return lambda
    .updateFunctionCode({
      FunctionName: name,
      Publish: true,
      ZipFile: zipFile,
    })
    .promise();
}

async function createFunctions() {
  const names = glob
    .sync(path.join("dist", "server", "lambda-packs", "*.zip"))
    .map((f) => path.basename(f, ".zip"));
  const existingFunctions = await getFunctions();
  const updateList = names.filter((name) =>
    existingFunctions.find((ef) => ef.FunctionName === name)
  );
  const createList = names.filter(
    (name) => !existingFunctions.find((ef) => ef.FunctionName === name)
  );
  const pArr = [
    ...createList.map(createFunction),
    ...updateList.map(updateFunction),
  ];
  await Promise.all(pArr);
}

createFunctions();
