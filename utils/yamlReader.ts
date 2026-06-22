console.log("YAML Reader Started");

const fs = require('fs');
const yaml = require('yaml');
const path = require('path');

const filePath = path.resolve(__dirname, '../testdata/data.yml');

const file = fs.readFileSync(filePath, 'utf8');

const data = yaml.parse(file);

console.log(data);