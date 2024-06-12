import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Box, Icon, factory } from '@/core';
import { HeaderCSS, HeaderRootProps } from './types';
import { useStateContext } from '@/app';
import { useNavigate } from 'react-router-dom';
import { Search } from '../Search/Search';

const css: Partial<HeaderCSS> = {
  root: 'v2-header',
};

type HeaderRootFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'header';
  omits: 'children';
  props: HeaderRootProps;
}>;

const Header = factory<HeaderRootFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  const store = useStateContext();
  const navigate = useNavigate();

  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx(css.root, className)}>
      <Action.Group
        scheme="primary-1-interactive"
        variant="elevated"
        orientation="horizontal"
        childSelector="[data-header-action-item]"
        parentSelector="[data-header-action-group]"
        data-header-action-group
      >
        <Action
          data-header-action-item
          icon={
            <Icon
              size="lg"
              name="logo-v2"
              variant={store.icons}
              style={{ fill: 'var(--c-accent-A600)' }}
            />
          }
          onClick={() => navigate('/')}
          label="home"
          value="/"
        />

        <Action.Spacer />

        <Search />

        <Action
          data-header-action-item
          icon={<Icon variant={store.icons} />}
          onClick={(event) => console.log(event.currentTarget.value)}
          label="menu"
          value="/"
        />
      </Action.Group>
    </Box>
  );
});

Header.displayName = '@v2/Header.Root';
export { Header };
