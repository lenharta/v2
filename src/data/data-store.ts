const DATA_STORE_STORAGE_LOCATION_KEY = {
  local: 'local',
  session: 'session',
} as const;

const DATA_STORE_STORAGE_LOCATION = {
  local: 'localStorage',
  session: 'sessionStorage',
} as const;

const DATA_STORE_STORAGE_ROOT_ATTRIBUTE = {
  dir: 'dir',
  mode: 'mode',
  accent: 'accent',
} as const;

export {
  DATA_STORE_STORAGE_LOCATION_KEY,
  DATA_STORE_STORAGE_LOCATION,
  DATA_STORE_STORAGE_ROOT_ATTRIBUTE,
};
