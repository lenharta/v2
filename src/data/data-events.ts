const DATA_EVENT_MAP_KEYBOARD_KEYS = {
  Space: 'Space',
  Shift: 'Shift',
  Escape: 'Escape',
  Control: 'Control',
};

const DATA_EVENT_MAP_KEYBOARD_KEYCODES = {
  Space: 'Space',
  Escape: 'Escape',
  ShiftLeft: 'ShiftLeft',
  ShiftRight: 'ShiftRight',
  ControlLeft: 'ControlLeft',
  ControlRight: 'ControlRight',
};

const DATA_EVENT_KEYBOARD = {
  Space: { key: 'Space', code: 32, location: ['general keys'] },
  Escape: { key: 'Escape', code: 27, location: ['general keys'] },
  ShiftLeft: { key: 'Shift', code: 16, location: ['left-side', 'modifier keys'] },
  ShiftRight: { key: 'Shift', code: 16, location: ['right-side', 'modifier keys'] },
  ControlLeft: { key: 'Control', code: 17, location: ['left-side', 'modifier keys'] },
  ControlRight: { key: 'Control', code: 17, location: ['right-side', 'modifier keys'] },
};

export { DATA_EVENT_MAP_KEYBOARD_KEYS, DATA_EVENT_MAP_KEYBOARD_KEYCODES, DATA_EVENT_KEYBOARD };
