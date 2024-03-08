import * as React from 'react';

export function useRandomClassName() {
  const id = React.useId().replace(/:/g, '');
  return id;
}
