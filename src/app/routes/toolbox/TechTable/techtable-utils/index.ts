function getTechTableId(row: string, col: 'link' | 'info' | 'title' | 'type') {
  return [row, col].join(':');
}

export { getTechTableId };
