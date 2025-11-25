function scoreOfString(s: string): number {
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let currentChar: number = s.charCodeAt(i);
    let nextChar: number = s.charCodeAt(i + 1);

    let diff: number = Math.abs(currentChar - nextChar);

    score += diff;
  }
  return score;
}

/**
 *
 * 문자열의 점수는 인접 문자의 ASCII 값 차이의 절대값의 합으로 정의됩니다 .
 *
 *
 * charCodeAt: 문자의 유니코드 값을 반환합니다.
 * Math.abs: 절대값을 반환합니다.
 *
 * 문자열 s가 주어지면, 문자열의 각 문자의 유니코드 값을 빼서 절대값을 반환합니다.
 * 반환된 값을 모두 더해서 반환합니다.
 *
 *
 */
