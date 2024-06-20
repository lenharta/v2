import { ToolButton } from './ToolButton';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/ToolButton', () => {
  test('renders the component', async () => {
    render(<ToolButton data-testid="ToolButton-testid" />);
    expect(screen.getByTestId('ToolButton-testid')).toBeInTheDocument();
  });
});
