import { getNodeName } from '../get-node-name';
import { getDocumentElement } from '../get-document-element';

export const getParentNode = (node: Node): Node => {
  if (getNodeName(node) === 'html') return node;
  return node.parentNode || getDocumentElement(node);
};
