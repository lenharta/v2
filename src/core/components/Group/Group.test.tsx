import { Group } from './Group';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Group', () => {
  test('renders the component', async () => {
    render(<Group data-testid="Group-testid" />);
    expect(screen.getByTestId('Group-testid')).toBeInTheDocument();
  });
});
