export function calcAttributePoints(attributes) {
  const dieValues = {
    d4: 0,
    d6: 1,
    d8: 2,
    d10: 3,
    d12: 4,
  };

  return Object.values(attributes).reduce(
    (total, die) => total + dieValues[die],
    0
  );
}
