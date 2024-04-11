import { useNavigate } from 'react-router-dom';
import { LayoutHeaderLeft, LayoutHeaderLeftComponent } from './Left';

export type LayoutHeaderComponent = React.FC<{}> & {
  Left: LayoutHeaderLeftComponent;
};

export const LayoutHeader: LayoutHeaderComponent = ({}) => {
  const navigate = useNavigate();
  return (
    <header className="layout-header">
      <LayoutHeader.Left navigate={navigate} />
    </header>
  );
};

LayoutHeader.displayName = '@v2/app/Layout.Header';
LayoutHeader.Left = LayoutHeaderLeft;
