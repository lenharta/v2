import { Menu } from './Menu';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Menu', () => {
  test('renders the component', () => {
    render(<Menu data-testid="Menu-test-id" />);
    const component = screen.getByTestId('Menu-test-id');
    expect(component).toBeInTheDocument();
  });
});
