const { createDevServer } = require("@edgio/core/dev");

module.exports = function () {
  return createDevServer({
    label: "Svelte",
    command: (port) => `npm run dev -- --port ${port}`,
    ready: [/started server/i],
  });
};
