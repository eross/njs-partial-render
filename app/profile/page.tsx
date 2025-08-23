export default function Profile() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      <p className="text-lg">Name: John Doe</p>
      <p className="text-lg">Email: john.doe@example.com</p>
      <a href="/" className="text-blue-500 hover:underline mt-4">
        Back to Home
      </a>
    </main>
  );
}
