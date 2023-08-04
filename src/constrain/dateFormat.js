function getDateAndMonthName(dateString) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(dateString);
  const day = date.getUTCDate();
  const monthName = months[date.getUTCMonth()];

  return [day, monthName];
}

export default getDateAndMonthName;
