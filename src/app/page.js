"use client"; // Enables client-side interactivity
import { useState } from "react";
import Link from "next/link";
import "../styles/home.css"; // Import external styles

export default function Home() {
  const [activeFeed, setActiveFeed] = useState("discovery");

  // 🔹 AI Listings (Can be moved to a database later)
  const discoveryFeed = [
    { id: 1, title: "📊 WorkMate", type: "Featured AI Tool", link: "/solutions/workmate" },
    { id: 2, title: "✍️ WriteEase", type: "AI Writing Assistant", link: "/solutions/writeease" },
  ];

  const requestsFeed = [
    { id: 3, title: "🎨 AI Logo Maker", type: "User Requested AI Tool" },
    { id: 4, title: "📷 AI Video Editor", type: "User Requested AI Tool" },
  ];

  const submissionsFeed = [
    { id: 5, title: "🤖 ChatFlow", type: "New AI Tool Submission", link: "/solutions/chatflow" },
    { id: 6, title: "📜 CodeLogic", type: "New AI Tool Submission", link: "/solutions/codelogic" },
  ];

  const feedData = {
    discovery: discoveryFeed,
    requests: requestsFeed,
    submissions: submissionsFeed,
  };

  return (
    <main className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">AI Community Hub</h1>
        <ul className="navLinks">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/submit">Submit</Link></li>
        </ul>
      </nav>

      {/* Toggle Feeds */}
      <div className="feedToggle">
        <button className={activeFeed === "discovery" ? "active" : ""} onClick={() => setActiveFeed("discovery")}>Discovery</button>
        <button className={activeFeed === "requests" ? "active" : ""} onClick={() => setActiveFeed("requests")}>Requests</button>
        <button className={activeFeed === "submissions" ? "active" : ""} onClick={() => setActiveFeed("submissions")}>Submissions</button>
      </div>

      {/* Live Feed Section */}
      <section className="liveFeed">
        {feedData[activeFeed].map((post) => (
          <div key={post.id} className="postCard">
            <h3>{post.title}</h3>
            <p>{post.type}</p>
            {post.link && <Link href={post.link}><button className="button">Explore</button></Link>}
            {!post.link && <button className="button">Upvote</button>}
          </div>
        ))}
      </section>
    </main>
  );
}
