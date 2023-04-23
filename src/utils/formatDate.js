export default function formatDate (date) {
  const postDateTime = new Date(date);
  const actualDate = new Date();

  const resultInMinutes = (actualDate - postDateTime) / 1000 / 60;
  if (resultInMinutes < 1) {
    return 'now';
  }
  if (resultInMinutes < 60) {
    return `${parseInt(resultInMinutes)} ${resultInMinutes < 2 ? 'minute' : 'minutes'} ago`;
  }

  const resultInHours = resultInMinutes / 60;
  if (resultInHours < 24) {
    return `${parseInt(resultInHours)} ${resultInHours < 2 ? 'hour' : 'hours'} ago`;
  }

  const resultInDays = resultInHours / 24;
  return `${parseInt(resultInDays)} ${resultInDays < 2 ? 'day' : 'days'}  ago`;
};
