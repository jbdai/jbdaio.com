import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4">
      <nav className="space-y-2">
        <Link href="/" className="block p-2 hover:bg-gray-200">🏠 Home</Link>
        <Link href="/discover" className="block p-2 hover:bg-gray-200">🔍 Discover</Link>
        <Link href="/requests" className="block p-2 hover:bg-gray-200">📌 Requests</Link>
        <Link href="/submissions" className="block p-2 hover:bg-gray-200">🚀 Submissions</Link>
        <Link href="/profile" className="block p-2 hover:bg-gray-200">👤 Profile</Link>
      </nav>
    </aside>
  );
}
