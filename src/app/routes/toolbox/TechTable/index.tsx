import React from 'react';
import { css } from './techtable-constants';
import { TechTableRow } from './TechTableRow';
import { TechTableItem } from './techtable-types';
import { Icon, ToolButton, VisuallyHidden } from '@/core';

const TechTable = () => {
  const [data, setData] = React.useState<TechTableItem[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean | undefined>();
  const [typeFilter, setTypeFilter] = React.useState<TechTableItem['type'] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}data/tech.json`);

        if (!response.ok) throw new Error('[@v2/toolbox/TechTable]: CHECK `GET` METHOD');

        const { data } = await response.json();

        setData(data);
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, []);

  const memoData = React.useCallback(() => {
    if (!typeFilter) return data;

    const clone = [...data];

    console.log('typeFilter', typeFilter);
    console.log('clone', clone);

    return clone.filter((item) => item.type === typeFilter);
  }, [data, typeFilter]);

  return (
    <table className={css.root}>
      <thead className={css.head.root}>
        <tr className={css.head.row}>
          <th className={css.head.cell}>Title</th>
          <th className={css.head.cell}>
            <span>Type</span>
            {typeFilter && (
              <ToolButton icon="close-x-circle" onClick={() => setTypeFilter(null)} size="xs" />
            )}
          </th>
          <th className={css.head.cell}>Info</th>
          <th className={css.head.cell}>
            <VisuallyHidden>Link</VisuallyHidden>
          </th>
        </tr>
      </thead>
      <tbody className={css.body.root}>
        {memoData().map((item) => (
          <TechTableRow key={item.id} setTypeFilter={setTypeFilter} {...item} />
        ))}
      </tbody>
      <tfoot className={css.foot.root}>
        <tr className={css.foot.row}>
          <td className={css.foot.cell}>Total: {data.length}</td>
          <td className={css.foot.cell}></td>
          <td className={css.foot.cell}></td>
          <td className={css.foot.cell}></td>
        </tr>
      </tfoot>
    </table>
  );
};

export { TechTable };
