import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Action } from './Action';
import { ActionGroup } from './ActionGroup';

describe('@v2/core/Action', () => {
  test('renders the component', async () => {
    render(<Action data-testid="Action-testid" />);
    expect(screen.getByTestId('Action-testid')).toBeInTheDocument();
  });

  test('exposes Action.Group component', () => {
    expect(Action.Group).toBe(ActionGroup);
  });
});
