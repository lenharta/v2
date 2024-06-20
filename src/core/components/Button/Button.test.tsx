import { Button } from './Button';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Button', () => {
  test('renders the component', async () => {
    render(<Button data-testid="Button-testid" />);
    expect(screen.getByTestId('Button-testid')).toBeInTheDocument();
  });
});
