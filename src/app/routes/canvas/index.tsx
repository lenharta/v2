import React from 'react';
import { Table, Text, Title } from '@/core';
import { Page, Hero, Section } from '@/common';

const CanvasRoute: React.FC<{}> = () => (
  <Page>
    <Hero title="Canvas" />
    <Section>
      <Title h2>Table Component</Title>

      <Table
        zebra
        columns={[
          { id: 'col-a', value: 'label-col-1', label: 'Car Sales' },
          { id: 'col-b', value: 'col-europe', label: 'Europe' },
          { id: 'col-c', value: 'col-africa', label: 'Africa' },
          { id: 'col-d', value: 'col-australia', label: 'Australia' },
          { id: 'col-e', value: 'col-south-asia', label: 'South Asia' },
          { id: 'col-f', value: 'col-central-asia', label: 'Central Asia' },
          { id: 'col-g', value: 'col-north-america', label: 'North America' },
          { id: 'col-h', value: 'col-south-america', label: 'South America' },
        ]}
        rows={[
          {
            id: 'row-1',
            value: 'model-x',
            label: 'Model X',
            items: [
              { id: 'row-1-cell-1', value: '31000000', label: '$31M' },
              { id: 'row-1-cell-2', value: '27000000', label: '$27M' },
              { id: 'row-1-cell-3', value: '18000000', label: '$18M' },
              { id: 'row-1-cell-4', value: '31000000', label: '$31M' },
              { id: 'row-1-cell-5', value: '27000000', label: '$27M' },
              { id: 'row-1-cell-6', value: '18000000', label: '$18M' },
              { id: 'row-1-cell-7', value: '27000000', label: '$27M' },
            ],
          },
          {
            id: 'row-2',
            value: 'model-s',
            label: 'Model S',
            items: [
              { id: 'row-2-cell-1', value: '31000000', label: '$31M' },
              { id: 'row-2-cell-2', value: '27000000', label: '$27M' },
              { id: 'row-2-cell-3', value: '18000000', label: '$18M' },
              { id: 'row-2-cell-4', value: '31000000', label: '$31M' },
              { id: 'row-2-cell-5', value: '27000000', label: '$27M' },
              { id: 'row-2-cell-6', value: '18000000', label: '$18M' },
              { id: 'row-2-cell-7', value: '27000000', label: '$27M' },
            ],
          },
          {
            id: 'row-3',
            value: 'model-y',
            label: 'Model Y',
            items: [
              { id: 'row-3-cell-1', value: '31000000', label: '$31M' },
              { id: 'row-3-cell-2', value: '27000000', label: '$27M' },
              { id: 'row-3-cell-3', value: '18000000', label: '$18M' },
              { id: 'row-3-cell-4', value: '31000000', label: '$31M' },
              { id: 'row-3-cell-5', value: '27000000', label: '$27M' },
              { id: 'row-3-cell-6', value: '18000000', label: '$18M' },
              { id: 'row-3-cell-7', value: '27000000', label: '$27M' },
            ],
          },
        ]}
      />

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid cupiditate aut maxime
        nulla ipsa impedit iure quibusdam totam tempore nam voluptates id harum voluptate sed
        reiciendis fugiat, ut tenetur.
      </Text>
    </Section>
  </Page>
);

CanvasRoute.displayName = '@v2/Route.Canvas';
export { CanvasRoute };
