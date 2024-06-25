import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

describe('@v2/core/Button', () => {
  test('renders the component', async () => {
    render(<Button data-testid="Button-testid" />);
    expect(screen.getByTestId('Button-testid')).toBeInTheDocument();
  });

  test('exposes Button.Group component', () => {
    expect(Button.Group).toBe(ButtonGroup);
  });
});
