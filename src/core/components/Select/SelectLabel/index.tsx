import clsx from 'clsx';
import React from 'react';
import { css } from '../select-constants';
import { Divider, Label } from '@/core';
import { SelectLabelProps } from '../select-types';
import { useSelectContext } from '../select-context';

type SelectLabelFactory = React.FC<SelectLabelProps> & {};

const SelectLabel: SelectLabelFactory = (props) => {
  const { value, type = 'group' } = props;

  const ctx = useSelectContext();

  let content: React.JSX.Element | null = null;

  if (type === 'option' || type === 'target') {
    content = (
      <React.Fragment>
        <Label component="span">{value}</Label>
      </React.Fragment>
    );
  }

  if (type === 'group' && ctx.withDivider) {
    content = (
      <React.Fragment>
        <Divider label={value} {...ctx.dividerProps} />
      </React.Fragment>
    );
  }

  if (type === 'group' && !ctx.withDivider) {
    content = (
      <React.Fragment>
        <Label component="span">{value}</Label>
      </React.Fragment>
    );
  }

  return (
    <div
      className={clsx(
        css.label,
        `${css.label}--scheme-${ctx.scheme}`,
        `${css.label}--variant-${ctx.variant}`
      )}
    >
      {content}
    </div>
  );
};

SelectLabel.displayName = '@v2/Select.Label';
export { SelectLabel };
