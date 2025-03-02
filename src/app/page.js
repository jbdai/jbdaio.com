export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "50px", fontFamily: "Arial, sans-serif" }}>
      {/* Hero Section */}
      <h1>🚀 AI-Powered Solutions for Everyone</h1>
      <p>Find, request, and offer AI-driven tools to enhance productivity.</p>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="/solutions">
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Browse Solutions
          </button>
        </a>
        <a href="/request">
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Request AI Tool
          </button>
        </a>
        <a href="/submit">
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Offer Your AI Tool
          </button>
        </a>
      </div>

      {/* Featured AI Solutions */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>🛠️ AI-Powered Tools</h2>
        <p>Discover cutting-edge AI tools designed to improve efficiency.</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
            <h3>📊 WorkMate</h3>
            <p>AI-powered assistant for automating reports and schedules.</p>
            <a href="/solutions"><button>Explore</button></a>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
            <h3>✍️ WriteEase</h3>
            <p>AI-driven writing assistant for blogs, ads, and content.</p>
            <a href="/solutions"><button>Explore</button></a>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
            <h3>📈 FinOptima</h3>
            <p>AI-enhanced financial insights and forecasting.</p>
            <a href="/solutions"><button>Explore</button></a>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>⚙️ How It Works</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ padding: "20px", width: "300px", borderRadius: "10px", textAlign: "left" }}>
            <h3>🔍 Explore AI Tools</h3>
            <p>Browse ready-made AI solutions to improve productivity.</p>
          </div>

          <div style={{ padding: "20px", width: "300px", borderRadius: "10px", textAlign: "left" }}>
            <h3>🎯 Request Custom AI</h3>
            <p>Need something unique? Request a personalized AI tool.</p>
          </div>

          <div style={{ padding: "20px", width: "300px", borderRadius: "10px", textAlign: "left" }}>
            <h3>🚀 Submit AI Tools</h3>
            <p>Developers can list and promote their AI-powered tools.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>💰 Subscription Plans</h2>
        <p>Choose a plan that fits your AI needs.</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
            <h3>🚀 Free Plan</h3>
            <p>Basic access to AI tools.</p>
            <button>Sign Up Free</button>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
            <h3>🔥 Pro Plan ($19.99/month)</h3>
            <p>Unlimited access + priority support.</p>
            <button>Subscribe</button>
          </div>

          <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
            <h3>🏢 Enterprise ($49.99/month)</h3>
            <p>API access, business automation & AI integrations.</p>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </main>
  );
}
