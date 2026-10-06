/* oxlint-disable next/no-html-link-for-pages -- Static GitHub Pages uses document navigation to directory indexes. */
import type { Metadata } from 'next';
import Image from 'next/image';

const store = 'https://apps.apple.com/app/id6761189074';
const support = 'https://snj830526.notion.site/Hey-Terminal-Usage-Guide-347d56dd6cc680aa9e48e0d1975fd583';
const privacy = 'https://snj830526.notion.site/Privacy-Policy-for-Hey-Terminal-32fd56dd6cc6801d8639e3262f34c123';
const cliDocs = 'https://learn.chatgpt.com/docs/codex/cli';
const authDocs = 'https://learn.chatgpt.com/docs/auth#login-on-headless-devices';
const origin = process.env.SITE_URL ?? 'https://snj830526.github.io';
const title = 'Use Codex CLI from iPad over SSH — Hey Terminal';
const description = 'A practical guide to using Codex CLI on your Mac or Linux computer from iPad or iPhone with Hey Terminal: connect over SSH, open a project, prompt, and review.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/codex/' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Hey Terminal',
    url: `${origin}/codex/`,
    images: [{ url: `${origin}/og.png`, alt: 'Hey Terminal. A keyboard-first terminal for iPad.' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${origin}/og.png`] },
};

export default function CodexGuide() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="masthead wrap guide-masthead">
      <a className="brand" href="/" aria-label="Hey Terminal home"><Image src="/icon.png" width={40} height={40} alt="" /><span>Hey Terminal</span></a>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="#steps">The guide</a><a href={store}>App Store ↗</a></nav>
    </header>
    <main id="main">
      <section className="guide-hero wrap" aria-labelledby="guide-heading">
        <div className="guide-hero-copy">
          <p className="eyebrow"><span className="status-dot" />Codex CLI over SSH</p>
          <h1 id="guide-heading">Use Codex CLI<br />from your iPad<span className="cursor" aria-hidden="true">.</span></h1>
          <p className="lead">Your project stays on your computer.<br />Your terminal comes with you.</p>
          <p className="intro">Use Hey Terminal on iPad or iPhone to connect over SSH to your Mac or Linux computer. Run Codex CLI there, ask about your code, and review the work from your keyboard.</p>
          <div className="actions"><a className="store-button" href={store}>Get Hey Terminal <span aria-hidden="true">↗</span></a><a className="text-link" href="#steps">Start the guide ↓</a></div>
          <p className="compatibility">iPad and iPhone · iOS 17.6 or later · External keyboard recommended</p>
        </div>
        <figure className="guide-terminal" aria-label="Example of the remote terminal workflow">
          <div className="terminal-topline"><span className="status-dot" /><span>One project. Three commands.</span><span className="terminal-tag">EXAMPLE</span></div>
          <div className="terminal-command"><small>01 · IN HEY TERMINAL</small><code><span className="terminal-prompt">$</span> ssh you@your-computer</code></div>
          <div className="terminal-command"><small>02 · ON YOUR COMPUTER</small><code><span className="terminal-prompt">$</span> cd ~/projects/your-repo</code></div>
          <div className="terminal-command"><small>03 · IN YOUR PROJECT</small><code><span className="terminal-prompt">$</span> codex</code></div>
          <figcaption>Hey Terminal connects you. Codex CLI and your development tools run on the computer you connect to.</figcaption>
        </figure>
      </section>

      <section className="guide-video-section wrap" aria-labelledby="video-heading">
        <div className="guide-video-copy"><p className="eyebrow">A 26-second example</p><h2 id="video-heading">See a{' '}<br />read-only session.</h2><p>Open Codex in an SSH session, ask it to summarize a demo workspace, and read its answer.</p><p className="guide-note">Recorded in iPad Simulator with a temporary SSH environment on a Mac. The video shows inspection and a response; it does not show code editing, tests, or deployment. Silent video.</p><details className="demo-transcript"><summary>Read the video walkthrough</summary><p>The clip begins in an already connected SSH session in Hey Terminal. Codex CLI opens, and the request “Summarize this demo workspace in one sentence” is typed. Codex lists the workspace files, reads the example README, status, notes, and log, then answers with a one-sentence summary of their contents. The final frame keeps the answer visible. The demo uses disposable files and shows no project modifications.</p></details></div>
        <figure className="demo-frame guide-video-frame"><video controls playsInline preload="none" poster="/codex-poster.png" width="2064" height="2752" aria-label="Hey Terminal: a 26-second read-only Codex CLI demonstration over SSH"><source src="/codex-demo.mp4" type="video/mp4" /><track kind="captions" src="/codex-demo.vtt" srcLang="en" label="English" />Your browser does not support this video. Read the walkthrough beside it.</video></figure>
      </section>

      <section className="guide-prerequisites wrap" aria-labelledby="before-heading">
        <div><p className="eyebrow">Before you begin</p><h2 id="before-heading">A computer ready<br />to connect.</h2><p className="guide-section-intro">Set this up at your computer first. Try your first connection on the same network.</p></div>
        <ul className="guide-checklist">
          <li><strong>Your Mac or Linux computer</strong><span>SSH access enabled, the computer awake, and a network address reachable from your iPad. Use a computer you own or are authorized to access.</span></li>
          <li><strong>A working project and Codex CLI</strong><span>Your repository and its development tools are on that computer. Follow the <a href={cliDocs}>official Codex CLI installation instructions ↗</a>.</span></li>
          <li><strong>Your own Codex access</strong><span>Sign in with an account or authentication method available to you. Codex access, usage limits, and any charges are separate from Hey Terminal.</span></li>
          <li><strong>Hey Terminal and a keyboard</strong><span>An external keyboard is recommended for prompts, shortcuts, and reading code. iPhone works for shorter sessions, too.</span></li>
        </ul>
      </section>

      <section id="steps" className="guide-steps wrap" aria-labelledby="steps-heading">
        <div className="section-heading"><p className="eyebrow">From connection to review</p><h2 id="steps-heading">Pick up a focused task.</h2><p className="guide-section-intro">Replace the example address and project path below with your own.</p></div>
        <article className="guide-step" id="connect">
          <div className="guide-step-heading"><span className="step">01 / CONNECT</span><h3>Open your computer’s shell.</h3></div>
          <div className="guide-step-body"><p>In Hey Terminal, type your SSH connection command. Use your configured SSH alias if you have one.</p><pre className="command-block"><code>ssh you@your-computer</code></pre><p>On the first connection, check the server’s key fingerprint against the one on your computer before trusting it. Enter your SSH password or use your supported SSH key.</p><p className="guide-note">Away from home? Use a trusted VPN to reach your computer. Keep the computer awake and confirm the connection works before you leave.</p></div>
        </article>
        <article className="guide-step" id="sign-in">
          <div className="guide-step-heading"><span className="step">02 / SIGN IN</span><h3>Authenticate on the computer.</h3></div>
          <div className="guide-step-body"><p>Sign in to Codex CLI on the computer you connected to. If it is already authenticated, you can continue to your project.</p><p>For an SSH session, OpenAI documents device code sign-in. Enable device code login in your ChatGPT security settings, or ask your workspace admin if your workspace permits it. Then run:</p><pre className="command-block"><code>codex login --device-auth</code></pre><p>Open the link printed by Codex in your browser, sign in, and enter the one-time code. If this method is unavailable, follow the alternatives in the <a href={authDocs}>official authentication guide ↗</a>.</p></div>
        </article>
        <article className="guide-step" id="open-project">
          <div className="guide-step-heading"><span className="step">03 / OPEN</span><h3>Start in your repository.</h3></div>
          <div className="guide-step-body"><p>Move to the project directory on your computer. Check for existing changes so you know what was there before your session, then launch Codex.</p><pre className="command-block"><code>{'cd ~/projects/your-repo\ngit status\ncodex'}</code></pre><p>Your repository, commands, and tests run on this computer. Hey Terminal provides the remote terminal connection.</p></div>
        </article>
        <article className="guide-step" id="first-prompt">
          <div className="guide-step-heading"><span className="step">04 / ASK</span><h3>Begin with a review.</h3></div>
          <div className="guide-step-body"><p>For your first task, ask Codex to explain the project before requesting edits. Check the permissions and approval prompts shown by Codex, and keep the task limited to inspection.</p><blockquote className="prompt-example"><p>Read this repository and explain its main entry points and how to run its tests. Do not edit files, install packages, or make network requests.</p><cite>Example first prompt</cite></blockquote><p>Read its answer and follow up with a question about one file or function. A focused prompt is easier to check on a smaller screen.</p></div>
        </article>
        <article className="guide-step" id="review">
          <div className="guide-step-heading"><span className="step">05 / REVIEW</span><h3>Make one small change, then check it.</h3></div>
          <div className="guide-step-body"><p>When you are comfortable, choose a small task in a repository with a Git checkpoint. Describe the expected behavior and the files it should touch. Review Codex’s proposed commands and permission requests as you go.</p><blockquote className="prompt-example"><p>Fix the typo in the README setup heading. Change only the README, preserve the rest of the text, and show me the diff.</p><cite>Example small editing task</cite></blockquote><p>After the task finishes, return to the shell and inspect the changes yourself:</p><pre className="command-block"><code>{'git status\ngit diff'}</code></pre><p>For a code change, run your project’s documented tests and checks. Inspect any new files reported by <code>git status</code>, too. Commit or share the work only after you are satisfied with the result.</p></div>
        </article>
      </section>

      <section className="guide-continuity wrap" aria-labelledby="continuity-heading">
        <div><p className="eyebrow">When you step away</p><h2 id="continuity-heading">Plan for a<br />disconnected session.</h2><p className="guide-section-intro">iOS may suspend the app in the background, and the SSH connection can disconnect. Your computer also needs to stay awake.</p></div>
        <div className="guide-continuity-body"><p>If you already use <code>tmux</code> on your computer, you can optionally start a named session before launching Codex:</p><pre className="command-block"><code>{'tmux new -s codex-work\ncd ~/projects/your-repo\ncodex'}</code></pre><p>After reconnecting over SSH to the same computer, return to that session with:</p><pre className="command-block"><code>tmux attach -t codex-work</code></pre><p className="guide-note">The session stays on your host while that host and its tmux process are running. This does not keep the iOS app or its SSH connection active in the background.</p></div>
      </section>

      <section className="guide-faq wrap" aria-labelledby="faq-heading">
        <div><p className="eyebrow">A few useful details</p><h2 id="faq-heading">Know the workflow.</h2></div>
        <div className="guide-faq-list">
          <details><summary>Where is Codex running?</summary><p>Codex CLI runs on the Mac or Linux computer you connect to over SSH. Hey Terminal is the iPad and iPhone terminal used to reach it. This guide does not install Codex on iOS.</p></details>
          <details><summary>Is Codex access included with Hey Terminal?</summary><p>No. You provide your own Codex account or supported authentication method. OpenAI’s access requirements, limits, and any charges apply independently.</p></details>
          <details><summary>What if the connection fails?</summary><p>Check that your computer is awake, SSH access is enabled, and the address is reachable. Try the same network first. If you are away, check your trusted VPN connection. The <a href={support}>Hey Terminal usage guide ↗</a> covers the app’s SSH setup.</p></details>
          <details><summary>Where can I find current Codex instructions?</summary><p>See the <a href={cliDocs}>official Codex CLI guide ↗</a> and <a href={authDocs}>authentication documentation ↗</a>. Codex behavior and sign-in options can change; those sources are the reference for current setup.</p></details>
        </div>
      </section>

      <section className="closing guide-closing wrap"><p className="eyebrow">Hey Terminal + your computer</p><h2>Bring your keyboard.<br />Pick up your project.</h2><a className="store-button" href={store}>Get Hey Terminal on the App Store <span aria-hidden="true">↗</span></a><p className="guide-independent">Hey Terminal is an independent app and is not affiliated with or endorsed by OpenAI.</p></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} Hey Terminal</span><div><a href="/">Home</a><a href={support}>Support</a><a href={privacy}>Privacy policy</a><a href={store}>App Store ↗</a></div></footer>
  </>;
}
