import React from 'react';

interface CanvasControlProps {}

type CanvasControlType = 'text' | 'number' | 'toggle' | 'select' | 'checkbox' | 'radio';

type CanvasControlOptionToggle = {
  type: 'toggle';
  item: { value: boolean | undefined; label: string };
  value?: boolean | undefined;
};

type CanvasControlOptionText = {
  type: 'text';
  value?: string | number | readonly string[] | undefined;
};
type CanvasControlOptionNumber = {
  type: 'text';
  value?: string | number | readonly string[] | undefined;
};

function CanvasSelect() {}

function CanvasToggle(props: { value: string; label: string; checked: boolean }) {
  // const { value, label, checked } = props;
}

function CanvasButton() {}
function CanvasControl() {}

export { CanvasControl };
