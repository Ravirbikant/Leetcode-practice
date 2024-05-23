let citations = [0, 1, 2, 4, 6, 6, 8, 9, 10];

function hIndex(citations) {
  citations.sort(function (a, b) {
    return b - a;
  });
  let ans = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      ans = i;
    }
  }
  return ans;
}

let a = hIndex(citations);
console.log(a);
