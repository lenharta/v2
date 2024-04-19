import { ICON, Icon, Text, Title } from '@/core';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface TabLinkItemProps {
  icon?: ICON | undefined;
  title: string;
  value: string;
  text: string;
  key?: string;
}

export type TabLinkItemFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TabLinkItemProps;
}>;

export const TabLinkItem = factory<TabLinkItemFactory>((props, ref) => {
  const { title, value, text, icon, ...otherProps } = props;
  return (
    <button {...otherProps} ref={ref} value={value} tabIndex={0} className="tablink-item">
      <span className="tablink-content">
        <Title>{title}</Title>
        <Text>{text}</Text>
      </span>
      {icon && <Icon name={icon} />}
    </button>
  );
});

interface TabLinkProps {
  items: TabLinkItemProps[];
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type TabLinkComponent = React.FC<TabLinkProps> & {
  Item: typeof TabLinkItem;
  Group: typeof TabLink;
};

export const TabLink: TabLinkComponent = (props) => {
  const { items, onClick } = props;
  return (
    <div className="tablink-group" aria-orientation="vertical">
      {items.map((item) => (
        <TabLink.Item
          key={item.key || item.value}
          text={item.text}
          icon={item.icon}
          value={item.value}
          title={item.title}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

TabLink.displayName = '@v2/app/TabLink.Group';
TabLink.Group = TabLink;
TabLink.Item = TabLinkItem;
