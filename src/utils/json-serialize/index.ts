function JSONSerialize<T extends Record<string, any>>(data: T): string {
  return JSON.stringify(data) as string;
}

export { JSONSerialize };
