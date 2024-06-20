import { Hero } from './Hero';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Hero', () => {
  test('renders the component', () => {
    render(<Hero data-testid="Hero-test-id" />);
    const component = screen.getByTestId('Hero-test-id');
    expect(component).toBeInTheDocument();
  });
});
