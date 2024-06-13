import React from 'react';
import { SelectGroupProps } from '../select-types';
import { Select } from '../Select';

type SelectGroupFactory = React.FC<SelectGroupProps> & {};

const SelectGroup: SelectGroupFactory = (props) => {
  const { group, items, disabled, readOnly } = props;
  return (
    <React.Fragment>
      <Select.Label value={group} type="group" />

      {(items ?? []).map((item) => (
        <Select.Option
          key={item.value}
          label={item.label}
          value={item.value}
          disabled={item.disabled || disabled}
          readOnly={item.readOnly || readOnly}
        />
      ))}
    </React.Fragment>
  );
};

SelectGroup.displayName = '@v2/Select.Group';
export { SelectGroup };
