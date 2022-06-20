# install jq for parsing the json file
# sudo apt-get update && sudo apt-get install jq -y

# create a package.json file for the project
npm init -y

# install the dependencies
npm install --save-dev jest babel-jest @babel/core @babel/preset-env eslint 


# replace the contents of package.json file
tmp_dir=$(mktemp -d)
jq '.scripts = {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  }' package.json > $tmp_dir/package.json && mv $tmp_dir/package.json package.json

#setup the eslint config
npm init @eslint/config

# install the dependencies
npm install --save-dev @babel/core @babel/node

#replace the contents of eslintrc.json file
cat eslintric.txt > .eslintrc.js

# install the dependencies
npm install eslint-plugin-jest@latest --save-dev

#  replace the contents of eslintrc.json file
tmp_dir=$(mktemp -d)
jq ' .type = "module"' package.json > $tmp_dir/package.json && mv $tmp_dir/package.json package.json