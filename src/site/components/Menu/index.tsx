import { ElementProps } from '@/types';

export interface MenuProps extends ElementProps<'aside'> {}

export const Menu = (props: MenuProps) => {
  const { ...otherProps } = props;
  return (
    <aside {...otherProps} className="menu-layout">
      <div className="menu-content">
        <section className="menu-content--upper">
          <div className="menu-logobox"></div>

          <nav className="menu-nav-local"></nav>

          <nav className="menu-nav-social"></nav>
        </section>

        <div className="menu-divider" />

        <section className="menu-content--lower"></section>
      </div>
    </aside>
  );
};
