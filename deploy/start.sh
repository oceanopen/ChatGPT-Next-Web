#!/bin/bash

# 设置当前工作目录为脚本所在目录
cd "$(dirname "$0")"

echo "node: $(node --version)"
echo "pm2: $(pm2 --version)"

pm2 delete ./ecosystem.config.js
pm2 start ./ecosystem.config.js