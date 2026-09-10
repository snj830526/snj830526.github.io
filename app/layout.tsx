import type { Metadata } from 'next';
import './globals.css';
const title = 'Hey Terminal — A keyboard-first terminal for iPad';
const description = 'Connect to your server when your computer isn’t with you. A keyboard-first SSH terminal for iPad, with tabs, SSH keys, and iPhone support.';
const origin = process.env.SITE_URL ?? 'https://snj830526.github.io';
export const metadata: Metadata = {
  title, description,
  ...(origin ? { metadataBase: new URL(origin), alternates: { canonical: '/' } } : {}),
  robots: origin ? { index: true, follow: true } : { index: false, follow: false },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: { title, description, type: 'website', locale: 'en_US', siteName: 'Hey Terminal', ...(origin ? { url: origin, images: [{ url: `${origin}/og.png`, alt: 'Hey Terminal. A keyboard-first terminal for iPad.' }] } : {}) },
  twitter: { card: 'summary_large_image', title, description, ...(origin ? { images: [`${origin}/og.png`] } : {}) },
};
const product = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Hey Terminal', operatingSystem: 'iPadOS 17.6 or later, iOS 17.6 or later', applicationCategory: 'DeveloperApplication', description, downloadUrl: 'https://apps.apple.com/app/id6761189074', ...(origin ? { url: origin, image: `${origin}/icon.png` } : {}) };
const video = { '@context': 'https://schema.org', '@type': 'VideoObject', name: 'SSH Terminal for iPad with Keyboard Shortcuts | Hey Terminal', description: 'A 28-second iPad Simulator demo of connecting over SSH, running shell commands, opening a tab with Command-T, and returning to the remote session.', thumbnailUrl: origin ? [`${origin}/poster.png`] : [], uploadDate: '2026-09-11', duration: 'PT28S', contentUrl: origin ? `${origin}/demo.mp4` : undefined, embedUrl: 'https://www.youtube.com/embed/I_BQFuH5sec' };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(product).replace(/</g,'\\u003c')}} /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(video).replace(/</g,'\\u003c')}} />{children}</body></html>;
}
