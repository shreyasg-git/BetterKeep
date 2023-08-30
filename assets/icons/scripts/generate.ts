import path from 'path';
import { pascalCase } from 'change-case';
import { existsSync, readdirSync, writeFileSync } from 'fs';

import { generateIndexForSourceDir } from './generateIndex';
import generateRNSvg from './generateRNSvg';

function generateRNCode(svg: string) {
  return [
    "import * as React from 'react';",
    "import * as Svg from 'react-native-svg';",
    `export default (props?: Svg.SvgProps): React.ReactElement<Svg.SvgProps> => (`,
    svg,
    ');',
  ].join('\n');
}

function getDestFileName(name: string, ext: string) {
  const fileName = pascalCase(path.parse(name).name);
  return fileName + ext;
}

const { [0]: sourceDir, [1]: destDir } = process.argv.splice(2);
// const iconDir = "./src/icons";
// const destDir = "./lib/icons";

const svgFiles = readdirSync(sourceDir);

const iconFiles = svgFiles
  .map(el => ({
    src: path.resolve(sourceDir + path.sep + el),
    dest: path.resolve(destDir + path.sep + getDestFileName(el, '.tsx')),
  }))
  .filter(e => e.src.endsWith('.svg'))
  .filter(e => !existsSync(e.dest));

iconFiles.forEach(file => {
  console.log('Processing', file.src);
  const svg = generateRNCode(generateRNSvg(file.src));
  writeFileSync(file.dest, svg);
  // console.log(file);
});

generateIndexForSourceDir(sourceDir, destDir);
