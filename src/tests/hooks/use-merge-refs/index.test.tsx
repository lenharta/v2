import * as React from 'react';
import { render } from '@/tests/utils';
import { useMergeRefs } from '@/hooks';
import { describe, expect, test } from 'vitest';

function TestComponent({ refs }: { refs: React.ForwardedRef<HTMLButtonElement>[] }) {
  const ref = React.useRef<HTMLButtonElement>(null);
  return <button ref={useMergeRefs(...refs, ref)} type="button" />;
}

describe('useMergeRefs()', () => {
  test('assigns object refs to a given object argument', () => {
    const objectRef = React.createRef<HTMLButtonElement | null>();

    render(<TestComponent refs={[objectRef]} />);
    expect(objectRef.current instanceof HTMLButtonElement).toBe(true);
  });

  test('assigns function refs to a given object argument', () => {
    let fnRefValue: HTMLButtonElement | null = null;
    const fnRef = (node: HTMLButtonElement | null) => {
      fnRefValue = node;
    };

    render(<TestComponent refs={[fnRef]} />);
    expect(fnRefValue! instanceof HTMLButtonElement).toBe(true);
  });

  test('assigns refs to a given object argument', () => {
    const objectRef = React.createRef<HTMLButtonElement | null>();

    let fnRefValue: HTMLButtonElement | null = null;
    const fnRef = (node: HTMLButtonElement | null) => {
      fnRefValue = node;
    };

    render(<TestComponent refs={[objectRef, fnRef]} />);
    expect(fnRefValue! instanceof HTMLButtonElement).toBe(true);
    expect(objectRef.current instanceof HTMLButtonElement).toBe(true);
  });
});
