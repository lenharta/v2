const CONFIG_EVENT_MAP_KEYBOARD_SPACE = {
  key: 'Space',
  tags: ['general keys'],
  code: 32,
};

const CONFIG_EVENT_MAP_KEYBOARD_ESCAPE = {
  key: 'Escape',
  tags: ['general keys'],
  code: 27,
};

const CONFIG_EVENT_MAP_KEYBOARD_SHIFT_LEFT = {
  key: 'Shift',
  tags: ['left-side', 'modifier keys'],
  code: 16,
};

const CONFIG_EVENT_MAP_KEYBOARD_SHIFT_RIGHT = {
  key: 'Shift',
  tags: ['right-side', 'modifier keys'],
  code: 16,
};

const CONFIG_EVENT_MAP_KEYBOARD_CONTROL_LEFT = {
  key: 'Control',
  tags: ['left-side', 'modifier keys'],
  code: 17,
};

const CONFIG_EVENT_MAP_KEYBOARD_CONTROL_RIGHT = {
  key: 'Control',
  tags: ['right-side', 'modifier keys'],
  code: 17,
};

const CONFIG_EVENT_MAP_KEYBOARD = {
  Space: CONFIG_EVENT_MAP_KEYBOARD_SPACE,
  Escape: CONFIG_EVENT_MAP_KEYBOARD_ESCAPE,
  ShiftLeft: CONFIG_EVENT_MAP_KEYBOARD_SHIFT_LEFT,
  ShiftRight: CONFIG_EVENT_MAP_KEYBOARD_SHIFT_RIGHT,
  ControlLeft: CONFIG_EVENT_MAP_KEYBOARD_CONTROL_LEFT,
  ControlRight: CONFIG_EVENT_MAP_KEYBOARD_CONTROL_RIGHT,
};

export {
  CONFIG_EVENT_MAP_KEYBOARD,
  CONFIG_EVENT_MAP_KEYBOARD_SPACE,
  CONFIG_EVENT_MAP_KEYBOARD_ESCAPE,
  CONFIG_EVENT_MAP_KEYBOARD_SHIFT_LEFT,
  CONFIG_EVENT_MAP_KEYBOARD_SHIFT_RIGHT,
  CONFIG_EVENT_MAP_KEYBOARD_CONTROL_LEFT,
  CONFIG_EVENT_MAP_KEYBOARD_CONTROL_RIGHT,
};
