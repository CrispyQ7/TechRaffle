export const timeFormatter = time => {
  var days = Math.floor(time / (60 * 60 * 24));
  var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((time % (60 * 60)) / 60);
  var seconds = Math.floor(time % 60);
  if (days === 0) return `${hours}:${minutes}:${seconds}`;
  else if (hours === 0) return `${minutes}:${seconds}`;
  else if (minutes === 0) return `only ${seconds} left!`;
  else return `${days}:${hours}:${minutes}:${seconds}`;
};
