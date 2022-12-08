import { MarkdownParser } from '../../utils/markdown/markdown-parser';
import React, { useEffect, useState } from 'react';

const MarkdownToHtml: React.FC<{ children: string }> = (props) => {
  const [data, setData] = useState('loading text...');
  useEffect(() => {
    const generateHtml = MarkdownParser.Parse(props.children);
    generateHtml.then((value) => {
      setData(value);
    });
    generateHtml.catch(console.error);
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

export default MarkdownToHtml;
