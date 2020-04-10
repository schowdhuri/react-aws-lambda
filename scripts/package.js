const path = require("path");
const util = require("util");
const glob = require("glob");
const fs = require("fs");

const { run } = require("./helpers");

async function createPackages() {
  const bundles = glob.sync(
    path.join("dist", "server", "lambda-packs", "*.js")
  );
  const pArr = [];
  bundles.forEach((bundle) => {
    pArr.push(
      run("zip", [
        "-j",
        path.join(
          process.cwd(),
          "dist",
          "server",
          "lambda-packs",
          `${path.basename(bundle, ".js")}.zip`
        ),
        bundle,
      ])
    );
  });
  await Promise.all(pArr);
}

createPackages();
