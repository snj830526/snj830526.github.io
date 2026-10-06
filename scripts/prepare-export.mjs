import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// vinext beta.5 skips non-root routes when trailingSlash is enabled because
// its prerender request is redirected. Keep its working export mode, then
// provide a directory index for the public GitHub Pages /codex/ URL.
const exportedPage = new URL('../dist/client/codex.html', import.meta.url);
const directoryIndex = new URL('../dist/client/codex/index.html', import.meta.url);
const html = await readFile(exportedPage, 'utf8');
if (!html.includes('Use Codex CLI') || !html.includes('/codex/')) {
  throw new Error('The Codex guide was not exported with its expected content and URL.');
}
await mkdir(new URL('../dist/client/codex/', import.meta.url), { recursive: true });
await copyFile(exportedPage, directoryIndex);
console.log(`Prepared ${fileURLToPath(directoryIndex)}`);
