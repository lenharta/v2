const PREFIX = 'v2';

function createAttribute(key: string, prefix: string | undefined = PREFIX): string {
  return `data-${prefix}-${key}`;
}

function createAttributeProp(
  key: string,
  value: string | boolean | undefined = true,
  prefix: string | undefined = PREFIX
): Record<string, string | boolean | undefined> {
  return { [createAttribute(key, prefix)]: value };
}

function createGroupAttribute(key: string, prefix: string | undefined = PREFIX) {
  return createAttribute(`${key}-group`, prefix);
}

function createItemAttribute(key: string, prefix: string | undefined = PREFIX) {
  return createAttribute(`${key}-item`, prefix);
}

export { createAttribute, createAttributeProp, createItemAttribute, createGroupAttribute };
