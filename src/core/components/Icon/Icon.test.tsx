import { Icon } from './Icon';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Icon', () => {
  test('renders the component', async () => {
    render(<Icon data-testid="Icon-testid" />);
    expect(screen.getByTestId('Icon-testid')).toBeInTheDocument();
  });
});
