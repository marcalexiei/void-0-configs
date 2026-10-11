---
'@marcalexiei/oxlint-config': minor
---

feat: add `react` config

Port of the `react` config of `@marcalexiei/eslint-config`, available at
`@marcalexiei/oxlint-config/react`. It sets every rule of the `react` plugin and
must be listed after the `base` config, since it overrides `unicorn/import-style`:
named imports (`import { useState } from 'react'`) are the only accepted way to
import React, as recommended by its documentation. The eslint config asked for
namespace imports instead.
