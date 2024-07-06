import * as React from 'react';
import { Divider, Icon } from '@/core';

const CanvasDividerDefault: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider />
  </div>
);

const CanvasDividerDefaultIcon: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider icon={<Icon name="search" />} />
  </div>
);

const CanvasDividerDefaultIconEnd: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider icon={<Icon name="search" />} labelPosition="end" />
  </div>
);

const CanvasDividerDefaultIconCenter: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider icon={<Icon name="search" />} labelPosition="center" />
  </div>
);

const CanvasDividerDefaultLabel: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider label="Sample Label" />
  </div>
);

const CanvasDividerDefaultLabelEnd: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider label="Sample Label" labelPosition="end" />
  </div>
);

const CanvasDividerDefaultLabelCenter: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider label="Sample Label" labelPosition="center" />
  </div>
);

const CanvasDividerDefaultIconLabel: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider label="Sample Label" icon={<Icon name="search" />} />
  </div>
);

const CanvasDividerDefaultIconLabelEnd: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider label="Sample Label" icon={<Icon name="search" />} labelPosition="end" />
  </div>
);

const CanvasDividerDefaultIconLabelCenter: React.FC<{}> = ({}) => (
  <div className="v2-canvas-divider-item">
    <Divider label="Sample Label" icon={<Icon name="search" />} labelPosition="center" />
  </div>
);

const CanvasDivider: React.FC<{}> & {
  Default: typeof CanvasDividerDefault;
  DefaultIcon: typeof CanvasDividerDefaultIcon;
  DefaultIconEnd: typeof CanvasDividerDefaultIconEnd;
  DefaultIconCenter: typeof CanvasDividerDefaultIconCenter;
  DefaultLabel: typeof CanvasDividerDefaultLabel;
  DefaultLabelEnd: typeof CanvasDividerDefaultLabelEnd;
  DefaultLabelCenter: typeof CanvasDividerDefaultLabelCenter;
  DefaultIconLabel: typeof CanvasDividerDefaultIconLabel;
  DefaultIconLabelEnd: typeof CanvasDividerDefaultIconLabelEnd;
  DefaultIconLabelCenter: typeof CanvasDividerDefaultIconLabelCenter;
} = ({}) => {
  return (
    <React.Fragment>
      <div className="v2-canvas-divider-layout">
        <CanvasDivider.Default />
        <CanvasDivider.DefaultIcon />
        <CanvasDivider.DefaultLabel />
        <CanvasDivider.DefaultIconLabel />
        <CanvasDivider.DefaultIconEnd />
        <CanvasDivider.DefaultLabelEnd />
        <CanvasDivider.DefaultIconLabelEnd />
        <CanvasDivider.DefaultIconCenter />
        <CanvasDivider.DefaultLabelCenter />
        <CanvasDivider.DefaultIconLabelCenter />
      </div>
    </React.Fragment>
  );
};

CanvasDivider.Default = CanvasDividerDefault;
CanvasDivider.DefaultIcon = CanvasDividerDefaultIcon;
CanvasDivider.DefaultIconEnd = CanvasDividerDefaultIconEnd;
CanvasDivider.DefaultIconCenter = CanvasDividerDefaultIconCenter;
CanvasDivider.DefaultLabel = CanvasDividerDefaultLabel;
CanvasDivider.DefaultLabelEnd = CanvasDividerDefaultLabelEnd;
CanvasDivider.DefaultLabelCenter = CanvasDividerDefaultLabelCenter;
CanvasDivider.DefaultIconLabel = CanvasDividerDefaultIconLabel;
CanvasDivider.DefaultIconLabelEnd = CanvasDividerDefaultIconLabelEnd;
CanvasDivider.DefaultIconLabelCenter = CanvasDividerDefaultIconLabelCenter;
CanvasDivider.displayName = '@v2/Canvas.Divider';
export { CanvasDivider };
