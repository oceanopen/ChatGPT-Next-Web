module.exports = {
  apps: [
    {
      name: "ChatGPT-Next-Web",
      script: "./dist/server.js",
      instances: 2,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
      output: "./logs/app_output.log",
      error: "./logs/app_error.log",
      log: "./logs/app.log",
      merge_logs: true,
      watch: false,
      time: true,
    },
  ],
};
