import { Label } from './Label';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Label', () => {
  test('renders the component', async () => {
    render(<Label data-testid="Label-testid" />);
    expect(screen.getByTestId('Label-testid')).toBeInTheDocument();
  });
});
