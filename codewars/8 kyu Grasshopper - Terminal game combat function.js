function combat(health, damage) {
  return Math.max(health - damage, 0);
}