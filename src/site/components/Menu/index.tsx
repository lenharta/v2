import { ElementProps } from '@/types';

export interface MenuProps extends ElementProps<'aside'> {}

export const Menu = (props: MenuProps) => {
  const { ...otherProps } = props;
  return (
    <aside {...otherProps} className="menu-layout">
      <section className="menu-content">
        <div className="menu-content--upper">
          <nav className="menu-nav">
            <button className="menu-nav-tab">Home</button>
            <button className="menu-nav-tab">About</button>
            <button className="menu-nav-tab">Experience</button>
            <button className="menu-nav-tab">Projects</button>
            <button className="menu-nav-tab">Toolbox</button>
            <button className="menu-nav-tab">Sandbox</button>
            <button className="menu-nav-tab">Contact</button>
          </nav>
        </div>

        <div className="divider" />

        <div className="menu-content--lower">
          <nav className="menu-social-nav">
            <button className="menu-social-nav-link">X</button>
            <button className="menu-social-nav-link">Github</button>
            <button className="menu-social-nav-link">LinkedIn</button>
            <button className="menu-social-nav-link">CodeSandbox</button>
          </nav>

          <div className="menu-contact-card">
            <span className="menu-contact-card--name">Andrew Lenhart</span>
            <span className="menu-contact-card--email">andrew.code21@gmail.com</span>
            <span className="menu-contact-card--locale">Greensboro, North Carolina</span>
            <span className="menu-contact-card--signature">@lenharta, 2024</span>
          </div>
        </div>
      </section>
    </aside>
  );
};
