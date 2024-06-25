import { Text } from './Text';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('@v2/core/Text', () => {
  test('renders the component', async () => {
    render(<Text data-testid="Text-testid" />);
    expect(screen.getByTestId('Text-testid')).toBeInTheDocument();
  });
});
