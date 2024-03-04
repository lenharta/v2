import * as React from 'react';
import { Text, Title, ToolButton } from '@/common';
import { Page, Section } from '@/app/layouts';

export const Toolbox = () => {
  return (
    <Page>
      <Page.Hero title="Toolbox" />
      <Page.Content>
        <Section scheme="primary">
          <Section.Header>
            <Title h2>Section (primary)</Title>
          </Section.Header>
          <Section.Content>
            <ToolButton label="tool-button" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam pariatur expedita
              quibusdam itaque alias vel recusandae ad ipsum cum! Ea eum cumque minima obcaecati
              libero! Tenetur dolor aut rerum itaque aperiam sit optio, quas ipsa impedit
              perspiciatis, doloremque, corrupti quia quo aliquid nobis ratione quae culpa magnam.
              Culpa adipisci et autem consectetur aliquam est? Temporibus delectus repellat ullam
              dolorum asperiores eum nemo officiis, nihil est quam enim iusto provident, esse
              sapiente, repudiandae quas tenetur ab omnis obcaecati eos culpa placeat similique
              cumque deleniti. Ratione molestias, cupiditate laboriosam delectus repellendus fuga,
              repudiandae, expedita reiciendis veniam neque distinctio placeat quae cum eum!
            </Text>
          </Section.Content>
        </Section>
        <Section scheme="secondary">
          <Section.Header>
            <Title h2>Section (secondary)</Title>
          </Section.Header>
          <Section.Content>
            <ToolButton label="tool-button" />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam pariatur expedita
              quibusdam itaque alias vel recusandae ad ipsum cum! Ea eum cumque minima obcaecati
              libero! Tenetur dolor aut rerum itaque aperiam sit optio, quas ipsa impedit
              perspiciatis, doloremque, corrupti quia quo aliquid nobis ratione quae culpa magnam.
              Culpa adipisci et autem consectetur aliquam est? Temporibus delectus repellat ullam
              dolorum asperiores eum nemo officiis, nihil est quam enim iusto provident, esse
              sapiente, repudiandae quas tenetur ab omnis obcaecati eos culpa placeat similique
              cumque deleniti. Ratione molestias, cupiditate laboriosam delectus repellendus fuga,
              repudiandae, expedita reiciendis veniam neque distinctio placeat quae cum eum!
            </Text>
          </Section.Content>
        </Section>
      </Page.Content>
    </Page>
  );
};
