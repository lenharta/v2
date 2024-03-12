import { isNode } from '../is-node';

export const getDocumentElement = (node: Node | Window): HTMLElement => {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document)?.documentElement;
};
