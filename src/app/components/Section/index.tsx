import { Core } from '@types';

type SectionProps = Core.BaseProps<
  'section',
  {
    // classNames: Core.Clxss<'root' | 'anchor' | 'header'>;
  }
>;

function useSectionProps(props: SectionProps) {
  // const classNames = useClxss
  return {
    root: {},
    anchor: {},
    header: {},
  };
}

type SectionComponent = React.FC<SectionProps> & {};

export const Section: SectionComponent = (props) => {
  return <section></section>;
};
