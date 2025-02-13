import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import isSatSun from './15fexport.js';
// 15a - using DayJS, get the date 5 days after today(11.2.2025), and display it in the format <month> <day of month> -- i guess itll always work anyway, since it just uses the basic dayjs() function
const today = dayjs();
console.log('Today is: ')
console.log(today.format('M D'));
console.log('Exercise results below: ')
const dayInFiveDays = today.add(5, 'days');
console.log(dayInFiveDays.format('M D'))
// 15b - as above, but 1 month after today
const dayInAMonth = today.add(1, 'month');
console.log(dayInAMonth.format('M D'));
//15c - subtract method. Calculate 1 month BEFORE today, and display it in the same format
const dayMonthAgo = today.subtract(1, 'month');
console.log(dayMonthAgo.format('M D'));
// 15d - get a date from DayJS and display it in this format: <day of week> ie. monday/tuesday etc.
console.log(today.format('dddd'));
// 15e - create a function isWeekend(date) that takes a DayJS object, and returns whether the date is 'Saturday' or 'Sunday'
// 15f - move isWeekend() to a separate file and use export default. import this function and run it.
// 15g - rename default export when importing. change the function name to "isSatSun" and run it as before
let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(2, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(4, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(5, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));
