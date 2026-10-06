# Hey Terminal

English responsive marketing site with a dedicated `/codex/` SSH workflow guide. App screen and video are real
iPad Simulator captures. No site analytics, remote fonts, iframe embeds, forms,
or accounts have been added. Existing App Store metadata
and screenshots are unchanged.

## Local review

Requires Node 22.13+ and npm. From this directory:

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

Open http://localhost:3000/. This is a local address, not a public deployment.
The Codex guide is at http://localhost:3000/codex/.
`npm run lint` checks the actual page and configuration. Starter UI components
are unused and are not part of the page; the stock scaffold's unmodified
component lint issues are not treated as application findings.

## Static build and publication

```sh
npm run build
```

The actual static output is **dist/client/** (not out/). Do not publish the
repository root, dist/server, simulator data, or MarketingAssets/demo. The
hosting configuration points only to dist/client.

The GitHub Pages origin is the default for canonical and social metadata.
`SITE_URL` may override it when moving to a custom domain. After any
origin change, rebuild and publish only `dist/client`. Verify the
rendered canonical, Open Graph image, social-card URL, video MIME type and range
requests before announcing the site. The site is intended for a domain root,
not an arbitrary subdirectory.

Title, description, English language, SoftwareApplication JSON-LD, social
sharing card, app icon, explicit image dimensions, responsive breakpoints,
keyboard focus states, video controls and transcript are included. No pricing,
review rating or unverified security claim is embedded in structured data.

The Codex guide has separate canonical and social metadata. Its example terminal
commands are illustrative, not app footage. Codex CLI runs on the user's Mac or
Linux SSH host; no native iOS Codex or included Codex access is claimed. Setup
links to official OpenAI CLI and authentication documentation. The first prompt
is inspection only, followed by an optional small edit, diff review, and the
project's own tests. Network guidance starts on the same network and uses a
trusted VPN for remote access. Background disconnection and optional host-side
tmux recovery are explained.
The build prepares `dist/client/codex/index.html` from the exported guide so
direct `/codex/` links work on GitHub Pages. The pinned vinext beta skips
non-root routes when its `trailingSlash` mode redirects the prerender request;
the export preparation avoids that behavior without changing dependencies.
Internal page links use ordinary document navigation for this static site.

The pinned Sites scaffold dependencies and lockfile were retained. npm reported
11 dependency advisories when scaffolding. Reviewed for this static deployment:
the reported paths concern development servers, server functions, image parsers
and Node tooling. Only dist/client is packaged, with no Node/SSR server, image
optimizer or user uploads. Do not run audit fix --force; keep reviewing these
dependencies before using a server-backed deployment in the future.

## Links and assets

Store, support and privacy URLs are copied from the project's existing metadata.
Support and privacy links returned HTTP 200 during preparation; public document
contents and their consistency with the current app still need the owner's
review. An HTTP 200 alone does not prove a Notion page is publicly readable.

`public/demo.mp4`: web-friendly copy of the external demo. `poster.png`: the
24-second frame from the App Preview. `screen.png`: unaltered app frame extracted
from the source after correcting framebuffer orientation. `demo.vtt`: English
captions/walkthrough. `og.png`: typography-only AI-generated social graphic,
not app footage. `icon.png`: a copy of the existing app icon.

`codex-demo.mp4` and `codex-poster.png`: approved copies of the October 4
iPad remote-workflow master and its 24-second poster. The 26-second clip was
recorded in iPad Simulator using a temporary Mac SSH environment; it shows a
real read-only Codex workspace summary, not edits, tests, or deployment.
`codex-demo.vtt` supplies English descriptions, with a text walkthrough on the
guide. The original home-page video and assets are retained.

The production build and GitHub Pages deployment are automated through GitHub
Actions.
