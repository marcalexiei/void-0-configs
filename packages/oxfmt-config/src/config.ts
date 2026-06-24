import type { OxfmtConfig } from 'oxfmt';

const oxfmtConfig = {
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSameLine: true,
  bracketSpacing: true,
  arrowParens: 'always',
  quoteProps: 'as-needed',

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
} satisfies OxfmtConfig;

export { oxfmtConfig };
export default oxfmtConfig;
