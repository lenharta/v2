import { cx } from '@/app/utils';

export const HeaderSpacer: React.FC = () => {
  return (
    <div className={cx('header-spacer')}>
      <div className={cx('header-spacer-inner')} />
    </div>
  );
};

HeaderSpacer.displayName = '@v2/Header.Spacer';
