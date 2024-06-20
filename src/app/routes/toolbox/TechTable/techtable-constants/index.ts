import { TechTableItem } from '../techtable-types';

const css = {
  root: 'v2-toolbox-table',
  chip: 'v2-toolbox-table-chip',
  head: {
    root: 'v2-toolbox-table-head',
    row: 'v2-toolbox-table-row v2-toolbox-table-head-row',
    cell: 'v2-toolbox-table-cell v2-toolbox-table-head-cell',
  },
  body: {
    root: 'v2-toolbox-table-body',
    row: 'v2-toolbox-table-row v2-toolbox-table-body-row',
    cell: 'v2-toolbox-table-cell v2-toolbox-table-body-cell',
  },
  foot: {
    root: 'v2-toolbox-table-foot',
    row: 'v2-toolbox-table-row v2-toolbox-table-foot-row',
    cell: 'v2-toolbox-table-cell v2-toolbox-table-foot-cell',
  },
};

// red
// orange
// yellow
// green
// mint
// teal
// cyan
// blue
// indigo
// purple
// pink
// brown

const TECH_TABLE_STYLE_MAP: Record<TechTableItem['type'], React.CSSProperties> = {
  ['language']: { fill: 'var(--c-accent-A100)' },
  ['framework']: { fill: 'var(--c-accent-A400)' },
  ['runtime']: { fill: 'var(--c-accent-A500)' },
  ['tool']: { fill: 'var(--c-accent-A600)' },
  ['versioning']: { fill: 'var(--c-accent-A700)' },
  ['database']: { fill: 'var(--c-accent-A800)' },
  ['devops']: { fill: 'var(--c-accent-A600)' },
  ['design']: { fill: 'var(--c-accent-A600)' },
  ['productivity']: { fill: 'var(--c-accent-A600)' },
  ['cloud']: { fill: 'var(--c-accent-A600)' },
  ['editor']: { fill: '' },
  ['testing']: { fill: '' },
};

export { css, TECH_TABLE_STYLE_MAP };
