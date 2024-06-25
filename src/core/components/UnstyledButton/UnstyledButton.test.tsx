import { UnstyledButton } from './UnstyledButton';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/UnstyledButton', () => {
  test('renders the component', async () => {
    render(<UnstyledButton data-testid="UnstyledButton-testid" />);
    expect(screen.getByTestId('UnstyledButton-testid')).toBeInTheDocument();
  });
});
