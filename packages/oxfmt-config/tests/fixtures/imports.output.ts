import path from 'node:path';

import * as oxfmt from 'oxfmt';
import { describe, expect, it } from 'vitest';

import config from '../../src/config.js';

describe('config', () => {
  it('example', async () => {
    oxfmt.format(path.join(''), '', config);
  });
});
