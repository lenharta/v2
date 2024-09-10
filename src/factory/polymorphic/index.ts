import React from 'react';
import { Core } from '@/types';

export function PolymorphicComponent<P extends Core.FactoryPayload>(
  ui: Core.PolymorphicRenderFunction<P>
): Core.PolymorphicReturnFunction<P> {
  return React.forwardRef(ui) as unknown as Core.PolymorphicReturnFunction<P>;
}
