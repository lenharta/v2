export const createEventCallback = <T extends Element, E extends Event>(props: {
  state?: { disabled?: boolean; readOnly?: boolean };
  handler?: React.EventHandler<React.SyntheticEvent<T, E>> | (() => void);
  callback?: React.EventHandler<React.SyntheticEvent<T, E>>;
}) => {
  const { callback, handler, state } = props;

  return (event: React.SyntheticEvent<T, E>) => {
    if (!state || !state.disabled || !state.disabled) {
      callback?.(event);
      handler?.(event);
    }
  };
};
