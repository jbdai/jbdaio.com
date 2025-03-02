"use client"; // Enables interactive components in Next.js

import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const aiSolutions = [
    { name: "📊 WorkMate", description: "AI-powered assistant for automation" },
    { name: "✍️ WriteEase", description: "AI-driven content writing" },
    { name: "📈 FinOptima", description: "AI-enhanced financial insights" },
  ];

  const filteredSolutions = aiSolutions.filter((solution) =>
    solution.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>AI Solutions Hub</h1>
        <ul style={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/solutions">Solutions</a></li>
          <li><a href="/request">Request AI</a></li>
          <li><a href="/submit">Submit AI</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1>🚀 AI-Powered Solutions for Everyone</h1>
        <p>Discover AI-driven tools to enhance your productivity.</p>
        <div>
          <a href="/solutions"><button style={styles.button}>Browse Solutions</button></a>
          <a href="/request"><button style={styles.button}>Request Custom AI</button></a>
        </div>
      </section>

      {/* Search Bar */}
      <section style={styles.searchSection}>
        <input
          type="text"
          placeholder="Search AI tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchBar}
        />
      </section>

      {/* Featured AI Solutions */}
      <section style={styles.solutions}>
        <h2>🛠️ Featured AI Tools</h2>
        <div style={styles.solutionsGrid}>
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution, index) => (
              <div key={index} style={styles.card}>
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                <a href="/solutions"><button style={styles.button}>Explore</button></a>
              </div>
            ))
          ) : (
            <p>No AI solutions found.</p>
          )}
        </div>
      </section>

      {/* Subscription Pricing */}
      <section style={styles.pricing}>
        <h2>💰 Subscription Plans</h2>
        <div style={styles.pricingGrid}>
          <div style={styles.pricingCard}>
            <h3>🚀 Free Plan</h3>
            <p>Basic access to AI tools.</p>
            <button style={styles.button}>Sign Up Free</button>
          </div>
          <div style={styles.pricingCard}>
            <h3>🔥 Pro Plan ($19.99/month)</h3>
            <p>Unlimited AI access + premium support.</p>
            <button style={styles.button}>Subscribe</button>
          </div>
          <div style={styles.pricingCard}>
            <h3>🏢 Enterprise ($49.99/month)</h3>
            <p>API access, AI automation, and business integration.</p>
            <button style={styles.button}>Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}

// CSS Styles for UI Design
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
  logo: { fontSize: "24px", fontWeight: "bold" },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
  },
  hero: {
    padding: "60px",
    backgroundColor: "#f8f9fa",
    marginTop: "20px",
    borderRadius: "10px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "0.3s",
  },
  searchSection: {
    marginTop: "20px",
  },
  searchBar: {
    padding: "10px",
    width: "300px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  solutions: { marginTop: "50px" },
  solutionsGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  pricing: { marginTop: "50px", padding: "20px", backgroundColor: "#f1f1f1" },
  pricingGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  pricingCard: {
    border: "1px solid #ddd",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};
