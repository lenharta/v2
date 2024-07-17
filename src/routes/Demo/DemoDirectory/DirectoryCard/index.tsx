import { DemoDirectoryCardProps } from '../types';
import { Text, Title, UnstyledLink } from '@core';

const DirectoryCard: React.FC<DemoDirectoryCardProps> = (props) => {
  const { id, path, title, banner, summary } = props;
  return (
    <UnstyledLink id={id} className="v2-demo-directory-card" to={path}>
      <header className="v2-demo-directory-card-header">{banner}</header>
      <div className="v2-demo-directory-card-body">
        <Title h3>{title}</Title>
        <Text>{summary}</Text>
      </div>
    </UnstyledLink>
  );
};

DirectoryCard.displayName = '@v2/Demo.Directory.Card';
export { DirectoryCard };
