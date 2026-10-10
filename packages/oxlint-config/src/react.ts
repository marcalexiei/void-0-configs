import type { OxlintConfig } from 'oxlint';

const reactConfig: OxlintConfig = {
  plugins: ['eslint', 'react', 'unicorn'],

  rules: {
    //=============================================================================
    // REACT
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=react

    'react/button-has-type': 'error',

    // reports any capitalized function call, like `Intl.DateTimeFormat()`
    // https://oxc.rs/docs/guide/usage/linter/rules/react/capitalized-calls.html
    'react/capitalized-calls': 'off',

    'react/checked-requires-onchange-or-readonly': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/display-name.html
    'react/display-name': ['error', { checkContextObjects: true }],

    'react/error-boundaries': 'error',
    'react/exhaustive-deps': 'error',

    // handled by react/exhaustive-deps
    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-effect-dependencies.html
    'react/exhaustive-effect-dependencies': 'off',

    // by default it bans `className` and `style` on every component
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-component-props.html
    'react/forbid-component-props': 'off',

    'react/forward-ref-uses-ref': 'error',
    'react/function-component-definition': 'off',
    'react/globals': 'error',

    // reports `const [value] = useState()`, there is no option to allow it
    // https://oxc.rs/docs/guide/usage/linter/rules/react/hook-use-state.html
    'react/hook-use-state': 'off',

    // handled by react/rules-of-hooks
    // https://oxc.rs/docs/guide/usage/linter/rules/react/hooks.html
    'react/hooks': 'off',

    'react/iframe-missing-sandbox': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/immutability.html
    'react/immutability': 'off',

    // flags every call to the listed libraries, there is nothing to fix at the call site
    // https://oxc.rs/docs/guide/usage/linter/rules/react/incompatible-library.html
    'react/incompatible-library': 'off',

    // reports React Compiler bugs, not code issues
    // https://oxc.rs/docs/guide/usage/linter/rules/react/invariant.html
    'react/invariant': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value.html
    'react/jsx-boolean-value': ['error', 'never'],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension.html
    'react/jsx-filename-extension': ['error', { extensions: ['jsx', 'tsx'] }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments.html
    'react/jsx-fragments': ['error', 'syntax'],

    'react/jsx-handler-names': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key.html
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],

    'react/jsx-max-depth': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',

    // only useful for projects that translate every string
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-literals.html
    'react/jsx-no-literals': 'off',

    'react/jsx-no-script-url': 'error',

    // browsers imply `noopener` for `target="_blank"`
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html
    'react/jsx-no-target-blank': 'off',

    // handled by no-undef
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef.html
    'react/jsx-no-undef': 'off',

    // `<>{children}</>` is needed to return an element from a `ReactNode`
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],

    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-spread-multi': 'error',
    'react/jsx-props-no-spreading': 'off',

    // handled by react/exhaustive-deps
    // https://oxc.rs/docs/guide/usage/linter/rules/react/memo-dependencies.html
    'react/memo-dependencies': 'off',

    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-clone-element': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',

    // handled by react/set-state-in-effect
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-deriving-state-in-effects.html
    'react/no-deriving-state-in-effects': 'off',

    // error boundaries are still written as classes
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': 'error',
    'react/no-unsafe': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/require-render-return': 'error',

    // error boundaries need `setState`
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-set-state.html
    'react/no-set-state': 'off',

    'react/state-in-constructor': 'off',

    'react/no-find-dom-node': 'error',
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-react-children': 'error',
    'react/no-render-return-value': 'error',
    'react/no-this-in-sfc': 'error',

    // reports every apostrophe in text
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html
    'react/no-unescaped-entities': 'off',

    // handled by JSX types, and misfires on custom renderers
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html
    'react/no-unknown-property': 'off',

    'react/no-unstable-nested-components': 'error',

    // depends on the bundler supporting fast refresh
    // https://oxc.rs/docs/guide/usage/linter/rules/react/only-export-components.html
    'react/only-export-components': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-function-component.html
    'react/prefer-function-component': ['error', { allowErrorBoundary: true }],

    'react/preserve-manual-memoization': 'error',
    'react/purity': 'error',

    // not needed with the automatic JSX runtime
    // https://oxc.rs/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html
    'react/react-in-jsx-scope': 'off',

    'react/refs': 'error',

    // would report the disable comment of every other react rule
    // https://oxc.rs/docs/guide/usage/linter/rules/react/rule-suppression.html
    'react/rule-suppression': 'off',

    'react/rules-of-hooks': 'error',
    'react/self-closing-comp': 'error',
    'react/set-state-in-effect': 'error',
    'react/set-state-in-render': 'error',
    'react/static-components': 'error',
    'react/style-prop-object': 'error',

    // handled by no-const-assign and the type checker
    // https://oxc.rs/docs/guide/usage/linter/rules/react/syntax.html
    'react/syntax': 'off',

    // lists what React Compiler skips, not code issues
    // https://oxc.rs/docs/guide/usage/linter/rules/react/todo.html
    'react/todo': 'off',

    'react/unsupported-syntax': 'error',
    'react/use-memo': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/void-use-memo': 'error',

    //=============================================================================
    // ESLINT
    //=============================================================================

    // `memo(function Name() {})` is how a wrapped component gets its display name
    // https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-arrow-callback.html
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],

    //=============================================================================
    // UNICORN
    //=============================================================================

    // named imports are the form recommended by the React documentation
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/import-style.html
    'unicorn/import-style': [
      'error',
      { styles: { react: { default: false, named: true, namespace: false } } },
    ],
  },
};

export { reactConfig, reactConfig as default };
