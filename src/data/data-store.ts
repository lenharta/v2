const DATA_STORE_INITIAL_STATE = {
  // nonce: () => '',
  language: 'en',
  accent: 'blue',
  mode: 'dark',
  dir: 'ltr',
};

const DATA_STORE_STORAGE_LOCATION_KEY = {
  local: 'local',
  session: 'session',
};

const DATA_STORE_STORAGE_LOCATION = {
  local: 'localStorage',
  session: 'sessionStorage',
};

const DATA_STORE_STORAGE_ROOT_ATTRIBUTE = {
  dir: 'dir',
  mode: 'mode',
  accent: 'accent',
};

export {
  DATA_STORE_INITIAL_STATE,
  DATA_STORE_STORAGE_LOCATION_KEY,
  DATA_STORE_STORAGE_LOCATION,
  DATA_STORE_STORAGE_ROOT_ATTRIBUTE,
};
