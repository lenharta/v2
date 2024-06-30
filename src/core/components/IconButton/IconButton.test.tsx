import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('@v2/core/IconButton', () => {
  test('renders the component', async () => {
    render(<IconButton data-testid="icon-button-test-id" />);
    expect(screen.getByTestId('icon-button-test-id')).toBeInTheDocument();
  });
});
