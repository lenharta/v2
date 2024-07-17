import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ToolBtn } from './ToolBtn';

describe('@v2/core/ToolBtn', () => {
  test('renders the component', async () => {
    render(<ToolBtn data-testid="tool-btn-test-id" />);
    expect(screen.getByTestId('tool-btn-test-id')).toBeInTheDocument();
  });
});
