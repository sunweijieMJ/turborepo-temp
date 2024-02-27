#! /bin/bash

# 要求用户输入两个参数，根目录和包名
read -p "Enter root directory (no spaces): " DIRECTORY
read -p "Enter package name (no spaces): " NAME

# 获取根目录的绝对路径
FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../$DIRECTORY" && pwd)

# 检查包名称是否合法
re="[[:space:]]+"
if [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

# 获取包目录的绝对路径
DIRNAME="$FILE_PATH/$NAME"

# 判断包是否存在
if [ -d "$DIRNAME" ]; then
  echo "$NAME already exists, please change it"
  exit 1
fi

# 创建包目录
mkdir -p "$DIRNAME"

# 生成package.json
cat > $DIRNAME/package.json <<EOF
{
  "name": "@repo/$NAME",
  "version": "0.0.0"
}
EOF
