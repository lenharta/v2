import React from 'react';
import { Text, Title } from '@/core';
import { ToolboxError } from './error';
import { Hero, Main, Page, Section } from '@/common';

interface ToolboxProps {}

type ToolboxComponent = React.FC<ToolboxProps> & {
  Error: typeof ToolboxError;
};

const Toolbox: ToolboxComponent = () => {
  return (
    <Page>
      <Hero title={<Title>Toolbox</Title>} />
      <Main>
        <Section>
          <Title>Section Title</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam ex recusandae
            velit sequi quae qui! Animi ea unde, asperiores ratione dolorem facere consectetur fuga
            iusto, quae impedit perferendis deserunt.t
          </Text>
        </Section>
      </Main>
    </Page>
  );
};

Toolbox.Error = ToolboxError;
Toolbox.displayName = '@v2/Toolbox';
export { Toolbox };
