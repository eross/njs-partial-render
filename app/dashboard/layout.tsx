import { Suspense } from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
  userInfo,
  recentActivity,
}: {
  children: React.ReactNode;
  userInfo: React.ReactNode;
  recentActivity: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        <Suspense fallback={<div>Loading User Info...</div>}>
          {userInfo}
        </Suspense>
        <Suspense fallback={<div>Loading Recent Activity...</div>}>
          {recentActivity}
        </Suspense>
      </div>
      <Link href="/" className="text-blue-500 hover:underline mt-8">
        Back to Home
      </Link>
    </main>
  );
}
