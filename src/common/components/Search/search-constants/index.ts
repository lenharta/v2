const SEARCH_CSS = {
  root: 'v2-search',
  box: 'v2-search-box',
  input: 'v2-search-box-input',
  clear: 'v2-search-box-clear',
  target: 'v2-search-box-target',
  result: 'v2-search-result',
  list: 'v2-search-result-list',
  item: 'v2-search-result-item',
};

const SEARCH_SELECTORS = {
  box: {
    box: { key: '[data-search-box-box]', prop: { 'data-search-box-box': true } },
    item: { key: '[data-search-box-item]', prop: { 'data-search-box-item': true } },
  },
  result: {
    list: { key: '[data-search-result-list]', prop: { 'data-search-result-list': true } },
    item: { key: '[data-search-result-item]', prop: { 'data-search-result-item': true } },
  },
};

export { SEARCH_CSS, SEARCH_SELECTORS };
