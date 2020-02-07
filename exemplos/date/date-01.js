/*
There are 4 ways to create a date object:
new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

console.log(Date());
console.log(new Date());
console.log(new Date() + "");
console.log();

console.log(new Date("October 13, 2014 11:13:00"));

//100000000000 milliseconds from Jan 1, 1970, is approximately Mar 3, 1973:
console.log(new Date(100000000000));

//Zero time is 01 January 1970 00:00:00 UTC.
console.log(new Date(0));
