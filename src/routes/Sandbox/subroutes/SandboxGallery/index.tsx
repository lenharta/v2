import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Stack, Title } from '@/core';
import { Hero, Main, Section } from '@/common';

const data = [
  { value: '/sandbox/button', label: 'Button' },
  { value: '/sandbox/checkbox', label: 'Checkbox' },
  { value: '/sandbox/control', label: 'Control' },
  { value: '/sandbox/image', label: 'Image' },
  { value: '/sandbox/radio', label: 'Radio' },
];

const SandboxGallery = () => {
  return (
    <React.Fragment>
      <Hero title={<Title>Sandbox | Gallery</Title>} />
      <Main>
        <Section>
          <Stack gap="sm">
            {data.map(({ value, label }) => (
              <Link to={value} aria-label={label} className="v2-navlink" key={value}>
                <span className="v2-navlink-inner">
                  <Icon className="v2-navlink-icon" name="document" />
                  <div className="v2-navlink-label">{label}</div>
                </span>
              </Link>
            ))}
          </Stack>
        </Section>
      </Main>
    </React.Fragment>
  );
};

export { SandboxGallery };
