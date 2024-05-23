function JSONDeserialize<T extends Record<string, any>>(data: string): T {
  return JSON.parse(data) as T;
}

export { JSONDeserialize };
