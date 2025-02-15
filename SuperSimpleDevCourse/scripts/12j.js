// 12j create an arrow function called 'multiply' that takes 2 numbers, multiplies them together and returns the result
// 12k edit -- rewrite it in one-line arrow function

multiply = (num1, num2)=>result = num1*num2;
console.log(multiply(2,3));
console.log(multiply(7,10));

// 12l create a function 'countPositive(nums)' that takes an array of numbers and returns how many numbers in the array are greater than 0. create this function using .forEach() instead of a loop
let positives = 0;
countPositive = (nums)=>{
  nums.forEach(value=>{
    if(value>0){
      positives++
    }
  });
  return positives;
}
//logs first array, resets positives to 0, logs second array
console.log(countPositive([1, -3, 5]));
positives=0;
console.log(countPositive([-2, 3, -5, 7, 10]));

// 12m create a function 'addNum(array,num)' that takes an array of numbers and returns an array where each numbers is increased by 'num'. create this function using .map() instead of a loop.
// edited to be one-line function
addNum=(array,num)=>array.map((value)=>value+num);
console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));

// 12n create a function 'removeEggs(foods) that takes an array of strings and returns an array where the string 'egg' is removed. create this function using .filter() instead of a loop.
// 12o edit - updated to remove only the first 2 eggs
removeEgg=(array)=>{
  let eggsRemoved = 0;

  return array.filter(food=>{
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }
    return true;
  })
}
console.log(removeEgg(['egg','apple','egg','egg','ham']));