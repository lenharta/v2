interface ArticleMeta {
  src: string;
  path: string;
  title: string;
  summary: string;
}

interface ArticleContent {
  id: string;
  src: string;
  title: string;
  items: string[];
}

interface ArticleMatter {
  meta: ArticleMeta;
  sections: ArticleContent[];
}
