<div align="center">

<h1 align="center">Ocean AI Chat</h1>

基于 NextChatGPT 私有部署项目，支持 GPT3, GPT4 & Gemini Pro 模型。

</div>

## 1. 本地调试

```bash
# 安装依赖
npm install -g yarn
yarn install

# 本地启动
yarn dev

# 本地预览
yarn build:next && yarn preview
```

## 2. 服务部署

```bash
npm install -g pm2

cd project-root

# 进行日志文件分割
pm2 install pm2-logrotate
# 查看配置
pm2 conf pm2-logratate

# 以前旧版本的 pm2-logrotate 想要停止，就只能卸载服务 pm2 uninstall pm2-logrotate。
# 现在新版本的可以使用 pm2 stop 进程 id。使用 pm2 list 查看到 pm2-logrotate 进程 id 为 2，执行 pm2 stop 2 即可停止服务。
# 重新启动，同样可执行 pm2 start 2 即可重启服务。

# pm2 管理服务
# pm2 [start|restart|stop|delete] ecosystem.config.js
pm2 start ecosystem.config.js
```

## 3. Docker 部署

```bash
# 命令行登录 docker
docker login

# 运行 docker
COMPOSE_PROFILES=no-proxy OPENAI_API_KEY=xxxx CODE=aaaa,bbbb docker-compose up -d

# 停止 docker
COMPOSE_PROFILES=no-proxy OPENAI_API_KEY=xxxx CODE=aaaa,bbbb docker-compose stop

# 查看运行实例
docker ps -a
# CONTAINER ID   IMAGE                        COMMAND                   CREATED          STATUS                      PORTS     NAMES
# bb700e60dc00   oceanopen/chatgpt-next-web   "docker-entrypoint.s…"   12 minutes ago   Exited (0) 48 seconds ago             chatgpt-next-web
```

## 4. 相关链接

- [ChatGPT Proxy](https://bewildcard.com/api)
- [ChatGPT API Proxy](https://2233.ai/api)
- [Github ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
- [GitHub Proxy](https://ghgo.xyz/)
- [Nvm Install](https://github.com/nvm-sh/nvm)
- [pm2 Quick Start](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [pm2-logrotate](https://github.com/keymetrics/pm2-logrotate#configure)
