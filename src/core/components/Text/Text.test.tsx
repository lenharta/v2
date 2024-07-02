import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('@v2/core/Text', () => {
  test('renders the component', async () => {
    render(<Text data-testid="Text-testid" />);
    expect(screen.getByTestId('Text-testid')).toBeInTheDocument();
  });
});
