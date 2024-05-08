import { cx } from '@/app/utils';

export const SidebarSpacer: React.FC = () => {
  return (
    <div className={cx('sidebar-spacer')}>
      <div className={cx('sidebar-spacer-inner')} />
    </div>
  );
};

SidebarSpacer.displayName = '@v2/Sidebar.Spacer';
