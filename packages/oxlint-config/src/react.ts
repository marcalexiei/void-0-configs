import type { OxlintConfig } from 'oxlint';

const reactConfig: OxlintConfig = {
  plugins: ['eslint', 'react', 'unicorn'],

  rules: {
    //=============================================================================
    // REACT
    //=============================================================================
    // https://oxc.rs/docs/guide/usage/linter/rules.html?sort=name&dir=asc&scope=react

    // https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type.html
    'react/button-has-type': 'error',

    // reports any capitalized function call, like `Intl.DateTimeFormat()`
    // https://oxc.rs/docs/guide/usage/linter/rules/react/capitalized-calls.html
    'react/capitalized-calls': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.html
    'react/checked-requires-onchange-or-readonly': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/display-name.html
    'react/display-name': ['error', { checkContextObjects: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/error-boundaries.html
    'react/error-boundaries': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html
    'react/exhaustive-deps': 'error',

    // handled by react/exhaustive-deps
    // https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-effect-dependencies.html
    'react/exhaustive-effect-dependencies': 'off',

    // by default it bans `className` and `style` on every component
    // https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-component-props.html
    'react/forbid-component-props': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/forward-ref-uses-ref.html
    'react/forward-ref-uses-ref': 'error',

    // both function declarations and arrow functions are fine as components
    // https://oxc.rs/docs/guide/usage/linter/rules/react/function-component-definition.html
    'react/function-component-definition': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/globals.html
    'react/globals': 'error',

    // reports `const [value] = useState()`, there is no option to allow it
    // https://oxc.rs/docs/guide/usage/linter/rules/react/hook-use-state.html
    'react/hook-use-state': 'off',

    // handled by react/rules-of-hooks
    // https://oxc.rs/docs/guide/usage/linter/rules/react/hooks.html
    'react/hooks': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/iframe-missing-sandbox.html
    'react/iframe-missing-sandbox': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/immutability.html
    'react/immutability': 'error',

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

    // naming convention, not a defect
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-handler-names.html
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

    // the default depth of 2 fails on ordinary layouts
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-max-depth.html
    'react/jsx-max-depth': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-comment-textnodes.html
    'react/jsx-no-comment-textnodes': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-constructed-context-values.html
    'react/jsx-no-constructed-context-values': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html
    'react/jsx-no-duplicate-props': 'error',

    // only useful for projects that translate every string
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-literals.html
    'react/jsx-no-literals': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url.html
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

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case.html
    'react/jsx-pascal-case': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html
    'react/jsx-props-no-spread-multi': 'error',

    // wrapper components forward their props
    // https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spreading.html
    'react/jsx-props-no-spreading': 'off',

    // handled by react/exhaustive-deps
    // https://oxc.rs/docs/guide/usage/linter/rules/react/memo-dependencies.html
    'react/memo-dependencies': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key.html
    'react/no-array-index-key': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-children-prop.html
    'react/no-children-prop': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-clone-element.html
    'react/no-clone-element': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger.html
    'react/no-danger': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger-with-children.html
    'react/no-danger-with-children': 'error',

    // handled by react/set-state-in-effect
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-deriving-state-in-effects.html
    'react/no-deriving-state-in-effects': 'off',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-mount-set-state.html
    'react/no-did-mount-set-state': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-update-set-state.html
    'react/no-did-update-set-state': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html
    'react/no-direct-mutation-state': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-is-mounted.html
    'react/no-is-mounted': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html
    'react/no-redundant-should-component-update': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs.html
    'react/no-string-refs': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unsafe.html
    'react/no-unsafe': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-will-update-set-state.html
    'react/no-will-update-set-state': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-es6-class.html
    'react/prefer-es6-class': 'error',

    // error boundaries are still written as classes
    // https://oxc.rs/docs/guide/usage/linter/rules/react/require-render-return.html
    'react/require-render-return': 'error',

    // error boundaries need `setState`
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-set-state.html
    'react/no-set-state': 'off',

    // classes are left for error boundaries, where either style works
    // https://oxc.rs/docs/guide/usage/linter/rules/react/state-in-constructor.html
    'react/state-in-constructor': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-find-dom-node.html
    'react/no-find-dom-node': 'error',

    // small private components can live next to their parent
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-multi-comp.html
    'react/no-multi-comp': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-namespace.html
    'react/no-namespace': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-object-type-as-default-prop.html
    'react/no-object-type-as-default-prop': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-react-children.html
    'react/no-react-children': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value.html
    'react/no-render-return-value': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc.html
    'react/no-this-in-sfc': 'error',

    // reports every apostrophe in text
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html
    'react/no-unescaped-entities': 'off',

    // handled by JSX types, and misfires on custom renderers
    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html
    'react/no-unknown-property': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/no-unstable-nested-components.html
    'react/no-unstable-nested-components': 'error',

    // depends on the bundler supporting fast refresh
    // https://oxc.rs/docs/guide/usage/linter/rules/react/only-export-components.html
    'react/only-export-components': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-function-component.html
    'react/prefer-function-component': ['error', { allowErrorBoundary: true }],

    // https://oxc.rs/docs/guide/usage/linter/rules/react/preserve-manual-memoization.html
    'react/preserve-manual-memoization': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/purity.html
    'react/purity': 'error',

    // not needed with the automatic JSX runtime
    // https://oxc.rs/docs/guide/usage/linter/rules/react/react-in-jsx-scope.html
    'react/react-in-jsx-scope': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/refs.html
    'react/refs': 'error',

    // would report the disable comment of every other react rule
    // https://oxc.rs/docs/guide/usage/linter/rules/react/rule-suppression.html
    'react/rule-suppression': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks.html
    'react/rules-of-hooks': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html
    'react/self-closing-comp': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/set-state-in-effect.html
    'react/set-state-in-effect': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/set-state-in-render.html
    'react/set-state-in-render': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/static-components.html
    'react/static-components': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object.html
    'react/style-prop-object': 'error',

    // handled by no-const-assign and the type checker
    // https://oxc.rs/docs/guide/usage/linter/rules/react/syntax.html
    'react/syntax': 'off',

    // lists what React Compiler skips, not code issues
    // https://oxc.rs/docs/guide/usage/linter/rules/react/todo.html
    'react/todo': 'off',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/unsupported-syntax.html
    'react/unsupported-syntax': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/use-memo.html
    'react/use-memo': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html
    'react/void-dom-elements-no-children': 'error',

    // https://oxc.rs/docs/guide/usage/linter/rules/react/void-use-memo.html
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

    // named imports are the form recommended by the React documentation,
    // namespace ones are left to import/no-namespace
    // https://oxc.rs/docs/guide/usage/linter/rules/unicorn/import-style.html
    'unicorn/import-style': [
      'error',
      { styles: { react: { default: false, named: true, namespace: true } } },
    ],
  },
};

export { reactConfig, reactConfig as default };
