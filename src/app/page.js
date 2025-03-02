"use client"; // Enables interactive components in Next.js
import { useState } from "react";
import "../styles/home.css"; // Import CSS file

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const aiSolutions = [
    { name: "📊 WorkMate", description: "AI-powered assistant for automation" },
    { name: "✍️ WriteEase", description: "AI-driven content writing" },
    { name: "📈 FinOptima", description: "AI-enhanced financial insights" },
    { name: "🤖 ChatFlow", description: "AI-powered chatbot assistant" },
    { name: "📜 CodeLogic", description: "AI-driven coding assistant" },
  ];

  const filteredSolutions = aiSolutions.filter((solution) =>
    solution.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">AI Solutions Hub</h1>
        <ul className="navLinks">
          <li><a href="/">Home</a></li>
          <li><a href="/solutions">Solutions</a></li>
          <li><a href="/request">Request AI</a></li>
          <li><a href="/submit">Submit AI</a></li>
          <li><a href="/pricing">Pricing</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>🚀 AI-Powered Solutions for Everyone</h1>
        <p>Discover AI-driven tools to enhance your productivity.</p>
        <div>
          <a href="/solutions"><button className="button">Browse Solutions</button></a>
          <a href="/request"><button className="button">Request Custom AI</button></a>
        </div>
      </section>

      {/* 🔎 Search Bar */}
      <section className="searchSection">
        <input
          type="text"
          placeholder="Search AI tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchBar"
        />
      </section>

      {/* AI Solutions Listing */}
      <section className="solutions">
        <h2>🛠️ Featured AI Tools</h2>
        <div className="solutionsGrid">
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution, index) => (
              <div key={index} className="card">
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                <a href="/solutions"><button className="button">Explore</button></a>
              </div>
            ))
          ) : (
            <p>No AI solutions found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
