interface DemoDirectoryItem {
  id: string;
  path: string;
  title: string;
  banner: string;
  summary: string;
}

interface DemoDirectoryCardProps {
  id: string;
  path: string;
  title: string;
  banner: React.ReactNode;
  summary: string;
}

export type { DemoDirectoryItem, DemoDirectoryCardProps };
