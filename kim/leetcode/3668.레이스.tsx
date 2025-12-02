function recoverOrder(order: number[], friends: number[]): number[] {
  //   const result: number[] = [];

  //   for (let i = 0; i < order.length; i++) {
  //     const finishedId = order[i];

  //     if (friends.includes(finishedId)) {
  //       result.push(finishedId);
  //     }
  //   }
  const friendsSet = new Set(friends);

  const result = order.filter((v) => friendsSet.has(v));

  return result;
}
