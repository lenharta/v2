import { Core } from '@/types';
import { Box, Section } from '@/site/components';
import { capitalizeString } from '@/utils';
import { Subtitle, Text, Title } from '@/core';

export const DemoScheme = ({ scheme = 'primary' }: { scheme?: Core.Scheme }) => (
  <Section scheme={scheme} className="sec-demo">
    <Section.Header className="sec-demo-header">
      <Title>{capitalizeString(scheme)}</Title>
    </Section.Header>
    <Section.Content className="sec-demo-content">
      <Box className="sec-demo-box">
        <Subtitle>Subtitle</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem ad nobis. Natus, eaque
          quod dicta quam animi dignissimos at. Libero consequuntur modi, debitis maxime culpa
          eaque. Quasi, earum minus!
        </Text>
      </Box>
    </Section.Content>
  </Section>
);
