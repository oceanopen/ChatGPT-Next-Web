#!/bin/bash

# 设置当前工作目录为脚本所在目录
cd "$(dirname "$0")"

rm -rf ../dist

mkdir -p ../dist/public
mkdir -p ../dist/.next/
mkdir -p ../dist/.next/static/

cp -rp ../public/* ../dist/public/
cp -rp ../.next/standalone/* ../dist/
cp -rp ../.next/standalone/.next/* ../dist/.next/
cp -rp ../.next/static/* ../dist/.next/static/
