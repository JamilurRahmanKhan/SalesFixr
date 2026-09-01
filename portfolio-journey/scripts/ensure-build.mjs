import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const outDirMarker = resolve(import.meta.dirname, '../../public/software-portfolio-app/index.html');

try {
  await access(outDirMarker);
} catch {
  console.log('[predev] public/software-portfolio-app/ is missing (gitignored build output) — building it once...');
  const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const result = spawnSync(npmCmd, ['run', 'journey:build'], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
