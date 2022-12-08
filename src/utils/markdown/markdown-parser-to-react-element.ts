import React from 'react';
import { Processor } from 'unified';
import rehypeToReact from 'rehype-react';
import { ReactElement } from 'rehype-react/lib';
import { MarkdownParser } from './markdown-parser-base';

export class MarkdownParserReact extends MarkdownParser {
  protected static serializeTreeAsReactElement(processor: Processor) {
    return processor.use(rehypeToReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
    });
  }

  static Parse = async (input: string): Promise<ReactElement> => {
    let processor = MarkdownParser.createTreeProcessor();
    processor = MarkdownParser.allowCommonMarkdown(processor);
    processor = MarkdownParser.allowGithubMarkdown(processor);
    processor = MarkdownParser.allowMarkdownMathFormula(processor);
    processor = MarkdownParser.convertMarkdownTreeToHtmlTree(processor);
    processor = MarkdownParser.allowRawHtmlElements(processor);
    processor = MarkdownParser.sanitizeHtmlElements(processor);
    processor = MarkdownParser.allowHtmlKatexFormula(processor);
    processor = MarkdownParser.allowCodeSyntaxHighlightInHtml(processor);
    processor = MarkdownParserReact.serializeTreeAsReactElement(processor);
    const result = await MarkdownParser.processInputAsync(processor, input);
    return result.result as ReactElement;
  };
}
