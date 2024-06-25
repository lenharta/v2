import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Chip } from './Chip';
import { ChipGroup } from './ChipGroup';

describe('@v2/core/Chip', () => {
  test('renders the component', async () => {
    render(<Chip data-testid="Chip-testid" />);
    expect(screen.getByTestId('Chip-testid')).toBeInTheDocument();
  });

  test('exposes Chip.Group component', () => {
    expect(Chip.Group).toBe(ChipGroup);
  });
});
