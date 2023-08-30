import fs from 'fs';
import path from 'path';
import { pascalCase, paramCase } from 'change-case';

function generateUnionFromFileNames(iconFiles: string[]) {
  return iconFiles.map(el => `"${paramCase(getFileNameFromPath(el))}"`).join('|');
}

function getFileNameFromPath(sourcePath: string): string {
  return path.basename(sourcePath, path.extname(sourcePath));
}

export function generateIndexForSourceDir(sourceDir: string, destDir: string) {
  const indexPath: string = path.resolve(destDir, 'index.ts');

  const iconFiles: string[] = fs.readdirSync(sourceDir).filter(e => e.endsWith('.svg'));

  const OUTPUT_START: string = [
    "import * as React from 'react';",
    "import * as Svg from 'react-native-svg';",
    'export type IconType = ' + generateUnionFromFileNames(iconFiles),
    `export const findIconByName = (name: string): React.ComponentType<Svg.SvgProps> => {`,
    `switch(name) {`,
  ].join('\n');

  const OUTPUT_END: string = [`}`, `};`].join('\n');

  fs.appendFileSync(indexPath, OUTPUT_START);

  iconFiles.forEach((file: string) => {
    const sourceFilePath: string = path.resolve(sourceDir, file);
    const fileName: string = getFileNameFromPath(sourceFilePath);

    const caseStatement: string = createCaseStatementForElement(fileName);

    fs.appendFileSync(indexPath, `\n${caseStatement}\n`);
  });

  const caseStatement: string = createDefaultCaseStatement();
  fs.appendFileSync(indexPath, `\n${caseStatement}\n`);

  fs.appendFileSync(indexPath, OUTPUT_END);
}

function createCaseStatementForElement(fileName: string): string {
  return `case '${paramCase(fileName)}': return require('./${pascalCase(fileName)}').default;`;
}

function createDefaultCaseStatement(): string {
  return `default: return require('./QuestionMark').default;`;
}
