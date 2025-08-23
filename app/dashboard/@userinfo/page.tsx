// Simulate a slow data fetch
async function fetchUserInfo() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
  return {
    name: 'John Doe',
    role: 'Developer',
    lastLogin: '2025-08-23',
  };
}

export default async function UserInfo() {
  const user = await fetchUserInfo();
  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-2">User Info</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
      <p>Last Login: {user.lastLogin}</p>
    </div>
  );
}
