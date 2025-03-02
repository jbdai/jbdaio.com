"use client";
import { useState } from "react";
import Post from "../components/Post";

export default function Home() {
  const [activeFeed, setActiveFeed] = useState("discovery");

  const discoveryFeed = [
    { id: 1, title: "📊 WorkMate", type: "Featured AI Tool" },
    { id: 2, title: "✍️ WriteEase", type: "AI Writing Assistant" },
  ];

  const requestsFeed = [
    { id: 3, title: "🎨 AI Logo Maker", type: "User Requested AI Tool" },
    { id: 4, title: "📷 AI Video Editor", type: "User Requested AI Tool" },
  ];

  const submissionsFeed = [
    { id: 5, title: "🤖 ChatFlow", type: "New AI Tool Submission" },
    { id: 6, title: "📜 CodeLogic", type: "New AI Tool Submission" },
  ];

  const feedData = {
    discovery: discoveryFeed,
    requests: requestsFeed,
    submissions: submissionsFeed,
  };

  return (
    <div className="flex flex-col w-full">
      {/* Toggle Feeds */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          className={`p-2 ${activeFeed === "discovery" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveFeed("discovery")}
        >
          Discovery
        </button>
        <button
          className={`p-2 ${activeFeed === "requests" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveFeed("requests")}
        >
          Requests
        </button>
        <button
          className={`p-2 ${activeFeed === "submissions" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveFeed("submissions")}
        >
          Submissions
        </button>
      </div>

      {/* Feed Section */}
      <div className="mt-4 space-y-4">
        {feedData[activeFeed].map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
