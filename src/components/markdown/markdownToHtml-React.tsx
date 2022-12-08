import { MarkdownParserReact } from '../../utils/markdown/markdown-parser-to-react-element';
import React, { useEffect, useState } from 'react';
import { ReactElement } from 'rehype-react/lib';

const MarkdownToHtml: React.FC<{ children: string }> = (props) => {
  const [data, setData] = useState<ReactElement>(React.createElement('div'));
  useEffect(() => {
    const generateHtml = MarkdownParserReact.Parse(props.children);
    generateHtml.then((value) => {
      setData(value);
    });
    generateHtml.catch(console.error);
  }, []);
  return <div>{data}</div>;
};

export default MarkdownToHtml;
