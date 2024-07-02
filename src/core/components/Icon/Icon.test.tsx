import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('@v2/core/Icon', () => {
  test('renders the component', async () => {
    render(<Icon data-testid="Icon-testid" />);
    expect(screen.getByTestId('Icon-testid')).toBeInTheDocument();
  });
});
