import "./App.css";

const modules = [
  "Homepage", "About", "Contact", "Blog", "Resources", "AI Coach",
  "Calculators", "Newsletter", "FAQ", "Privacy", "Terms", "Disclaimer",
  "Affiliate Disclosure", "Buyer Package"
];

const sites = [
  "Faith Wealth Blueprint",
  "AI Business Blueprint",
  "Women of Purpose Business",
  "Hawaii Guide",
  "Pet Care Hub",
  "Gardening Guide"
];

function App() {
  return (
    <main className="site">
      <header className="nav">
        <div className="logo">KingdomShift Studio Blueprint</div>
        <nav>
          <a href="#modules">Modules</a>
          <a href="#factory">Factory</a>
          <a href="#buyer">Buyer Package</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">Digital Asset Factory</p>
        <h1>Build, launch, and flip AI-powered websites faster.</h1>
        <p>
          A reusable master blueprint for creating turnkey niche websites with
          AI tools, calculators, content hubs, legal pages, and buyer-ready documentation.
        </p>
        <div className="buttons">
          <a className="btn primary" href="#modules">View Blueprint</a>
          <a className="btn secondary" href="#factory">See Site Factory</a>
        </div>
      </section>

      <section id="modules" className="section">
        <h2>Master Blueprint Modules</h2>
        <p className="wide">
          Every website built from this template includes the core pages,
          trust elements, tools, and documentation needed for a clean launch and future transfer.
        </p>
        <div className="grid">
          {modules.map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>
              <p>Reusable, customizable, and ready to adapt for any niche website.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section dark" id="factory">
        <h2>Website Factory</h2>
        <p className="wide lightText">
          Clone this blueprint, change the brand, swap the content, connect analytics,
          deploy, document, and prepare the asset for growth or resale.
        </p>
        <div className="grid">
          {sites.map((site) => (
            <div className="mini" key={site}>{site}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>AI + Interactive Tools</h2>
        <div className="grid">
          <div className="card">
            <h3>AI Coach Module</h3>
            <p>Use niche-specific prompts to create a helpful assistant for each site.</p>
          </div>
          <div className="card">
            <h3>Calculator Module</h3>
            <p>Add simple tools like budget, ROI, savings, debt, or business calculators.</p>
          </div>
          <div className="card">
            <h3>Resource Library</h3>
            <p>Organize affiliate links, downloads, templates, guides, and product recommendations.</p>
          </div>
        </div>
      </section>

      <section id="buyer" className="section gold">
        <h2>Buyer Package Included</h2>
        <p className="wide">
          Each cloned website should include a README, transfer checklist,
          monetization plan, brand guide, content inventory, and SOPs so buyers
          understand what they are purchasing.
        </p>
      </section>

      <section className="section">
        <h2>Standard Legal Pages</h2>
        <div className="grid">
          <div className="card">
            <h3>Privacy Policy</h3>
            <p>Placeholder privacy page ready to customize before launch.</p>
          </div>
          <div className="card">
            <h3>Terms of Use</h3>
            <p>Basic terms section for every site created from this blueprint.</p>
          </div>
          <div className="card">
            <h3>Disclaimers</h3>
            <p>Affiliate, financial, health, or educational disclaimers depending on niche.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <h2>Blueprint v1.0 Ready</h2>
        <p>
          Next step: clone this into Faith Wealth Blueprint and AI Business Blueprint.
        </p>
      </section>

      <footer>
        <p>© 2026 KingdomShift Studio Blueprint</p>
        <p>Reusable digital business template for AI-powered website flipping.</p>
      </footer>
    </main>
  );
}

export default App;