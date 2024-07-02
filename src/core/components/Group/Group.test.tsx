import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Group } from './Group';

describe('@v2/core/Group', () => {
  test('renders the component', async () => {
    render(<Group data-testid="Group-testid" />);
    expect(screen.getByTestId('Group-testid')).toBeInTheDocument();
  });
});
