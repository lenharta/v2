import { Core } from '@/types';
import { parseItem } from '../parse-item';

export function parseItemData(
  data?: (string | Core.Item | Core.ItemGroup)[] | undefined
): (Core.Item | Core.ItemGroup)[] {
  return !data ? [] : data.map(parseItem);
}
