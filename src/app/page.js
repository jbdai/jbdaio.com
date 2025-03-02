import TestComponent from "@/components/TestComponent"; // Import the test component

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to JBD AIO</h1>
      <TestComponent /> {/* Render the test component */}
    </main>
  );
}
