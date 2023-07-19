#!/bin/bash

set -e

# define
WORKROOT=$(cd $(dirname $0);pwd);
PACKAGE_NAME=$(cat $WORKROOT/../package.json | grep '"name":' | awk -F'"' '{print $4}')

rm -rf $WORKROOT/../output

pnpm install --frozen-lockfile

echo "$PACKAGE_NAME existing version: "
npm view $PACKAGE_NAME versions 2>/dev/null || true && {
    echo "\033[33m ${PACKAGE_NAME} is not found in the npm registry! \033[0m"
}

VERSION=`npx select-version-cli`
TAG_PREFIX="${PACKAGE_NAME}_v"

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  npm run changelog -- --tag-prefix $TAG_PREFIX --message "chore(release): ${TAG_PREFIX}%s" --release-as $VERSION

  # build
  pnpm build
  cp package.json output/package.json
  cd output

  # publish
  if [[ $VERSION =~ "-" ]]
  then
    npm publish --tag beta
  else
    npm publish
  fi

  # push
  git push origin ${TAG_PREFIX}${VERSION}
  git push origin HEAD:refs/for/master
fi
