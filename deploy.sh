rm -fr dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:ViviWu2020/dodo-ui-website.git &&
git push -f -u origin main &&    
cd - 
echo https://viviwu2020.github.io/dodo-ui-website/index.html