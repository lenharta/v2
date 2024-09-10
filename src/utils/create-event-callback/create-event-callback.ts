function createEventCallback<T extends HTMLElement, E extends React.SyntheticEvent<T, Event>>(
  eventHandler?: (event: E) => void,
  eventCallback?: (event: E) => void,
  options?: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
  }
): (event: E) => void {
  return (event) => {
    if (options?.preventDefault) {
      event.preventDefault();
    }
    if (options?.stopPropagation) {
      event.stopPropagation();
    }
    eventCallback?.(event);
    eventHandler?.(event);
  };
}

export { createEventCallback };
