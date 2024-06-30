import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChipGroup } from './ChipGroup';
import { Chip } from './Chip';

describe('@v2/core/Chip', () => {
  test('renders the component', async () => {
    render(<Chip data-testid="chip-test-id" />);
    expect(screen.getByTestId('chip-test-id')).toBeInTheDocument();
  });

  test('exposes Chip.Group component', () => {
    expect(Chip.Group).toBe(ChipGroup);
  });
});
