module.exports = {
  apps: [
    {
      name: "ChatGPT-Next-Web",
      script: "../dist/server.js",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "0.0.0.0",
      },
      output: "./logs/output.log",
      error: "./logs/error.log",
      log: "./logs/app.log",
      merge_logs: true,
      time: true,
    },
  ],
};
