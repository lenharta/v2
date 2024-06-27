import { Section } from '@/app';
import { Text } from '@/core';
import { Link } from 'react-router-dom';

const COLOR_TOKEN_MAP_LIGHT_DEFAULT = {
  ['c-rgb-red']: [255, 59, 48],
  ['c-rgb-orange']: [255, 149, 0],
  ['c-rgb-yellow']: [255, 204, 0],
  ['c-rgb-green']: [52, 199, 89],
  ['c-rgb-mint']: [0, 199, 190],
  ['c-rgb-teal']: [48, 176, 199],
  ['c-rgb-cyan']: [50, 173, 230],
  ['c-rgb-blue']: [0, 122, 255],
  ['c-rgb-indigo']: [88, 86, 214],
  ['c-rgb-purple']: [175, 82, 222],
  ['c-rgb-pink']: [255, 45, 85],
  ['c-rgb-brown']: [165, 132, 94],
  ['c-rgb-gray-01']: [142, 142, 147],
  ['c-rgb-gray-02']: [174, 174, 178],
  ['c-rgb-gray-03']: [199, 199, 204],
  ['c-rgb-gray-04']: [209, 209, 214],
  ['c-rgb-gray-05']: [229, 229, 234],
  ['c-rgb-gray-06']: [242, 242, 247],
};

const COLOR_TOKEN_MAP_LIGHT_ACCESSIBLE = {
  ['c-rgb-red']: [215, 0, 21],
  ['c-rgb-orange']: [201, 52, 0],
  ['c-rgb-yellow']: [178, 80, 0],
  ['c-rgb-green']: [36, 138, 61],
  ['c-rgb-mint']: [12, 129, 123],
  ['c-rgb-teal']: [0, 130, 153],
  ['c-rgb-cyan']: [0, 113, 164],
  ['c-rgb-blue']: [0, 64, 221],
  ['c-rgb-indigo']: [54, 52, 163],
  ['c-rgb-purple']: [137, 68, 171],
  ['c-rgb-pink']: [211, 15, 69],
  ['c-rgb-brown']: [127, 101, 69],
  ['c-rgb-gray-01']: [108, 108, 112],
  ['c-rgb-gray-02']: [142, 142, 147],
  ['c-rgb-gray-03']: [174, 174, 178],
  ['c-rgb-gray-04']: [188, 188, 192],
  ['c-rgb-gray-05']: [216, 216, 220],
  ['c-rgb-gray-06']: [235, 235, 240],
};

const COLOR_TOKEN_MAP_DARK_DEFAULT = {
  ['c-rgb-red']: [255, 69, 58],
  ['c-rgb-orange']: [255, 159, 10],
  ['c-rgb-yellow']: [255, 214, 10],
  ['c-rgb-green']: [48, 209, 88],
  ['c-rgb-mint']: [102, 212, 207],
  ['c-rgb-teal']: [64, 200, 224],
  ['c-rgb-cyan']: [100, 210, 255],
  ['c-rgb-blue']: [10, 132, 255],
  ['c-rgb-indigo']: [94, 92, 230],
  ['c-rgb-purple']: [191, 90, 242],
  ['c-rgb-pink']: [255, 55, 95],
  ['c-rgb-brown']: [172, 142, 104],
  ['c-rgb-gray-01']: [142, 142, 147],
  ['c-rgb-gray-02']: [99, 99, 102],
  ['c-rgb-gray-03']: [72, 72, 74],
  ['c-rgb-gray-04']: [58, 58, 60],
  ['c-rgb-gray-05']: [44, 44, 46],
  ['c-rgb-gray-06']: [28, 28, 30],
};

const COLOR_TOKEN_MAP_DARK_ACCESSIBLE = {
  ['c-rgb-red']: [255, 105, 97],
  ['c-rgb-orange']: [255, 179, 64],
  ['c-rgb-yellow']: [255, 212, 38],
  ['c-rgb-green']: [48, 219, 91],
  ['c-rgb-mint']: [102, 212, 207],
  ['c-rgb-teal']: [93, 230, 255],
  ['c-rgb-cyan']: [112, 215, 255],
  ['c-rgb-blue']: [64, 156, 255],
  ['c-rgb-indigo']: [125, 122, 255],
  ['c-rgb-purple']: [218, 143, 255],
  ['c-rgb-pink']: [255, 100, 130],
  ['c-rgb-brown']: [181, 148, 105],
  ['c-rgb-gray-01']: [174, 174, 178],
  ['c-rgb-gray-02']: [124, 124, 128],
  ['c-rgb-gray-03']: [84, 84, 86],
  ['c-rgb-gray-04']: [68, 68, 70],
  ['c-rgb-gray-05']: [54, 54, 56],
  ['c-rgb-gray-06']: [36, 36, 38],
};

const COLOR_TOKEN_MAP_LIGHT = {
  default: COLOR_TOKEN_MAP_LIGHT_DEFAULT,
  accessible: COLOR_TOKEN_MAP_LIGHT_ACCESSIBLE,
};

const COLOR_TOKEN_MAP_DARK = {
  default: COLOR_TOKEN_MAP_DARK_DEFAULT,
  accessible: COLOR_TOKEN_MAP_DARK_ACCESSIBLE,
};

const COLOR_TOKEN_MAP_DIM = {
  default: COLOR_TOKEN_MAP_DARK_DEFAULT,
  accessible: COLOR_TOKEN_MAP_DARK_ACCESSIBLE,
};

const COLOR_TOKEN_MAP = {
  light: COLOR_TOKEN_MAP_LIGHT,
  dark: COLOR_TOKEN_MAP_DARK,
  dim: COLOR_TOKEN_MAP_DIM,
};

interface RouteOverviewProps {
  text: string;
  links: {
    icon?: React.ReactNode | undefined;
    value: string;
    label: string;
  }[];
}

const RouteOverview: React.FC<RouteOverviewProps> = (props) => {
  const { text, links, ...forwardedProps } = props;
  return (
    <Section className="v2-route-overview" {...forwardedProps}>
      <div className="v2-route-overview-inner">
        <div className="v2-route-overview-copy">
          <Text>{text}</Text>
        </div>
        <div className="v2-route-overview-links">
          {links.map((item) => (
            <Link
              to={item.value}
              key={item.value}
              className="v2-route-overview-link"
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

RouteOverview.displayName = '@v2/Route.Overview';
