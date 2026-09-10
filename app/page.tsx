import Image from 'next/image';

const store = 'https://apps.apple.com/app/id6761189074';
const youtube = 'https://youtu.be/I_BQFuH5sec';
const support = 'https://snj830526.notion.site/Hey-Terminal-Usage-Guide-347d56dd6cc680aa9e48e0d1975fd583';
const privacy = 'https://snj830526.notion.site/Privacy-Policy-for-Hey-Terminal-32fd56dd6cc6801d8639e3262f34c123';

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="masthead wrap">
      <a className="brand" href="#main" aria-label="Hey Terminal home"><Image src="/icon.png" width={40} height={40} alt="" /><span>Hey Terminal</span></a>
      <nav aria-label="Main navigation"><a href="#workflow">The workflow</a><a href={support}>Support ↗</a></nav>
    </header>
    <main id="main">
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />iPad + your keyboard</p>
          <h1>A keyboard-first<br />terminal for iPad<span className="cursor" aria-hidden="true">.</span></h1>
          <p className="lead">Connect to your server when your computer isn’t with you.</p>
          <p className="intro">Open a terminal. Type <code>ssh</code>. Pick up the task in front of you, with familiar commands and shortcuts under your fingers.</p>
          <div className="actions"><a className="store-button" href={store}>Download on the App Store <span aria-hidden="true">↗</span></a><a className="text-link" href="#demo">See it in action ↓</a></div>
          <p className="compatibility">For iPad and iPhone · iOS 17.6 or later</p>
        </div>
        <figure className="hero-screen"><Image src="/screen.png" width={2752} height={2064} alt="Hey Terminal running ls and cat in a real SSH demo session, with a second local tab" priority /><figcaption><span className="status-dot" /> Real app capture · iPad Simulator</figcaption></figure>
      </section>
      <section id="workflow" className="workflow wrap">
        <div className="section-heading"><p className="eyebrow">Keep your hands on the keys</p><h2>Your commands.<br />Your familiar rhythm.</h2></div>
        <div className="workflow-steps">
          <article><span className="step">01 / CONNECT</span><h3>Start with <code>ssh</code>.</h3><p>Type a server address or an alias from your SSH config. Connect with a password or a supported SSH key.</p></article>
          <article><span className="step">02 / WORK</span><h3>Run the command you need.</h3><p>Check a file, inspect output, or work in your server’s terminal tools. The work runs on your server.</p></article>
          <article><span className="step">03 / SWITCH</span><h3>Another task, another tab.</h3><p>Open a tab with <kbd>⌘</kbd> <kbd>T</kbd>. Switch with <kbd>⌘</kbd> <kbd>1–9</kbd>. Close the current tab with <kbd>⌘</kbd> <kbd>W</kbd>.</p></article>
        </div>
      </section>
      <section id="demo" className="demo-section wrap">
        <div className="demo-heading"><div><p className="eyebrow">From prompt to session</p><h2>A few commands.<br />A little more done.</h2></div><p>SSH connection, real shell commands,<br />and a new tab with Command-T.</p></div>
        <figure className="demo-frame"><video controls playsInline preload="none" poster="/poster.png" width="1920" height="1440" aria-label="Hey Terminal: a 28-second iPad SSH demonstration"><source src="/demo.mp4" type="video/mp4" /><track kind="captions" src="/demo.vtt" srcLang="en" label="English" />Your browser does not support this video. Read the walkthrough below.</video></figure>
        <p className="demo-caption">Recorded in iPad Simulator with keyboard input and an isolated SSH demo server. No production data. Silent video. <a className="text-link" href={youtube}>Watch on YouTube ↗</a></p>
        <details className="demo-transcript"><summary>Read the video walkthrough</summary><p>Start at the local prompt. Type <code>ssh demo</code> to connect to a configured SSH alias. Run <code>ls</code> and <code>cat status.txt</code> on the demo server. Press Command-T to open a local tab, run <code>ls</code>, then select the existing SSH tab to return to its output.</p></details>
      </section>
      <section className="details wrap" aria-labelledby="details-heading">
        <div><p className="eyebrow">A terminal, close at hand</p><h2 id="details-heading">Ready for the<br />way you work.</h2></div>
        <div className="details-list"><article><h3>SSH keys, in the terminal</h3><p>Generate an Ed25519 key, import a supported private key, and install your public key with <code>ssh-copy-id</code>.</p></article><article><h3>A local starting point</h3><p>Use built-in commands to manage local files and edit your SSH config before connecting.</p></article><article><h3>iPad first. iPhone too.</h3><p>Settle into a session on iPad with an external keyboard. On iPhone, handle a short server task when your computer is out of reach.</p></article></div>
      </section>
      <section className="privacy-section wrap" aria-labelledby="privacy-heading"><h2 id="privacy-heading">Know what stays.<br />Know what’s measured.</h2><div><p>SSH configuration and keys are stored in the app’s local files. The app remembers a server’s key on the first connection and rejects a changed key on later connections.</p><p>Hey Terminal uses Firebase Analytics for usage and connection events. Its custom events record command categories and connection outcomes—not full commands, server addresses, passwords, or key contents. The app can also retrieve a startup message from Google Drive.</p><a className="text-link" href={privacy}>Read the privacy policy ↗</a></div></section>
      <section className="closing wrap"><p className="eyebrow">Hey Terminal</p><h2>Bring your keyboard.<br />Find your prompt.</h2><a className="store-button" href={store}>Download on the App Store <span aria-hidden="true">↗</span></a></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} Hey Terminal</span><div><a href={support}>Support</a><a href={privacy}>Privacy policy</a><a href={store}>App Store ↗</a></div></footer>
  </>;
}
