import { Page } from './Page';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/app/containers/Page', () => {
  test('renders the component', () => {
    render(<Page data-testid="Page-test-id" />);
    const component = screen.getByTestId('Page-test-id');
    expect(component).toBeInTheDocument();
  });
});
