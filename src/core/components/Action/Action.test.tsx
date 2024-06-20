import { Action } from './Action';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Action', () => {
  test('renders the component', async () => {
    render(<Action data-testid="Action-testid" />);
    expect(screen.getByTestId('Action-testid')).toBeInTheDocument();
  });
});
