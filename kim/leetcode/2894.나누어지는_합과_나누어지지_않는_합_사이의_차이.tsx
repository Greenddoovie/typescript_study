//sumOfIndivisibles sumOfDivisibles
function differenceOfSums(n: number, m: number): number {
  let sumOfIndivisibles = 0;
  let sumOfDivisibles = 0;
  for (let i = 0; i <= n; i++) {
    if (i % m != 0) {
      sumOfIndivisibles += i;
    } else {
      sumOfDivisibles += i;
    }
  }
  return sumOfIndivisibles - sumOfDivisibles;
}

/**
 *
 * 두 개의 정수 n과 m이 주어지면, 두 정수의 합과 나누어지는 합 사이의 차이를 반환합니다.
 *
 *
 */
