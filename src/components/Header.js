import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4">
      <h1 className="text-lg font-bold">AI Hub</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded bg-white text-black"
      />
      <div className="flex gap-4">
        <button>🔔</button>
        <Link href="/profile">
          <button>👤 Profile</button>
        </Link>
      </div>
    </header>
  );
}
