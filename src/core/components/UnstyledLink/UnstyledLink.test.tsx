import { UnstyledLink } from './UnstyledLink';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/UnstyledLink', () => {
  test('renders the component', async () => {
    render(<UnstyledLink data-testid="UnstyledLink-test-id" />);
    expect(screen.getByTestId('UnstyledLink-test-id')).toBeInTheDocument();
  });
});
