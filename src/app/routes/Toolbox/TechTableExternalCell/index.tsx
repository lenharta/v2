import { ICON, Icon, Table } from '@/core';

interface TechTableExternalCellProps {
  name: string;
  url?: string;
  icon?: ICON;
}

export const TechTableExternalCell = (props: TechTableExternalCellProps) => {
  const { url = '#', name, icon = 'open' } = props;
  return (
    <Table.Cell className="tech-table-cell">
      <a
        href={url}
        target="_blank"
        children={<Icon name={icon} />}
        className="tech-table-external-cell"
        aria-label={name}
      />
    </Table.Cell>
  );
};
