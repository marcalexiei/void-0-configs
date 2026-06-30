import type { OxfmtConfig, SortImportsConfig } from 'oxfmt';

const oxfmtConfig: OxfmtConfig & { sortImports: SortImportsConfig } = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  bracketSameLine: true,
  bracketSpacing: true,
  arrowParens: 'always',
  objectWrap: 'preserve',
  proseWrap: 'preserve',
  endOfLine: 'lf',
  insertFinalNewline: true,
  embeddedLanguageFormatting: 'auto',

  sortPackageJson: true,

  sortImports: {
    groups: [
      'builtin',
      'external',
      ['internal', 'subpath'],
      'parent',
      'sibling',
      'index',
      'style',
      'side_effect',
      'side_effect_style',
      'unknown',
    ],
    newlinesBetween: true,
  },
};

export { oxfmtConfig };
export default oxfmtConfig;
