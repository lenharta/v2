import { Section } from './Section';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Section', () => {
  test('renders the component', () => {
    render(<Section data-testid="Section-test-id" />);
    const component = screen.getByTestId('Section-test-id');
    expect(component).toBeInTheDocument();
  });
});
