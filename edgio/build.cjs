const { DeploymentBuilder } = require("@edgio/core/deploy");

module.exports = async function build(options) {
  const builder = new DeploymentBuilder();
  builder.clearPreviousBuildOutput();
  try {
    let command = "npm run build";
    await builder.exec(command);
    await builder.build();
  } catch (e) {
    console.log(e);
  }
};
