# docker 部署

```bash
# 命令行登录 docker
docker login

# 运行 docker
COMPOSE_PROFILES=no-proxy OPENAI_API_KEY=123 CODE=456 docker-compose up -d

# 停止 docker
COMPOSE_PROFILES=no-proxy OPENAI_API_KEY=123 CODE=456 docker-compose stop

# 查看运行实例
docker ps -a
# CONTAINER ID   IMAGE                        COMMAND                   CREATED          STATUS                      PORTS     NAMES
# bb700e60dc00   oceanopen/chatgpt-next-web   "docker-entrypoint.s…"   12 minutes ago   Exited (0) 48 seconds ago             chatgpt-next-web
```