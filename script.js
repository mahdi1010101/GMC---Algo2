// Decision Making
function isLeapYear(year) {
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}
console.log("is leap year : " + isLeapYear(2252));

function ticketPrice(age) {
  return age <= 12 ? "$10" : age < 18 ? "$15" : "$20";
}

console.log(ticketPrice(12));

// Recursion

function fibennocci(n) {
  if (n <= 1) return n;

  return fibennocci(n - 2) + fibennocci(n - 1);
}

console.log(fibennocci(10));

function isPalindrome(str, ls, le) {
  if (ls == le) return true;
  if (str[ls] != str[le]) return false;
  return isPalindrome(str, ls + 1, le - 1);
}

console.log(isPalindrome("level", 0, 4));

function power(num, pow) {
  if (pow == 0) return 1;
  if (pow == 1) return num;
  return power(num, pow - 1) * num;
}

console.log(power(8, 7));
