import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Title } from './Title';

describe('@v2/core/Title', () => {
  test('renders the component', async () => {
    render(<Title data-testid="Title-testid" />);
    expect(screen.getByTestId('Title-testid')).toBeInTheDocument();
  });
});
