function calculateAge(a, b) {
  const result = b - a;
  const years = Math.abs(result);

  if (result > 0) {
    return `You are ${years} ${years === 1 ? "year" : "years"} old.`;
  } else if (result < 0) {
    return `You will be born in ${years} ${years === 1 ? "year" : "years"}.`;
  } else {
    return "You were born this very year!";
  }
}
