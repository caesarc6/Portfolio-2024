#!/usr/bin/env sh

# abort on errors
set -e

# Clean the dist directory
rm -rf dist/*

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B gh-pages
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch of the specified repository
git push -f git@github.com:caesarc6/Portfolio-2024.git gh-pages
# git push -f git@github.com:caesarc6/caesarc6.github.io.git gh-pages
# git push -f git@github.com:/caesarc6.github.io/Portfolio-2024/
cd -









# #!/usr/bin/env sh

# # abort on errors
# set -e

# # build
# npm run build

# # navigate into the build output directory
# cd dist

# # place .nojekyll to bypass Jekyll processing
# echo > .nojekyll

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git checkout -B main # Switch to or create the gh-pages branch
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# #  git push -f git@github.com:caesarc6/caesarc6.github.io.git 
# #  main:gh-pages

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:caesarc6/Portfolio-2024.git main:gh-pages

# cd -

