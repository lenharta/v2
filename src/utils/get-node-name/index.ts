import { isNode } from '../is-node';

export const getNodeName = (node: Node | Window) => {
  if (isNode(node)) {
    return (node.nodeName || '').toLocaleLowerCase();
  }
  return '#document';
};
