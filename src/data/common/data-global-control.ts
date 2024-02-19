import { Accent, Avatar, Dir, Mode } from "@/types/store";

type ControlOption<T> = {
  value: T;
  scheme?: any;
  label?: string;
};

type ControlGroup<T> = {
  options: ControlOption<T>[];
  scheme?: any;
  label?: string;
};

export const DATA_GLOBAL_CONTROL_GROUP_THEME: ControlGroup<Mode> = {
  label: 'Theme Mode',
  options: [
    { value: 'light', label: 'Light Mode' },
    { value: 'dark', label: 'Dark Mode' },
    { value: 'dim', label: 'Dim Mode' },
  ],
};

export const DATA_GLOBAL_CONTROL_GROUP_DIRECTION: ControlGroup<Dir> = {
  label: 'Direction',
  options: [
    { value: 'ltr', label: 'Left-to-right' },
    { value: 'rtl', label: 'Right-to-left' },
  ],
};

export const DATA_GLOBAL_CONTROL_GROUP_ACCENT: ControlGroup<Accent> = {
  label: 'Accent',
  options: [
    { value: 'orange', scheme: 'orange' },
    { value: 'yellow', scheme: 'yellow' },
    { value: 'green', scheme: 'green' },
    { value: 'mint', scheme: 'mint' },
    { value: 'teal', scheme: 'teal' },
    { value: 'cyan', scheme: 'cyan' },
    { value: 'blue', scheme: 'blue' },
    { value: 'indigo', scheme: 'indigo' },
    { value: 'purple', scheme: 'purple' },
    { value: 'pink', scheme: 'pink' },
    { value: 'red', scheme: 'red' },
    { value: 'brown', scheme: 'brown' },
  ],
};

export const DATA_GLOBAL_CONTROL_GROUP_AVATAR: ControlGroup<Avatar> = {
  label: 'Avatar',
  options: [
    { value: 'baseball' },
    { value: 'basketball' },
    { value: 'beer' },
    { value: 'bolt' },
    { value: 'code' },
    { value: 'coffee' },
    { value: 'dog' },
    { value: 'film' },
    { value: 'football' },
    { value: 'heart' },
    { value: 'music' },
    { value: 'palette' },
    { value: 'person' },
    { value: 'pizza' },
    { value: 'puzzle' },
    { value: 'robot' },
    { value: 'shield' },
    { value: 'smiley' },
    { value: 'soccer' },
    { value: 'star' },
    { value: 'trophy' },
  ],
};