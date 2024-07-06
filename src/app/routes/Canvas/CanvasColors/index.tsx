import * as React from 'react';
import { Text } from '@/core';

const CanvasColorRow = (props: { group: string; items: { value: string; label: string }[] }) => {
  const { group, items = [] } = props;
  return (
    <section className="v2-canvas-color-row">
      <header className="v2-canvas-color-row-header">
        <Text className="v2-canvas-color-row-label">
          <>{group}</>
        </Text>
      </header>

      <div className="v2-canvas-color-row-item-grid">
        {items.map((item) => (
          <div className="v2-canvas-color-row-item-layout" key={item.label}>
            <Text className="v2-canvas-color-row-item-label">{item.label}</Text>
            <div
              style={{ backgroundColor: item.value }}
              className="v2-canvas-color-row-item-swatch"
              title={item.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const CanvasColors: React.FC<{}> = ({}) => {
  return (
    <React.Fragment>
      <div className="v2-canvas-color">
        <div className="v2-canvas-color-layout">
          <CanvasColorRow
            group="Scheme Colors"
            items={[
              {
                value: 'var(--c-base)',
                label: 'c-base',
              },
              {
                value: 'var(--c-accent)',
                label: 'c-accent',
              },
              {
                value: 'var(--c-contrast)',
                label: 'c-contrast',
              },
            ]}
          />

          <CanvasColorRow
            group="Base | Text Colors"
            items={[
              {
                value: 'var(--c-base-text-max)',
                label: 'c-base-text-max',
              },
              {
                value: 'var(--c-base-text-med)',
                label: 'c-base-text-med',
              },
              {
                value: 'var(--c-base-text-low)',
                label: 'c-base-text-low',
              },
              {
                value: 'var(--c-base-text-min)',
                label: 'c-base-text-min',
              },
            ]}
          />

          <CanvasColorRow
            group="Base | Icon Colors"
            items={[
              {
                value: 'var(--c-base-icon-max)',
                label: 'c-base-icon-max',
              },
              {
                value: 'var(--c-base-icon-med)',
                label: 'c-base-icon-med',
              },
              {
                value: 'var(--c-base-icon-low)',
                label: 'c-base-icon-low',
              },
              {
                value: 'var(--c-base-icon-min)',
                label: 'c-base-icon-min',
              },
            ]}
          />

          <CanvasColorRow
            group="Base | Border Colors"
            items={[
              {
                value: 'var(--c-base-border-max)',
                label: 'c-base-border-max',
              },
              {
                value: 'var(--c-base-border-med)',
                label: 'c-base-border-med',
              },
              {
                value: 'var(--c-base-border-low)',
                label: 'c-base-border-low',
              },
              {
                value: 'var(--c-base-border-min)',
                label: 'c-base-border-min',
              },
            ]}
          />

          <CanvasColorRow
            group="Base | Surface Colors"
            items={[
              {
                value: 'var(--c-base-surface-enabled)',
                label: 'c-base-surface-enabled',
              },
              {
                value: 'var(--c-base-surface-hovered)',
                label: 'c-base-surface-hovered',
              },
              {
                value: 'var(--c-base-surface-pressed)',
                label: 'c-base-surface-pressed',
              },
              {
                value: 'var(--c-base-surface-selected)',
                label: 'c-base-surface-selected',
              },
            ]}
          />

          <CanvasColorRow
            group="Base | Surface 1 Colors"
            items={[
              {
                value: 'var(--c-base-surface-1-enabled)',
                label: 'c-base-surface-1-enabled',
              },
              {
                value: 'var(--c-base-surface-1-hovered)',
                label: 'c-base-surface-1-hovered',
              },
              {
                value: 'var(--c-base-surface-1-pressed)',
                label: 'c-base-surface-1-pressed',
              },
              {
                value: 'var(--c-base-surface-1-selected)',
                label: 'c-base-surface-1-selected',
              },
            ]}
          />

          <CanvasColorRow
            group="Base | Surface 2 Colors"
            items={[
              {
                value: 'var(--c-base-surface-2-enabled)',
                label: 'c-base-surface-2-enabled',
              },
              {
                value: 'var(--c-base-surface-2-hovered)',
                label: 'c-base-surface-2-hovered',
              },
              {
                value: 'var(--c-base-surface-2-pressed)',
                label: 'c-base-surface-2-pressed',
              },
              {
                value: 'var(--c-base-surface-2-selected)',
                label: 'c-base-surface-2-selected',
              },
            ]}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

CanvasColors.displayName = '@v2/Canvas.Colors';
export { CanvasColors };
