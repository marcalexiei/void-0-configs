import type { defineConfig } from 'oxfmt';

// defineConfig config infers parameters
type OxfmtConfig = Parameters<typeof defineConfig>[0];

const oxfmtConfig: OxfmtConfig = {
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
      'unknown',
    ],
    newlinesBetween: true,
  },
};

export { oxfmtConfig };
export default oxfmtConfig;
