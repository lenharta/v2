import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ActionGroup } from './ActionGroup';
import { Action } from './Action';

describe('@v2/core/Action', () => {
  test('renders the component', async () => {
    render(<Action data-testid="action-test-id" />);
    expect(screen.getByTestId('action-test-id')).toBeInTheDocument();
  });

  test('exposes Action.Group component', () => {
    expect(Action.Group).toBe(ActionGroup);
  });
});
