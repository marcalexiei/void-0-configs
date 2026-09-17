import type {
  OxfmtConfig,
  OxfmtOverrideConfig,
  SortImportsConfig,
  SortImportsUserConfig,
} from 'oxfmt';

const baseSortImports: SortImportsConfig = {
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
};

// Trailing commas are valid JSONC but break consumers parsing these files as plain JSON.
const baseOverrides: OxfmtOverrideConfig[] = [
  {
    files: ['**/*.jsonc'],
    options: { trailingComma: 'none' },
  },
];

const baseConfig: OxfmtConfig = {
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

  sortImports: baseSortImports,

  overrides: baseOverrides,
};

function mergeSortImports(userValue: SortImportsUserConfig | undefined): SortImportsUserConfig {
  if (userValue === undefined) {
    return baseSortImports;
  }

  if (typeof userValue === 'boolean') {
    return userValue;
  }

  return { ...baseSortImports, ...userValue };
}

/**
 * Merges an oxfmt config on top of this preset.
 *
 * Top level keys are overridden, `sortImports` is merged one level deep unless it is
 * set to a boolean, and `overrides` are appended to the preset ones so they win.
 */
function defineConfig(userConfig: OxfmtConfig = {}): OxfmtConfig {
  return {
    ...baseConfig,
    ...userConfig,
    sortImports: mergeSortImports(userConfig.sortImports),
    overrides: [...baseOverrides, ...(userConfig.overrides ?? [])],
  };
}

export { defineConfig };
