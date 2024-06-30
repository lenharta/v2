import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('@v2/core/Toggle', () => {
  test('renders the component', async () => {
    render(<Toggle data-testid="toggle-test-id" />);
    expect(screen.getByTestId('toggle-test-id')).toBeInTheDocument();
  });
});
