import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to the App</h1>
      <div className="flex gap-4">
        <Link href="/profile" className="text-blue-500 hover:underline">
          Go to Profile
        </Link>
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}
