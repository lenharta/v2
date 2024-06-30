import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

describe('@v2/core/Button', () => {
  test('renders the component', async () => {
    render(<Button data-testid="button-test-id" />);
    expect(screen.getByTestId('button-test-id')).toBeInTheDocument();
  });

  test('exposes Button.Group component', () => {
    expect(Button.Group).toBe(ButtonGroup);
  });
});
