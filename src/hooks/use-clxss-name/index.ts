import clsx from 'clsx';

interface ClxssOptions<T extends Record<string, any>> {
  className: string | undefined;
  unprefixed?: (keyof T)[] | undefined;
}

interface ClxssProps<T extends Record<string, any>> {
  opts?: ClxssOptions<T> | undefined;
  mods: T;
  key: string;
}

function useClxss<T extends Record<string, any>>(props: ClxssProps<T>): string {
  const { key, mods, opts } = props;
  const { className, unprefixed = [] } = opts ?? {};

  const keys = Object.keys(mods) as (keyof T)[];

  const format = (k: keyof T, v: T[keyof T]): string => {
    return ['variant', ...unprefixed].includes(k.toString())
      ? [key, v].join('--')
      : [key, [k, v].join('-')].join('--');
  };

  const build = keys.map((k) => {
    const clxss = format(k, mods[k]);
    return { [clxss]: mods[k] };
  });

  // NOTE: TEST PERFORMANCE, MEMO IF NEEDED.
  // React.useMemo(() => clsx(key, ...build, className), [key, mods, opts]);
  return clsx(key, ...build, className);
}

export { useClxss };
