import { Footer } from './Footer';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Footer', () => {
  test('renders the component', () => {
    render(<Footer data-testid="Footer-test-id" />);
    const component = screen.getByTestId('Footer-test-id');
    expect(component).toBeInTheDocument();
  });
});
