export function formatDate(isoString: Date) {
  const d = new Date(isoString);

  const day = d.getDate();
  const month = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();

  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');

  return `${day} ${month}, ${year} ${hours}:${minutes}`;
}
