import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconBtn } from './IconBtn';

describe('@v2/core/IconBtn', () => {
  test('renders the component', async () => {
    render(<IconBtn data-testid="icon-btn-test-id" />);
    expect(screen.getByTestId('icon-btn-test-id')).toBeInTheDocument();
  });
});
