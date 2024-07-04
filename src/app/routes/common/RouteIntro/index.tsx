import { Page } from '@/app';
import { Theme } from '@/types';
import { IconProps, Text } from '@/core';

interface RouteIntroProps {
  banner: string;
  links: Partial<{
    value: string;
    label: string;
    icon?: Partial<IconProps> | undefined;
    variant?:
      | 'base-default'
      | 'base-elevated'
      | 'accent-default'
      | 'accent-elevated'
      | 'accent-tonal'
      | 'accent-ghost'
      | `${Theme.Color}-tonal`
      | `${Theme.Color}-ghost`
      | `${Theme.Color}-default`
      | `${Theme.Color}-elevated`
      | undefined;
  }>[];
}

type RouteIntroFactory = React.FC<RouteIntroProps>;

const RouteIntro: RouteIntroFactory = (props) => {
  const { links, banner } = props;
  return (
    <Page.Section>
      <div className="v2-route-intro-layout">
        <div className="v2-route-intro-banner">
          <Text className="v2-route-intro-banner-text">{banner}</Text>
        </div>
        <div className="v2-route-intro-link-list">
          {(links || []).map((item) => (
            <Page.Link
              to={item.value}
              key={item.value}
              label={item.label}
              icon={{ ...item.icon, name: item.icon?.name || 'arrow-northeast' }}
              variant={item.variant || 'base-elevated'}
              className="v2-route-intro-link-item"
            />
          ))}
        </div>
      </div>
    </Page.Section>
  );
};

RouteIntro.displayName = '@v2/Route.Intro';
export { RouteIntro };
