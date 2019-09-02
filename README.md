# React Boilerplate

md ~/projects/egghead.io/andy_van_slaars/react-boilerplate
npm init
git init
git status
stdconfig
stdnpm
prettier --write package.json
git commit -m "4 spaces?" .
cat package.json
git remote add origin https://github.com/nadgerz/react-boilerplate.git
git push -u origin master
git remote -v
git commi -m "Build up what we do here" README.md

# re-running this will add in all the github repo data to package.json
npm init -y 

md src
vim index.js
cd ..
git add src
git commit -m "Give us something to bundle" src

npm i -D webpack webpack-cli
./node_modules/.bin/webpack
node dist/main.js

cd src/
cat > greet.js
vim index.js 
prettier --write *.js
cd ..
npm run build -- --mode development
node dist/main.js

# Add a webpack config file
vim webpack.config.js

# add babel packages
npm run build -- --mode development

npm i -D @babel/core @babel/cli @babel/preset-env
$(npm bin)/babel src/greet.js
$(npm bin)/babel src/greet.js --presets=@babel/preset-env


