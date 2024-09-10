export function getElementHeight<T extends HTMLDivElement>(
  element: React.RefObject<T | null> | { current?: { scrollHeight: number } }
) {
  return element.current ? element.current.scrollHeight : 'auto';
}
