"use client"; // Enables client-side interactivity
import { useState } from "react";
import Link from "next/link";
import "../styles/home.css"; // Import external styles

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 Dynamic AI Listings (Can be moved to a database later)
  const featuredAI = [
    { id: 1, name: "📊 WorkMate", description: "AI for workflow automation", link: "/solutions/workmate" },
    { id: 2, name: "✍️ WriteEase", description: "AI for writing & blogging", link: "/solutions/writeease" },
  ];

  const requestedAI = [
    { id: 3, name: "🎨 AI Logo Maker", description: "User requested AI-powered logo generation" },
    { id: 4, name: "📷 AI Video Editor", description: "User requested AI-based video editing assistant" },
  ];

  const submittedAI = [
    { id: 5, name: "🤖 ChatFlow", description: "AI chatbot assistant", link: "/solutions/chatflow" },
    { id: 6, name: "📜 CodeLogic", description: "AI-driven coding & debugging", link: "/solutions/codelogic" },
  ];

  return (
    <main className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">AI Solutions Hub</h1>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/discover">Discover</Link></li>
          <li><Link href="/requests">Requests</Link></li>
          <li><Link href="/submissions">Submissions</Link></li>
          <li><Link href="/profile">Profile</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>🚀 Welcome to the AI Solutions Hub</h1>
        <p>Discover, request, and submit AI-powered tools in real time.</p>
        <div>
          <Link href="/submit"><button className="button">Submit Your AI Tool</button></Link>
          <Link href="/request"><button className="button">Request an AI Tool</button></Link>
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

      {/* 🔥 Live Feeds */}
      <section className="liveFeeds">
        {/* Featured AI Solutions */}
        <div className="feedSection">
          <h2>🔝 Featured AI Solutions</h2>
          {featuredAI.map((item) => (
            <div key={item.id} className="postCard">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link href={item.link}><button className="button">Explore</button></Link>
            </div>
          ))}
        </div>

        {/* Recently Requested AI Tools */}
        <div className="feedSection">
          <h2>📌 Recently Requested AI Tools</h2>
          {requestedAI.map((item) => (
            <div key={item.id} className="postCard">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button className="button">Upvote Request</button>
            </div>
          ))}
        </div>

        {/* Latest AI Submissions */}
        <div className="feedSection">
          <h2>🚀 Latest AI Submissions</h2>
          {submittedAI.map((item) => (
            <div key={item.id} className="postCard">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <Link href={item.link}><button className="button">Explore</button></Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
