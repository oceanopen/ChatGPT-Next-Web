echo "node: $(node --version)"
echo "pm2: $(pm2 --version)"

pm2 delete ecosystem.config.js
pm2 start ecosystem.config.js