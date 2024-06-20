import { Title } from './Title';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Title', () => {
  test('renders the component', async () => {
    render(<Title data-testid="Title-testid" />);
    expect(screen.getByTestId('Title-testid')).toBeInTheDocument();
  });
});
