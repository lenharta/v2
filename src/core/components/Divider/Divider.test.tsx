import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('@v2/core/Divider', () => {
  test('renders the component', async () => {
    render(<Divider data-testid="divider-test-id" />);
    expect(screen.getByTestId('divider-test-id')).toBeInTheDocument();
  });
});
