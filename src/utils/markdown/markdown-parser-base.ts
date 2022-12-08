import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import { unified, Processor } from 'unified';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import remarkToRehype from 'remark-rehype';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/vs2015.css';
// light
// import 'highlight.js/styles/vs.css'

export abstract class MarkdownParser {
  protected static createTreeProcessor(): Processor {
    return unified();
  }

  protected static allowCommonMarkdown(processor: Processor): Processor {
    return processor.use(remarkParse);
  }

  protected static allowGithubMarkdown(processor: Processor): Processor {
    return processor.use(remarkGfm);
  }

  protected static allowMarkdownMathFormula(processor: Processor) {
    return processor.use(remarkMath);
  }

  protected static convertMarkdownTreeToHtmlTree(processor: Processor) {
    return processor.use(remarkToRehype, { allowDangerousHtml: true });
  }

  protected static allowRawHtmlElements(processor: Processor) {
    return processor.use(rehypeRaw);
  }

  protected static sanitizeHtmlElements(processor: Processor) {
    return processor.use(rehypeSanitize, {
      ...defaultSchema,
      tagNames: [...(defaultSchema.tagNames || []), 'pre', 'code'],
      attributes: {
        ...defaultSchema.attributes,
        div: [
          ...(defaultSchema.attributes?.div || []),
          ['className', 'math', 'math-display'],
        ],
        span: [
          ...(defaultSchema.attributes?.span || []),
          ['className', 'math', 'math-inline'],
        ],
        code: [
          ...(defaultSchema.attributes?.code || []),
          ['className', 'language-js' /* more supported languages here */],
        ],
      },
    });
  }

  protected static allowHtmlKatexFormula(processor: Processor) {
    return processor.use(rehypeKatex);
  }

  protected static allowCodeSyntaxHighlightInHtml(processor: Processor) {
    return processor.use(rehypeHighlight);
  }

  protected static async processInputAsync(
    processor: Processor,
    input: string,
  ) {
    return processor.process(input);
  }
}
