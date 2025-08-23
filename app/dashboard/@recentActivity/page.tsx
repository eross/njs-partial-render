// Simulate a slower data fetch
async function fetchRecentActivity() {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // 4-second delay
  return [
    { id: 1, action: 'Created a post', date: '2025-08-23' },
    { id: 2, action: 'Updated profile', date: '2025-08-22' },
  ];
}

export default async function RecentActivity() {
  const activities = await fetchRecentActivity();
  return (
    <div className="border p-4 rounded">
      <h2 className="text-2xl font-semibold mb-2">Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            {activity.action} on {activity.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

