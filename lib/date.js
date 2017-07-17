const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();


module.exports = {
  month,
  day,
  year,
  hour,
  minutes
};