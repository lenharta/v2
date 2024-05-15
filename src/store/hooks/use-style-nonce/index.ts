import { useStoreState } from '../use-store-state';

export function useStyleNonce() {
  return useStoreState().nonce;
}
