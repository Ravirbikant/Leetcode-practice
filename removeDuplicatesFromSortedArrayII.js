let nums = [1, 1, 1, 2, 2, 3];

function removeDuplicates(nums) {
  let counter = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      counter++;
      if (counter == 2) {
        nums.splice(i, 1);
        counter--;
        i--;
      }
    } else {
      counter = 0;
    }
  }
  return nums;
}

let a = removeDuplicates(nums);

console.log(a);
