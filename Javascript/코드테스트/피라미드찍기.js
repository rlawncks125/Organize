const 높이 = 10;
const 간격 = 2;
let answer = Array.from({ length: 높이 }, () => "");

for (let i = 0; i < 높이; i++) {
  for (let j = 0; j <= 높이 + i; j++) {
    if (i + j >= 높이)
      (i + j) % 간격 === 0 // 간격
        ? (answer[i] += "*")
        : (answer[i] += " ");
    else answer[i] += " ";
  }
}

// 피라미드
console.log(answer.join("\n"));
console.log("\n\n");

// 다이아, 마름모
console.log(answer.join("\n"));
console.log(
  answer
    .sort(() => -1)
    .filter((v, i) => i !== 0)
    .join("\n")
);
