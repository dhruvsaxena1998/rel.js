#!/usr/bin/env node

import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('index.d.ts', 'dist/index.d.ts');
