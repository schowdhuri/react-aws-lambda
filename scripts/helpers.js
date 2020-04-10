const { spawn } = require("child_process");

module.exports.run = async function(cmd, args, options = {}) {
  options = {
    ...options,
    shell: true,
    stdio: "inherit",
  };
  const proc = spawn(cmd, args, options);
  return new Promise((resolve, reject) => {
    proc.on("close", (code) => {
      if (code) {
        reject();
      } else {
        resolve();
      }
    });
  });
};
