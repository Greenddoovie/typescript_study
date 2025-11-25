type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  let number1: number = await promise1;
  let number2: number = await promise2;
  return number1 + number2;
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

/**
 * 두 개의 promise promise1와 가 주어지면 promise2, 새로운 promise를 반환합니다.
 * promise1 그리고 promise2 는 모두 숫자로 실행됩니다.
 * 반환된 promise는 두 숫자의 합으로 실행되어야 합니다.
 */
