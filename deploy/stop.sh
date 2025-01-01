#!/bin/bash

# 设置当前工作目录为脚本所在目录
cd "$(dirname "$0")"

pm2 delete ./ecosystem.config.js