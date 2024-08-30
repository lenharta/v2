import clsx from 'clsx';
import { Core, Factory } from '@/types';
import { createFactory } from '@/factory';
import { useActionContext } from '../ActionContext';

export type ActionSpacerFactory = Factory.Config<{
  ref: HTMLDivElement;
  props: Core.ActionSpacerProps;
  omits: 'children';
  comp: 'div';
}>;

const css: Record<'root', string> = {
  root: 'v2-action-spacer',
};

export const ActionSpacer = createFactory<ActionSpacerFactory>((props, ref) => {
  const { className, grow, variant = 'default', ...forwardedProps } = props;

  const context = useActionContext();

  const contextClassNames = !context
    ? [`${css.root}--${variant}`]
    : [`${css.root}--${variant || context.variant}`];

  return (
    <div
      {...forwardedProps}
      className={clsx(css.root, ...contextClassNames, className)}
      data-grow={!!grow || undefined}
      ref={ref}
    />
  );
});

ActionSpacer.displayName = '@v2/Action.Spacer';
