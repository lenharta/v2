interface CheckboxItem {
  label: string;
  value?: string | undefined;
  checked?: boolean | undefined;
  indeterminate?: boolean | undefined;
}

interface CheckboxProps {
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}
