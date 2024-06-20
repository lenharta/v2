import { SideMenu } from './SideMenu';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/app/components/SideMenu', () => {
  test('renders the component', () => {
    render(<SideMenu data-testid="SideMenu-test-id" />);
    const component = screen.getByTestId('SideMenu-test-id');
    expect(component).toBeInTheDocument();
  });
});
