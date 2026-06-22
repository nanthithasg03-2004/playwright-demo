console.log("YAML Reader Started");
import fs from 'fs';
import yaml from 'yaml';

const file = fs.readFileSync('./testdata/data.yaml', 'utf8');

const data = yaml.parse(file);

console.log(data);