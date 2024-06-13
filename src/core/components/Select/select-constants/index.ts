const css = {
  box: 'v2-select-box',
  item: 'v2-select-item',
  label: 'v2-select-label',
  group: 'v2-select-group',
  option: 'v2-select-option',
  target: 'v2-select-target',
};

const selectors = {
  box: { key: '[data-core-select-box]', prop: { 'data-core-select-box': true } },
  item: { key: '[data-core-select-item]', prop: { 'data-core-select-item': true } },
  label: { key: '[data-core-select-label]', prop: { 'data-core-select-label': true } },
  group: { key: '[data-core-select-group]', prop: { 'data-core-select-group': true } },
  option: { key: '[data-core-select-option]', prop: { 'data-core-select-option': true } },
  target: { key: '[data-core-select-target]', prop: { 'data-core-select-target': true } },
};

export { css, selectors };
