import React from 'react';

interface FloatingStateProps {
  isOpen?: boolean | undefined;
  defaultOpen?: boolean | undefined;
  onChange?: (isOpen: boolean) => void;
  onClose?: (() => void) | undefined;
  onOpen?: (() => void) | undefined;
}

interface UseFloatingReturn {
  isOpen: boolean;
  onChange: (isOpen: boolean) => void;
}

const useFloatingState = (props: FloatingStateProps): UseFloatingReturn => {
  const [internalState, setInternalState] = React.useState(props.defaultOpen || false);

  const onOpenChange = props.onChange || setInternalState;
  const isOpen = props.isOpen || internalState;

  const onChange = React.useCallback(
    (value: boolean) => {
      if (value === false) {
        props.onOpen?.();
        onOpenChange(!isOpen);
      } else {
        props.onClose?.();
        onOpenChange(!isOpen);
      }
    },
    [isOpen]
  );

  return {
    isOpen,
    onChange,
  };
};

export { useFloatingState };
