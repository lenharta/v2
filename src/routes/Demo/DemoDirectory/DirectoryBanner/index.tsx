import React from 'react';

const bannerProps = {
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 200 100',
  height: '100',
  width: '200',
};

const bannerColor = {
  base: { fill: 'rgba(var(--c-rgb-accent), 0.1)' },
  fill: { fill: 'rgba(var(--c-rgb-accent), 0.2)' },
  stroke: { stroke: 'rgba(var(--c-rgb-accent), 0.2)' },
};

const DirectoryBannerAction: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="50" y="34" width="32" height="32" {...bannerColor.fill} />
    <rect x="118" y="34" width="32" height="32" {...bannerColor.fill} />
    <rect x="84" y="34" width="32" height="32" {...bannerColor.fill} />
    <rect x="60" y="44" width="12" height="12" {...bannerColor.fill} />
    <rect x="128" y="44" width="12" height="12" {...bannerColor.fill} />
    <rect x="94" y="44" width="12" height="12" {...bannerColor.fill} />
  </React.Fragment>
);

const DirectoryBannerButton: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="56" y="34" width="88" height="32" {...bannerColor.fill} />
    <rect x="67" y="44" width="48" height="12" {...bannerColor.fill} />
    <rect x="122" y="44" width="12" height="12" {...bannerColor.fill} />
  </React.Fragment>
);

const DirectoryBannerIconBtn: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="84" y="34" width="32" height="32" rx="16" {...bannerColor.fill} />
    <rect x="50" y="34" width="32" height="32" rx="16" {...bannerColor.fill} />
    <rect x="118" y="34" width="32" height="32" rx="16" {...bannerColor.fill} />
    <rect x="94" y="44" width="12" height="12" {...bannerColor.fill} />
    <rect x="60" y="44" width="12" height="12" {...bannerColor.fill} />
    <rect x="128" y="44" width="12" height="12" {...bannerColor.fill} />
  </React.Fragment>
);

const DirectoryBannerToolBtn: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="50" y="34" width="32" height="32" rx="16" {...bannerColor.fill} />
    <rect x="118" y="34" width="32" height="32" rx="16" {...bannerColor.fill} />
    <rect x="84" y="34" width="32" height="32" rx="16" {...bannerColor.fill} />
    <rect x="98" y="48" width="4" height="4" rx="2" {...bannerColor.fill} />
    <rect x="92" y="48" width="4" height="4" rx="2" {...bannerColor.fill} />
    <rect x="104" y="48" width="4" height="4" rx="2" {...bannerColor.fill} />
    <path d="M65 43V49H59V51H65V57H67V51H73V49H67V43H65Z" {...bannerColor.fill} />
    <path
      d="M128.243 45.6568L132.485 49.8995L128.243 54.1421L129.657 55.5563L133.899 51.3137L138.142 55.5563L139.556 54.1421L135.314 49.8995L139.556 45.6568L138.142 44.2426L133.899 48.4853L129.657 44.2426L128.243 45.6568Z"
      {...bannerColor.fill}
    />
  </React.Fragment>
);

const DirectoryBannerCheckbox: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="59.5" y="62.5" width="11" height="11" {...bannerColor.stroke} />
    <rect x="59.5" y="26.5" width="11" height="11" {...bannerColor.stroke} />
    <path d="M62 32L64.3077 34L68 29" {...bannerColor.stroke} />
    <rect x="59.5" y="44.5" width="11" height="11" {...bannerColor.stroke} />
    <path d="M62 50H68" {...bannerColor.stroke} />
    <rect x="77" y="28" width="64" height="8" {...bannerColor.fill} />
    <rect x="77" y="46" width="64" height="8" {...bannerColor.fill} />
    <rect x="77" y="64" width="64" height="8" {...bannerColor.fill} />
  </React.Fragment>
);

const DirectoryBannerRadio: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="77" y="28" width="64" height="8" {...bannerColor.fill} />
    <rect x="77" y="46" width="64" height="8" {...bannerColor.fill} />
    <rect x="77" y="64" width="64" height="8" {...bannerColor.fill} />
    <rect x="59.5" y="62.5" width="11" height="11" rx="5.5" {...bannerColor.stroke} />
    <rect x="59.5" y="26.5" width="11" height="11" rx="5.5" {...bannerColor.stroke} />
    <rect x="61" y="28" width="8" height="8" rx="4" {...bannerColor.fill} />
    <rect x="59.5" y="44.5" width="11" height="11" rx="5.5" {...bannerColor.stroke} />
  </React.Fragment>
);

const DirectoryBannerToggle: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="79" y="28" width="64" height="8" {...bannerColor.fill} />
    <rect x="79" y="46" width="64" height="8" {...bannerColor.fill} />
    <rect x="79" y="64" width="64" height="8" {...bannerColor.fill} />
    <rect
      x="-0.5"
      y="0.5"
      width="23"
      height="11"
      rx="5.5"
      transform="matrix(-1 0 0 1 72 62)"
      {...bannerColor.stroke}
    />
    <rect width="8" height="8" rx="4" transform="matrix(-1 0 0 1 59 64)" {...bannerColor.fill} />
    <rect
      x="-0.5"
      y="0.5"
      width="23"
      height="11"
      rx="5.5"
      transform="matrix(-1 0 0 1 72 44)"
      {...bannerColor.stroke}
    />
    <rect width="8" height="8" rx="4" transform="matrix(-1 0 0 1 59 46)" {...bannerColor.fill} />
    <rect x="49" y="26" width="24" height="12" rx="6" {...bannerColor.fill} />
    <rect x="63" y="28" width="8" height="8" rx="4" {...bannerColor.fill} />
  </React.Fragment>
);

const DirectoryBannerControl: React.FC<{}> = ({}) => (
  <React.Fragment>
    <rect x="75" y="26" width="1" height="8" {...bannerColor.fill} />
    <rect x="75" y="46" width="1" height="8" {...bannerColor.fill} />
    <rect x="75" y="66" width="1" height="8" {...bannerColor.fill} />
    <rect x="124" y="26" width="1" height="8" {...bannerColor.fill} />
    <rect x="124" y="46" width="1" height="8" {...bannerColor.fill} />
    <rect x="124" y="66" width="1" height="8" {...bannerColor.fill} />
    <rect x="133" y="26" width="32" height="8" {...bannerColor.fill} />
    <rect x="133" y="46" width="32" height="8" {...bannerColor.fill} />
    <rect x="133" y="66" width="32" height="8" {...bannerColor.fill} />
    <rect x="84" y="26" width="32" height="8" {...bannerColor.fill} />
    <rect x="84" y="46" width="32" height="8" {...bannerColor.fill} />
    <rect x="84" y="66" width="32" height="8" {...bannerColor.fill} />
    <rect x="35" y="26" width="32" height="8" {...bannerColor.fill} />
    <rect x="35" y="46" width="32" height="8" {...bannerColor.fill} />
    <rect x="35" y="66" width="32" height="8" {...bannerColor.fill} />
    <rect x="32" y="23" width="38" height="14" {...bannerColor.fill} />
    <rect x="81" y="43" width="38" height="14" {...bannerColor.fill} />
    <rect x="130" y="63" width="38" height="14" {...bannerColor.fill} />
  </React.Fragment>
);

const BannerComponents = {
  Control: DirectoryBannerControl,
  Action: DirectoryBannerAction,
  Button: DirectoryBannerButton,
  IconBtn: DirectoryBannerIconBtn,
  ToolBtn: DirectoryBannerToolBtn,
  Checkbox: DirectoryBannerCheckbox,
  Radio: DirectoryBannerRadio,
  Toggle: DirectoryBannerToggle,
};

interface DirectoryBannerProps {
  type: keyof typeof BannerComponents;
}

const DirectoryBanner: React.FC<DirectoryBannerProps> = (props) => {
  const { type = 'Action' } = props;
  const BannerComponent = BannerComponents[type];
  return (
    <svg {...bannerProps}>
      <rect width="200" height="100" {...bannerColor.base} />
      <BannerComponent />
    </svg>
  );
};

DirectoryBanner.displayName = '@v2/Directory.Banner';
export { DirectoryBanner };
