import { NavMenu } from '@/app/components/NavMenu';
import * as React from 'react';

type PageHeaderElementProps = React.ComponentPropsWithoutRef<'header'>;
type PageHeaderAttributeProps = React.RefAttributes<HTMLElement>;
type PageHeaderBaseProps = PageHeaderElementProps & PageHeaderAttributeProps;

export interface PageHeaderProps extends PageHeaderBaseProps {}

const _PageHeader = (props: PageHeaderProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { className, children, ...otherProps } = props;
  const [activeItem, setActiveItem] = React.useState<string>('');
  return (
    <header {...otherProps} ref={ref} className="page-header">
      <NavMenu
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        items={[
          {
            value: 'item-1',
            label: 'Item 1',
            onClick: (event) => console.log(event.currentTarget.value),
          },
          {
            value: 'item-2',
            label: 'Item 2',
            onClick: (event) => console.log(event.currentTarget.value),
          },
          {
            value: 'item-3',
            label: 'Item 3',
            onClick: (event) => console.log(event.currentTarget.value),
          },
          {
            group: 'item-4',
            items: [
              { value: 'item-4-option-1', label: 'Option 1' },
              { value: 'item-4-option-2', label: 'Option 2' },
              { value: 'item-4-option-3', label: 'Option 3' },
            ],
          },
        ]}
      />
    </header>
  );
};

export type PageHeaderComponent = React.ForwardRefExoticComponent<PageHeaderProps>;
export const PageHeader = React.forwardRef(_PageHeader) as PageHeaderComponent;
PageHeader.displayName = '@v2/Page.Header';
