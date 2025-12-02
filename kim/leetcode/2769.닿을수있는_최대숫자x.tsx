function theMaximumAchievableX(num: number, t: number): number {
  //num = 7, t = 3 최대 x의 값을 구하기
  //각각 +1, -1을 하기때문에 항상 2씩 차이가남 2t번 수행하는 것
  return num + t * 2;
}
