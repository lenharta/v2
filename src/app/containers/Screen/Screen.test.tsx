import { Screen } from './Screen';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/app/containers/Screen', () => {
  test('renders the component', () => {
    render(<Screen data-testid="Screen-test-id" />);
    const component = screen.getByTestId('Screen-test-id');
    expect(component).toBeInTheDocument();
  });
});
