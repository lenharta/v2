import * as React from 'react';
import { useThemeCTX } from '@/store';
import { Icon, Avatar } from '@/common';
import { PageHeaderComponent } from '@/types';

export const PageHeaderActionBox: PageHeaderComponent['ActionBox'] = React.forwardRef(
  (props, ref) => {
    const { ...otherProps } = props;
    const { state } = useThemeCTX();

    return (
      <div {...otherProps} ref={ref} className="PageHeaderActionBox">
        <Avatar
          to="/preferences"
          accent={state.accent}
          aria-label="go to preferences"
          className="PageHeaderActionBox-avatar"
          children={<Icon name={state.avatar} />}
        />
      </div>
    );
  }
);
