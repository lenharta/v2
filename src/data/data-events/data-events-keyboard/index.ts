const EVENTS_MAP_KEYBOARD_SPACE = {
  key: 'Space',
  tags: ['general keys'],
  code: 32,
};

const EVENTS_MAP_KEYBOARD_ESCAPE = {
  key: 'Escape',
  tags: ['general keys'],
  code: 27,
};

const EVENTS_MAP_KEYBOARD_SHIFT_LEFT = {
  key: 'Shift',
  tags: ['left-side', 'modifier keys'],
  code: 16,
};

const EVENTS_MAP_KEYBOARD_SHIFT_RIGHT = {
  key: 'Shift',
  tags: ['right-side', 'modifier keys'],
  code: 16,
};

const EVENTS_MAP_KEYBOARD_CONTROL_LEFT = {
  key: 'Control',
  tags: ['left-side', 'modifier keys'],
  code: 17,
};

const EVENTS_MAP_KEYBOARD_CONTROL_RIGHT = {
  key: 'Control',
  tags: ['right-side', 'modifier keys'],
  code: 17,
};

const EVENTS_MAP_KEYBOARD = {
  Space: EVENTS_MAP_KEYBOARD_SPACE,
  Escape: EVENTS_MAP_KEYBOARD_ESCAPE,
  ShiftLeft: EVENTS_MAP_KEYBOARD_SHIFT_LEFT,
  ShiftRight: EVENTS_MAP_KEYBOARD_SHIFT_RIGHT,
  ControlLeft: EVENTS_MAP_KEYBOARD_CONTROL_LEFT,
  ControlRight: EVENTS_MAP_KEYBOARD_CONTROL_RIGHT,
};

export {
  EVENTS_MAP_KEYBOARD,
  EVENTS_MAP_KEYBOARD_SPACE,
  EVENTS_MAP_KEYBOARD_ESCAPE,
  EVENTS_MAP_KEYBOARD_SHIFT_LEFT,
  EVENTS_MAP_KEYBOARD_SHIFT_RIGHT,
  EVENTS_MAP_KEYBOARD_CONTROL_LEFT,
  EVENTS_MAP_KEYBOARD_CONTROL_RIGHT,
};
