import React from 'react';
import { Floating } from '@/core';
import { SelectBox } from './SelectBox';
import { SelectGroup } from './SelectGroup';
import { SelectLabel } from './SelectLabel';
import { SelectOption } from './SelectOption';
import { SelectTarget } from './SelectTarget';
import { SelectProps } from './select-types';
import { SelectProvider } from './select-context';
import { parseSelectData } from './select-utils';

type SelectFactory = React.FC<SelectProps> & {
  Box: typeof SelectBox;
  Label: typeof SelectLabel;
  Group: typeof SelectGroup;
  Option: typeof SelectOption;
  Target: typeof SelectTarget;
};

const Select: SelectFactory = (props: SelectProps) => {
  const {
    dir = 'ltr',
    data,
    value,
    width = 'target',
    zIndex = 600,
    offset = 2,
    scheme = 'default',
    variant = 'elevated',
    behavior = 'single',
    readOnly,
    disabled,
    maxHeight,
    withDivider,
    dividerProps,
    placeholder = 'Select...',
    defaultOpen = false,
    middleware = { flip: true, inline: true, shift: true, size: true },
    placement = 'bottom-start',
    placementDependencies,
    onPlacementChange,
    onChange,
    onClose,
    onOpen,
  } = props;

  const [isOpen, onOpenChange] = React.useState(defaultOpen);
  const parsedData = React.useMemo(() => parseSelectData(data), [data]);

  const uid = React.useId();
  const getGroupId = () => `select:group:${uid}`;
  const getOptionId = () => `select:option:${uid}`;

  const findOptionLabel = (v: string) => {
    let label: string | undefined;

    parsedData.forEach((item) => {
      if ('group' in item) {
        item.items.forEach((obj) => {
          if (obj.value === v) {
            label = obj.label;
          }
        });
      } else {
        if (item.value === v) {
          label = item.label;
        }
      }
    });
    return label ? label : v;
  };

  return (
    <Floating
      dir={dir}
      width={width}
      zIndex={zIndex}
      isOpen={isOpen}
      offset={offset}
      disabled={disabled}
      placement={placement}
      middleware={middleware}
      placementDependencies={placementDependencies}
      onPlacementChange={onPlacementChange}
      onChange={onOpenChange}
      onClose={onClose}
      onOpen={onOpen}
      transitionProps={{
        mounted: isOpen,
        duration: 400,
        timingFunction: 'ease',
        transition: {
          transitionProperty: 'transform, opacity',
          common: { transformOrigin: 'top' },
          out: { opacity: 0, transform: 'scaleY(0)' },
          in: { opacity: 1, transform: 'scaleY(1)' },
        },
      }}
    >
      <SelectProvider
        value={{
          value,
          scheme,
          variant,
          behavior,
          readOnly,
          disabled,
          maxHeight,
          withDivider,
          dividerProps,
          getOptionId,
          getGroupId,
          onChange,
        }}
      >
        <Select.Target placeholder={placeholder} findOptionLabel={findOptionLabel} />

        <Select.Box>
          {(parsedData ?? []).map((item) => {
            if ('group' in item) {
              return (
                <Select.Group
                  key={item.group}
                  group={item.group}
                  items={item.items}
                  readOnly={item.readOnly}
                  disabled={item.disabled}
                />
              );
            } else {
              return (
                <Select.Option
                  key={item.value}
                  label={item.label}
                  value={item.value}
                  disabled={item.disabled}
                  readOnly={item.readOnly}
                />
              );
            }
          })}
        </Select.Box>
      </SelectProvider>
    </Floating>
  );
};

Select.Box = SelectBox;
Select.Label = SelectLabel;
Select.Group = SelectGroup;
Select.Option = SelectOption;
Select.Target = SelectTarget;
Select.displayName = '@v2/Select';
export { Select };
