import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex flex-col h-screen">
          {/* Top Navigation Bar */}
          <Header />
          <div className="flex flex-grow">
            {/* Left Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <main className="flex-grow p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
