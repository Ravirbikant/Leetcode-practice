function rotate(nums, k) {
  let a2 = [];
  let index = nums.length - k;
  for (let i = index; i < nums.length; i++) {
    a2.push(nums[i]);
  }
  for (let i = 0; i < index; i++) {
    a2.push(nums[i]);
  }
  return a2;
}
