"use client"; // Enables client-side interactivity
import { useState } from "react";
import Link from "next/link"; // Import Next.js Link
import "../styles/home.css"; // Import external styles

export default function Home() {
  const aiSolutions = [
    { id: 1, name: "📊 WorkMate", description: "AI-powered assistant for automation.", link: "/solutions/workmate" },
    { id: 2, name: "✍️ WriteEase", description: "AI-driven content writing & blogging.", link: "/solutions/writeease" },
    { id: 3, name: "📈 FinOptima", description: "AI-enhanced financial insights & analysis.", link: "/solutions/finoptima" },
    { id: 4, name: "🤖 ChatFlow", description: "AI chatbot assistant for businesses.", link: "/solutions/chatflow" },
    { id: 5, name: "📜 CodeLogic", description: "AI-driven coding assistant & debugging.", link: "/solutions/codelogic" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const filteredSolutions = aiSolutions.filter((solution) =>
    solution.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">AI Tools Directory</h1>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/solutions">Solutions</Link></li>
          <li><Link href="/request">Request AI</Link></li>
          <li><Link href="/submit">Submit AI</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>🚀 AI Solutions Directory</h1>
        <p>Explore AI-powered tools designed for automation, content, finance, and more.</p>
        <div>
          <Link href="/solutions"><button className="button">Browse All AI Tools</button></Link>
          <Link href="/submit"><button className="button">Submit Your AI Tool</button></Link>
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

      {/* 📌 AI Solutions Listing */}
      <section className="solutions">
        <h2>🛠️ AI Tools Available</h2>
        <div className="solutionsGrid">
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <div key={solution.id} className="card">
                <h3>{solution.name}</h3>
                <p>{solution.description}</p>
                <Link href={solution.link}><button className="button">Learn More</button></Link>
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
