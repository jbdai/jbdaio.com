export default function Solutions() {
  return (
    <main style={{ textAlign: "center", padding: "50px" }}>
      <h1>🧠 AI Solutions Marketplace</h1>
      <p>Discover and request AI-powered tools</p>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
          <h2>📊 StratoDesk</h2>
          <p>AI-powered business assistant for automation</p>
          <button>Request Access</button>
        </div>
        
        <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
          <h2>✍️ VerboCraft</h2>
          <p>AI copywriting for blogs, ads, and SEO</p>
          <button>Request Access</button>
        </div>

        <div style={{ border: "1px solid #ddd", padding: "20px", width: "300px", borderRadius: "10px" }}>
          <h2>📈 FinovaSync</h2>
          <p>AI financial analysis and forecasting</p>
          <button>Request Access</button>
        </div>
      </div>
    </main>
  );
}
