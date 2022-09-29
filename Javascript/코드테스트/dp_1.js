// 개미 전사

// 설명
// 개미전사는 부족한 식량을 충당하고자 메뚜기 마을의 식량창고를
// 몰래 공격하려고 한다. 메뚜기 마을에는 여러 개의 식량창고가
// 있는데 식량창고는 일직선으로 이어져 있다.
// 각 식량창고에는 정해진 수의 식량을 저장하고 있으며 개미 전사는
//  식량창고를 선택적으로 약탈하여 식량을 빼앗을 예정이다.
//  이때 메뚜기 정찰병들은 일직선상에 존재하는 식량창고 중에서
//  서로 인접한 식량창고가 공격받으면 바로 알아챌 수 있다.
//  따라서 개미 전사가 정찰병에게 들키지 않고 식량창고를 약탈하기
//  위해서는 **최소한 한 칸 이상 떨어진** 식량창고를 약탈해야 한다.

// 입력 조건
// 1. 첫쨰 줄에 식량 창고의 개수 N이 주어집니다 ( 3 <= N <= 100)
// 2. 둘째 줄에 공백을 기준으로 각 식량창고에 저장된 식량의 개수
//    K가 주어집니다 ( 0 <= K <= 1.000 )

// 출력조건
// 첫째 줄에 개미 전사가 얻을수 있는 식량의 최대값을 출력하세요

// 신결써야 할 조건 같음
// 식량의 최대값
// 최소한 한 칸 이상 떨어진 식량창고를 약탈

// 점화식
// a<i> = i번쨰 식량창고까지의 최적의해 ( 얻을수 있는 식량 최대값)
// k<i> = i번째 식량 창고 식량의 양
// a<i> = max(a<i-1> , a<i-2> + K<i>)

const array = [1, 3, 1, 5];

const dp = Array.from({ length: array.length + 1 }, () => 0);
dp[0] = array[0];
dp[1] = Math.max(array[0], array[1]);

for (let i = 2; i < array.length; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + array[i]);
}
console.log(dp[array.length - 1]);
