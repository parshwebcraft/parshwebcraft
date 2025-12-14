export function formatIST(dateString: string) {
  return new Date(dateString).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });
}
export function formatISTWithAgo(dateString: string) {
  const ist = new Date(
    new Date(dateString).toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
  );

  const diff = Date.now() - ist.getTime();
  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);

  if (mins < 60) return `${mins} min ago`;
  if (hrs < 24) return `${hrs} hrs ago`;

  return ist.toLocaleDateString("en-IN");
}