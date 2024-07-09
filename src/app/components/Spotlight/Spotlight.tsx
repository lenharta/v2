import { SpotlightMeta } from './SpotlightMeta';
import { SpotlightPanel } from './SpotlightPanel';
import { SpotlightDisplay } from './SpotlightDisplay';

type SpotlightRootProps = {};

type SpotlightRootFactory = React.FC<SpotlightRootProps> & {
  Root: typeof Spotlight;
  Meta: typeof SpotlightMeta;
  Panel: typeof SpotlightPanel;
  Display: typeof SpotlightDisplay;
};

const Spotlight: SpotlightRootFactory = (props) => {
  const {} = props;
  return (
    <div className="v2-spotlight">
      <span>Spotlight</span>
    </div>
  );
};

Spotlight.Root = Spotlight;
Spotlight.Meta = SpotlightMeta;
Spotlight.Panel = SpotlightPanel;
Spotlight.Display = SpotlightDisplay;
Spotlight.displayName = '@v2/Spotlight.Root';
export { Spotlight };
