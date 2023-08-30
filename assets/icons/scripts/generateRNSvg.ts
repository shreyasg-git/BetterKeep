import fs from 'fs';
import { camelCase, pascalCase } from 'change-case';
import { parseSync, INode, stringify } from 'svgson';

const filterKeys = ['height', 'width', 'xmlns'];
const REPLACE_ME_PL0X = '__replace__mE_pl0x';

function convertTag(tag: string) {
  return 'Svg.' + pascalCase(tag);
}

function camelKeys(input: Record<string, any>) {
  const output: Record<string, any> = {};
  Object.keys(input)
    .filter(key => !filterKeys.includes(key))
    .forEach(key => (output[camelCase(key)] = input[key]));
  return output;
}

function generateRNSvg(filePath: string) {
  const svgString = fs.readFileSync(filePath).toString();
  const parsedSvg = parseSync(svgString);

  function forEveryNode(node: INode) {
    node.attributes = camelKeys(node.attributes);
    // This is done to add the {...props}
    if (node.name === 'svg') node.attributes['{...props}'] = REPLACE_ME_PL0X;

    if (node.name !== 'svg') {
      node.attributes['tabIndex'] = '-1';
      node.attributes['stroke'] = 'currentColor';
    }
    node.name = convertTag(node.name);
    node.children.forEach(forEveryNode);
  }

  forEveryNode(parsedSvg);
  // removing the replaceme part
  return stringify(parsedSvg).replace(new RegExp(`="${REPLACE_ME_PL0X}"`), '');
}

export default generateRNSvg;
