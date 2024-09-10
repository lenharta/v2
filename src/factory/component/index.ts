import React from 'react';
import { Core } from '@/types';

export function Component<P extends Core.FactoryPayload>(
  ui: Core.ComponentRenderFunction<P>
): Core.ComponentReturnFunction<P> {
  return React.forwardRef(ui) as unknown as Core.ComponentReturnFunction<P>;
}
