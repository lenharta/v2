const DATA_KEYBOARD = [
  { key: 'Enter', code: 13, tags: ['general keys'] },
  { key: 'Space', code: 32, tags: ['general keys'] },
  { key: 'Escape', code: 27, tags: ['general keys'] },
  { key: 'Shift', code: 16, tags: ['left-side', 'modifier keys'] },
  { key: 'Shift', code: 16, tags: ['right-side', 'modifier keys'] },
  { key: 'Control', code: 17, tags: ['left-side', 'modifier keys'] },
  { key: 'Control', code: 17, tags: ['right-side', 'modifier keys'] },
];

const KEYCODE_MAP = {
  Enter: '13',
  Space: '32',
  Escape: '27',
  Shift: '16',
  Control: '17',
};

const KEYBOARD_MAP = {
  ['13']: { key: 'Enter', sides: [], location: 'general keys' },
  ['32']: { key: 'Space', sides: [], location: 'general keys' },
  ['27']: { key: 'Escape', sides: [], location: 'general keys' },
  ['16']: { key: 'Shift', sides: ['left-side', 'right-side'], location: 'modifier keys' },
  ['17']: { key: 'Control', sides: ['left-side', 'right-side'], location: 'modifier keys' },
};

export { DATA_KEYBOARD, KEYBOARD_MAP, KEYCODE_MAP };
