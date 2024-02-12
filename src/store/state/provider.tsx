import {
  INITIAL_STORE,
  useStoreReducer,
  StoreStateProvider,
  StoreDispatchProvider,
} from './context';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useStoreReducer({}, () => INITIAL_STORE);

  return (
    <StoreDispatchProvider value={dispatch}>
      <StoreStateProvider value={store}>{children}</StoreStateProvider>
    </StoreDispatchProvider>
  );
};
