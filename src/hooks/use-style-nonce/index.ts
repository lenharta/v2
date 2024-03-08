import { useStore } from '@/store';

export function useStyleNonce() {
  return useStore().nonce;
}
