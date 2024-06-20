import { Header } from './Header';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Header', () => {
  test('renders the component', () => {
    render(<Header data-testid="Header-test-id" />);
    const component = screen.getByTestId('Header-test-id');
    expect(component).toBeInTheDocument();
  });
});
