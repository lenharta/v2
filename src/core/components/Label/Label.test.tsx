import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('@v2/core/Label', () => {
  test('renders the component', async () => {
    render(<Label data-testid="label-test-id" />);
    expect(screen.getByTestId('label-test-id')).toBeInTheDocument();
  });
});
