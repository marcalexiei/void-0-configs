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

function mergeSortImports(
  userValue: SortImportsUserConfig | undefined,
  base: SortImportsConfig = baseSortImports,
): SortImportsUserConfig {
  if (userValue === undefined || userValue === true) {
    return base;
  }

  if (userValue === false) {
    return false;
  }

  return { ...base, ...userValue };
}

// oxfmt replaces `sortImports` with the override value instead of merging the two
function mergeOverride(
  override: OxfmtOverrideConfig,
  sortImports: SortImportsConfig,
): OxfmtOverrideConfig {
  if (override.options?.sortImports === undefined) {
    return override;
  }

  return {
    ...override,
    options: {
      ...override.options,
      sortImports: mergeSortImports(override.options.sortImports, sortImports),
    },
  };
}

/**
 * Merges an oxfmt config on top of this preset.
 *
 * Top level keys are overridden, `sortImports` is merged one level deep unless it is
 * set to `false`, and `overrides` are appended to the preset ones so they win.
 * A `sortImports` inside an override is merged the same way.
 */
function defineConfig(userConfig: OxfmtConfig = {}): OxfmtConfig {
  const sortImports = mergeSortImports(userConfig.sortImports);
  const overrideSortImports = typeof sortImports === 'object' ? sortImports : baseSortImports;

  return {
    ...baseConfig,
    ...userConfig,
    sortImports,
    overrides: [
      ...baseOverrides,
      ...(userConfig.overrides ?? []).map((override) =>
        mergeOverride(override, overrideSortImports),
      ),
    ],
  };
}

export { defineConfig };
