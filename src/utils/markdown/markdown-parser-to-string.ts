import { Processor } from 'unified';
import rehypeStringify from 'rehype-stringify';

import { MarkdownParser } from './markdown-parser-base';

export class MarkdownParserString extends MarkdownParser {
  protected static serializeTreeAsString(processor: Processor) {
    return processor.use(rehypeStringify, { allowDangerousHtml: false });
  }

  static Parse = async (input: string): Promise<string> => {
    let processor = MarkdownParser.createTreeProcessor();
    processor = MarkdownParser.allowCommonMarkdown(processor);
    processor = MarkdownParser.allowGithubMarkdown(processor);
    processor = MarkdownParser.allowMarkdownMathFormula(processor);
    processor = MarkdownParser.convertMarkdownTreeToHtmlTree(processor);
    processor = MarkdownParser.allowRawHtmlElements(processor);
    processor = MarkdownParser.sanitizeHtmlElements(processor);
    processor = MarkdownParser.allowHtmlKatexFormula(processor);
    processor = MarkdownParser.allowCodeSyntaxHighlightInHtml(processor);
    processor = MarkdownParserString.serializeTreeAsString(processor);
    const result = await MarkdownParser.processInputAsync(processor, input);
    return String(result);
  };
}
