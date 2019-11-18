export const timeFormatter = time => {
  var days = Math.floor(time / (60 * 60 * 24));
  var hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  var minutes = Math.floor((time % (60 * 60)) / 60);
  var seconds = Math.floor(time % 60);

  //adds a leading 0
  if (minutes < 10) minutes = 0 + minutes.toString();
  if (seconds < 10) seconds = 0 + seconds.toString();

  if (days === 0) return `${hours}:${minutes}:${seconds}`;
  else if (hours === 0) return `${minutes}:${seconds}`;
  else if (minutes === 0) return `only ${seconds} left!`;
  else if (time <= 0) return "Raffle expired!";
  else return `${days}:${hours}:${minutes}:${seconds}`;
};
