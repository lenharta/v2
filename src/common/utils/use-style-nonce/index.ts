import { useAppState } from '@/store';

export function useStyleNonce() {
  return useAppState().nonce;
}
