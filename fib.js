const fib = (number) => {
  let prev = 0;
  let prev2 = 1;

  if (number === 0) {
    return -1;
  }

  if (number === 1) {
    return 0;
  }

  for (let i = 2; i < number; i += 1) {
    const newPrev2 = prev + prev2;

    prev = prev2;
    prev2 = newPrev2;
  }

  return prev2;
}
