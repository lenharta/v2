import { CodeLanguage, useShiki } from '@/app/shiki';
import { DURATION, EASING } from '@/core';

export interface SnippetProps {
  language?: CodeLanguage;
  code: string;
}

const transitionStyles = {
  transitionDuration: `${DURATION['slow-02']}ms`,
  transitionProperty: 'background-color, color',
  transitionTimingFunction: EASING.expressive,
};

export function Snippet({ code = '', language }: SnippetProps) {
  const highlight = useShiki();

  const highlighted = highlight(code.trim(), language || 'tsx');

  return (
    <div className="v2-snippet">
      {!highlighted.highlighted ? (
        <pre style={{ ...transitionStyles }}>
          <code>{highlighted.code}</code>
        </pre>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: highlighted.code }} />
      )}
    </div>
  );
}
