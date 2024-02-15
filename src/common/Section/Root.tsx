import clsx from 'clsx';
import { Surface } from '../Surface';
import { surfaceToken } from '../utils';
import { SectionRootComponent, SectionSurfaceOptions } from '@/types';
import { SectionContainer } from './Container';
import { SectionContent } from './Content';
import { SectionHeader } from './Header';

const findSurfaceConfig = (options: SectionSurfaceOptions) => {
  const { type = 'primary', level = 'L0' } = options;

  const accentConfig = { L0: 0, L1: 0.05, L2: 0.1, L3: 0.15, L4: 0.2 };
  const neutralConfig = { L0: 0, L1: 0.05, L2: 0.1, L3: 0.15, L4: 0.2 };

  const lookup = {
    primary: neutralConfig,
    secondary: neutralConfig,
    orange: accentConfig,
    yellow: accentConfig,
    green: accentConfig,
    cyan: accentConfig,
    blue: accentConfig,
    indigo: accentConfig,
    purple: accentConfig,
    violet: accentConfig,
    magenta: accentConfig,
    pink: accentConfig,
    red: accentConfig,
    disabled: neutralConfig,
    readOnly: neutralConfig,
  };

  return { type: type, level: lookup[type][level] };
};

export const Section: SectionRootComponent = (props) => {
  const {
    children,
    surfaceOptions,
    className,
    component: Component = 'section',
    ...otherProps
  } = props;

  const clxss = clsx('Section', className);
  const defaultSurface: SectionSurfaceOptions = { level: 'L0', type: 'primary' };
  const surface = findSurfaceConfig(surfaceOptions ?? defaultSurface);

  return (
    <>
      <Surface
        selector="Section"
        baseConfig={{ backgroundColor: surfaceToken(surface.type, surface.level) }}
      />
      <Component {...otherProps} className={clxss}>
        <Section.Container>{children}</Section.Container>
      </Component>
    </>
  );
};

Section.Container = SectionContainer;
Section.Content = SectionContent;
Section.Header = SectionHeader;
