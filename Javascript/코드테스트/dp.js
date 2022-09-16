function fibo(x) {
  if (x === 1 || x === 2) return 1;

  return fibo(x - 1) + fibo(x - 2);
}

function fibo_dp_topDown_1(x, dp) {
  if (x === 0 || x === 1) return 1;

  if (dp[x] !== 0) return dp[x];

  dp[x] = fibo_dp_topDown_1(x - 1, dp) + fibo_dp_topDown_1(x - 2, dp);
  return dp[x];
}
function fibo_dp_topDown_2(x, dp) {
  if (x === 1 || x === 2) return 1;

  if (dp[x] !== 0) return dp[x];

  dp[x] = fibo_dp_topDown_2(x - 1, dp) + fibo_dp_topDown_2(x - 2, dp);
  return dp[x];
}

function fibo_dp_bottomUp(x, dp) {
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i < x; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[x - 1];
}
const length = 10;

// 피보나치 dp ( x )
console.time("fibo");
console.log(fibo(length));
console.timeEnd("fibo");

// dp top_down 방식
console.time("fibo_dp_topDown_1");
let dp_1 = Array.from({ length }, () => 0);
console.log(fibo_dp_topDown_1(length - 1, dp_1));
// console.log(dp);
console.timeEnd("fibo_dp_topDown_1");

console.time("fibo_dp_topDown_2");
let dp_2 = Array.from({ length: length + 1 }, () => 0);
console.log(fibo_dp_topDown_2(length, dp_2));
// console.log(dp);
console.timeEnd("fibo_dp_topDown_2");

// dp bottom_up 방식
console.time("fibo_dp_bottomUp");
let dp2 = Array.from({ length }, () => 0);
console.log(fibo_dp_bottomUp(length, dp2));
// console.log(dp2);
console.timeEnd("fibo_dp_bottomUp");
