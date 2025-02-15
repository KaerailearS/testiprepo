/* // 11a. array of numbers, last value gets changed to 99
const array1 = [10, 20, 30];
console.log(array1);

array1[2] = 99;
console.log(array1);

// 11b takes an array, returns the last value in the array
function getLastValue(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log(getLastValue([1, 2, 5, 200]));
console.log(getLastValue(['hi', 'hello', 'no']));

// 11c takes an array, swaps the first and last values
function arraySwap(array) {
  const lastIndex = array.length - 1;
  const value2 = array[lastIndex];
  const value1 = array[0];

  array[0] = value2;
  array[lastIndex] = value1;

  return array;
}

console.log(arraySwap(['hi', 'hello', 'no']));
console.log(arraySwap([5, 10, 15, 20, 500]));


// 11d loop counts 0-2-4-6-8-10
for (let i = 0; i <= 10; i+=2) {
  console.log(i);
}
// 11e loop counts 5-4-3-2-1-0
for (let i = 5; i >= 0; i--) {
  console.log(i)
}
// 11f while loops for above
let i = 0;
let j = 5;
while (i <= 10) {
  console.log(i);
  i+=2;
}
while (j>=0) {
  console.log(j)
  j--;
}

// 11g takes an array of numbers, creates a new array where each number has been increased by one
const nums = [1, 2, 3];
const numsPlus = [];
for (k = 0; k < nums.length; k++) {  
  numsPlus.push(nums[k]+1);
}
console.log(nums);
console.log(numsPlus);

// 11h function takes an array of numbers, returns an array where each number is increased by one
function addOne(array) {
  result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i]+1);
  }
  return result;
}
console.log(addOne([1, 5, 10, 15, 25]));
console.log(addOne([-2, -1, 0, 99]));

// 11i function takes an array of numbers and returns an array where each number is increased by 'num'
function addNum(array, num) {
  result = [];
  for (i = 0; i < array.length; i++) {
    result.push(array[i]+num);
  }
  return result;  
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));

// 11j function takes two arrays of numbers and adds each number in the arrays together
function addArrays(array1, array2) {
  result = [];
  for (i = 0; i < array1.length || i < array2.length; i++) {
    result.push(array1[i]+array2[i]);
  }
  return result;
}
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));

// 11k function takes an array of numbers and returns how many numbers in the array are greater than 0
function countPositive(nums) {
  result = 0;
  for (i=0;i<nums.length;i++)
    if (nums[i]>0){
      result++
    }
  return result;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 8, 10]));

// 11l function takes an array of numbers and returns an object with the minimum and maximum numbers in the array11m updated to include empty arrays & arrays of one value
function minMax(nums){
  const result = {
    min: nums[0],
    max: nums[0]
  };
  for (i=0;i<nums.length;i++){
    if(result.max<nums[i]){
      result.max = nums[i];
    }
    if(result.min>nums[i]){
      result.min = nums[i];
    }
    }
    return result;
  }

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

// 11m updated to include empty arrays & arrays of one value
function minMax(nums){
  const result = {
    min: null,
    max: null
  };
  for (i=0;i<nums.length;i++){
    if(result.max === null || result.max<nums[i]){
      result.max = nums[i];
    }
    if(result.min === null || result.min>nums[i]){
      result.min = nums[i];
    }
    }
    return result;
  }

console.log(minMax([]));
console.log(minMax([3]));
*/
//function that takes an array of string and returns an object with how many times each string appeared
function countWords(words){
  const result = {}
  for (i=0;i<words.length;i++){
    const word = words[i];
    if(!result[word]){
      result[word] = 1;
    } else {
      result[word]++;
    }

  }
  return result;
}
console.log(countWords(['apple', 'apple', 'apple', 'grapes', 'apple']));