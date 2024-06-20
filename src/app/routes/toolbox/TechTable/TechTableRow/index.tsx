import React from 'react';
import { Chip, Icon } from '@/core';
import { css } from '../techtable-constants';
import { TechTableColumn, TechTableItem } from '../techtable-types';

const TechTableRow = (
  props: { setTypeFilter: (value: TechTableItem['type'] | null) => void } & TechTableItem
) => {
  const { id, info, link, title, type, setTypeFilter } = props;

  const uid = React.useId();
  const getColumnId = (column: TechTableColumn) => `${id}${uid}${column}`;

  return (
    <tr className={css.body.row}>
      <td className={css.body.cell} id={getColumnId('title')}>
        {title}
      </td>

      <td className={css.body.cell} id={getColumnId('type')}>
        <Chip label={type} value={type} onClick={() => setTypeFilter(type)} />
      </td>

      <td className={css.body.cell} id={getColumnId('info')}>
        {info}
      </td>

      <td className={css.body.cell} id={getColumnId('link')}>
        <a href={link}>
          <Icon name="link-external-right" />
        </a>
      </td>
    </tr>
  );
};

export { TechTableRow };
