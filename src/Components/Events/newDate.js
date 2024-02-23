// newEvent.js
export function newDate(dateString) {
  var date = new Date(dateString);

  if (isNaN(date.getTime())) {
    console.error("Invalid date");
    return null;
  }

  return date;
}

export function formatDate(date) {
  if (!date) {
    return "Invalid Date";
  }

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = date.toLocaleString("ro-RO", options);

  return formattedDate;
}
