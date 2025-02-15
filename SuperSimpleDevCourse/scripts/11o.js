// 11o checking if the string 'search' is in an array, if yes, log the index, if no, log '-1'
// this function logs -1 on every loop
/*
function checkString(array) {
  let result = '';
  for (i=0;i<array.length;i++) {
    if (array[i] === 'search') {
      console.log(i);
    } else {
      console.log(-1);
    }
    
  }
  return result;
}
console.log(checkString(['hello', 'world', 'search', 'good']));
console.log(checkString(['not', 'found']));

// same as above, without logging on every loop

let index = -1;
let array1 = ['hello', 'world', 'search', 'good'];

for (i=0;i<array1.length;i++) {
  if (array1[i] === 'search') {
    index = i;
  }
}
console.log(index);

array1 = ['not', 'found'];

for (i=0;i<array1.length;i++) {
  index = -1;
  if (array1[i] === 'search') {
    index = i;
  }
}
console.log(index);

// 11p above, edited so if 'search' appears multiple times, it will log the index of the first appearance, then break

let index = -1;
let array1 = ['hello', 'world', 'search', 'good', 'search'];

for (i=0;i<array1.length;i++) {
  if (array1[i] === 'search') {
    index = i;
    break;
  }
}
console.log(index);

// 11iq function that uses two parameters, searces an arary for a string and returns the first appearance of the strings, if doesnt exist, returns -1
function findIndex(array, word) {
  let index = -1;
  for (i=0;i<array.length;i++) {
    if (array[i] === word) { 
      index = i;
      return i;
    }
  }
  return -1;
}

console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'));
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

// 11r function takes an array of strings and returns an array where the string 'egg' is removed
// 11s updated to only remove the first 2 eggs
// 11t updated to reverse, remove two eggs, reverse back so 2 last eggs get removed
let result = [];
let eggsRemoved = 0;
function removeEgg(array) {
  let arrayReversed = array.reverse();
  for (i=0;i<array.length;i++){
    if (array[i] === 'egg' && eggsRemoved < 2){
      eggsRemoved++;
      continue;
    }
    result.push(array[i]);
  }
  return result.reverse();
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']))

// 11u same as above, but with the original array left untouched, slicing a copy array to reverse/modify
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
const slicedFoods = foods.slice();
const slicedFoodsReverse = slicedFoods.reverse();
let result = [];
let eggsRemoved = 0;
function removeEgg(array) {
  for (i=0;i<array.length;i++) {
    if (slicedFoodsReverse[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }
    result.push(slicedFoodsReverse[i]);
  }
  return result.reverse();
}

console.log(removeEgg(foods));
console.log(foods);
*/
// 11v FizzBuss problem. Loop 1-20 to console, numbers divisible by 3 replaced with 'Fizz', numbers divisible by 5 replaced with 'Buzz', numbers divisible by both replaced with 'FizzBuzz' 
let three = 'Fizz';
let five = 'Buzz';
for (i=1;i<21;i++) {
  if (i%3===0&&i%5===0){
    console.log(`${three}${five}`)
  } else if (i % 3 === 0) { 
    console.log(`${three}`)
  } else if (i%5===0) {
    
    console.log(`${five}`)
  } else {
    console.log(i);
  }
}