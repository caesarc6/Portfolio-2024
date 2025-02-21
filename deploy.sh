
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
# echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 git push -f git@github.com:caesarc6/caesarc6.github.io.git 
main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:caesarc6/Portfolio-2024.git 
main:gh-pages

cd -

# #!/usr/bin/env sh

# # abort on errors
# set -e

# # Clean the dist directory (optional)
# echo "Cleaning dist directory..."
# rm -rf dist/*

# # build
# echo "Building project..."
# npm run build

# # navigate into the build output directory
# echo "Navigating to dist directory..."
# cd dist

# # place .nojekyll to bypass Jekyll processing
# echo "Creating .nojekyll file..."
# echo > .nojekyll

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# # Initialize Git and commit changes
# echo "Initializing Git repository..."
# git init
# git checkout -B gh-pages
# git add -A
# git commit -m 'deploy'

# # Push to the gh-pages branch of the specified repository
# echo "Pushing to gh-pages branch..."
# git push -f git@github.com:caesarc6.github.io.git

# echo "Deployment complete!"
# cd -







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

