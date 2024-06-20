import { Stack } from './Stack';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Stack', () => {
  test('renders the component', async () => {
    render(<Stack data-testid="Stack-testid" />);
    expect(screen.getByTestId('Stack-testid')).toBeInTheDocument();
  });
});
