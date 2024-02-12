import {
  StoreDispatchProvider,
  StoreStateProvider,
  useStoreReducer,
  INITIAL_STORE,
} from './context';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useStoreReducer({}, () => INITIAL_STORE);

  return (
    <StoreDispatchProvider value={dispatch}>
      <StoreStateProvider value={store}>{children}</StoreStateProvider>
    </StoreDispatchProvider>
  );
};
