#!/usr/bin/env sh

set -e

npm run build

git add .
git commit -m "feat"
git push origin master

git subtree push --prefix dist origin gh-pages