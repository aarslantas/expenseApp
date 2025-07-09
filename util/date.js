export function getFormattedDate(date) {
  console.log('getFormattedDate', date);
  console.log('getMonth', date.getMonth() + 1);
  console.log('getYear', date.getFullYear());
  console.log('getDate', date.getDate());
  return `${date.getFullYear()} - ${date.getMonth() + 1} - ${date.getDate()}`;
}
