# /bin/bash

# 确保脚本抛出遇到的错误
set -e


# 打包生成静态文件
npm run docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 部署到 https://.github.io/
git push -f git@github.com:fangwenwu/vite-code-vuepress.git master:github-pages

cd -
rm -rf docs/.vitepress/dist
