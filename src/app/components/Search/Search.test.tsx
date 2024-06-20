import { Search } from './Search';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/app/components/Search', () => {
  test('renders the component', () => {
    render(<Search data-testid="Search-test-id" />);
    const component = screen.getByTestId('Search-test-id');
    expect(component).toBeInTheDocument();
  });
});
