const css = {
  root: 'v2-tabs',
  list: 'v2-tabs-list',
  item: 'v2-tabs-item',
  panel: 'v2-tabs-panel',
  spacer: 'v2-tabs-spacer',
};

const selectors = {
  item: { key: '[data-core-tabs-item]', prop: { 'data-core-tabs-item': true } },
  list: { key: '[data-core-tabs-list]', prop: { 'data-core-tabs-list': true } },
};

export { css, selectors };
