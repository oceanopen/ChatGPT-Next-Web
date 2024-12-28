<div align="center">

<h1 align="center">NextChat</h1>

一键免费部署你的私人 ChatGPT 网页应用，支持 GPT3, GPT4 & Gemini Pro 模型。

</div>

## 1. Docker 部署

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

## 2. 相关链接

- [ChatGPT Proxy](https://bewildcard.com/api)
- [ChatGPT API Proxy](https://2233.ai/api)
- [Github ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
- [GitHub Proxy](https://ghgo.xyz/)
