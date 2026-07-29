function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const idx = numbers.indexOf(min);

  return numbers.filter((_,i ) => idx !== i)
}