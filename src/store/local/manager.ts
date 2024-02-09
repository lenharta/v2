export function localStorageManager<T extends Record<string, any>>(key: string) {
  const has = async () => {
    try {
      return !!window.localStorage.getItem(key);
    } catch (error: any) {
      console.log(`[@v2/localStorage]: Could not GET storage ${error.message}`);
      return false;
    }
  };

  const get = async () => {
    try {
      const storage = window.localStorage.getItem(key);
      return storage ? JSON.parse(storage) : null;
    } catch (error: any) {
      console.log(`[@v2/localStorage]: Could not GET storage ${error.message}`);
      return null;
    }
  };

  const set = async (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error: any) {
      console.log(`[@v2/localStorage]: Could not SET storage ${error.message}`);
      return false;
    }
  };

  const remove = async () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error: any) {
      console.log(`[@v2/localStorage]: Could not REMOVE storage ${error.message}`);
    }
  };

  return { has, get, set, remove };
}
