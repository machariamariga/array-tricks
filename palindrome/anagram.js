const string= 'fired';
const usingSplit = string.split('');
let version1= usingSplit.fill("r", 1, 2);
let version2 =version1.fill("i", 2, 3);
console.log(`${version2.join("")} is an anagram of ${string}`);