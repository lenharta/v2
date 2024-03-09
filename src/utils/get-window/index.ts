export const getWindow = (node: any): typeof window => {
  return node?.ownerDocument?.defaultView || window;
};
