import * as React from 'react';

function useLatestRef<T>(value: T) {
  const ref = React.useRef<T>(value);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref;
}

export { useLatestRef };
