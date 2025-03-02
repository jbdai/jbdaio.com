import { useState } from "react";

export default function Post({ post }) {
  const [likes, setLikes] = useState(0);
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{post.title}</h3>
      <p>{post.type}</p>
      <div className="flex gap-4 mt-2">
        <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
        <button>💬 Comment</button>
        <button>🔗 Share</button>
      </div>
    </div>
  );
}
