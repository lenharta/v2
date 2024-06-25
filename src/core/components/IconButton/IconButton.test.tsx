import { IconButton } from './IconButton';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/IconButton', () => {
  test('renders the component', async () => {
    render(<IconButton data-testid="IconButton-testid">IconButton</IconButton>);
    expect(screen.getByTestId('IconButton-testid')).toBeInTheDocument();
  });
});
