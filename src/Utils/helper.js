export function formatNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + " B";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + " M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}
export function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + " year" + (interval === 1 ? "" : "s") + " ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " month" + (interval === 1 ? "" : "s") + " ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " day" + (interval === 1 ? "" : "s") + " ago";
  }
  return "less than a day ago";
}
export const dateFormat = (newdate) => {
  const date = new Date(newdate);

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};

export const convertDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  let formattedDuration = '';

  if (hours > 0) {
    formattedDuration += hours.toString().padStart(2, '0') + ':';
  }

  formattedDuration += minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

  return formattedDuration;
};