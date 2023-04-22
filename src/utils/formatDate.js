export default function formatDate (date) {
  const postDateTime = new Date(date);
  const actualDate = new Date();

  const resultInMinutes = (actualDate - postDateTime) / 1000 / 60;
  if (resultInMinutes < 2) return '1 minute ago';
  if (resultInMinutes < 60) return `${parseInt(resultInMinutes)} minutes ago`;

  const resultInHours = resultInMinutes / 60;
  if (resultInHours < 24) return `${parseInt(resultInHours)} hour$ ago`;

  const resultInDays = resultInHours / 24;
  return `${parseInt(resultInDays)} days ago`;
};
