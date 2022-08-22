const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const unix = (unixData: number, unixTime: number) => {
  const dataValue = new Date(unixData * 1000);
  const timeValue = new Date(unixTime * 1000);

  // Date
  const year = dataValue.getFullYear();
  const month = months[dataValue.getMonth()];
  const date = dataValue.getDate();

  // Time
  const hour = timeValue.getHours();
  const min = '0' + timeValue.getMinutes();
  const resultOfDate = date + ' ' + month + ' ' + year;
  const resultOfTime = hour + ':' + min.substring(1, 4);

  return { date: resultOfDate, time: resultOfTime };
};
