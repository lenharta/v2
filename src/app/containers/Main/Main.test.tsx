import { Main } from './Main';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/app/containers/Main', () => {
  test('renders the component', () => {
    render(<Main data-testid="Main-test-id" />);
    const component = screen.getByTestId('Main-test-id');
    expect(component).toBeInTheDocument();
  });
});
