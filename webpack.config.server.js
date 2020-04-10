const path = require("path");
const glob = require("glob");

const entries = glob.sync(path.join("dist", "server", "*.js"))
  .map(file => path.join(__dirname, file))
  .reduce((acc, cur) => ({
    ...acc,
    [path.basename(cur, ".js")]: cur
  }), {});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist", "server", "lambda-packs"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  target: "node",
  mode: "production",
};
