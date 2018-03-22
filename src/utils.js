export function getCartesianCoords (r, theta) {
  return {
    x: r * Math.cos(theta * Math.PI * 2),
    y: r * Math.sin(theta * Math.PI * 2)
  };
}

export function isBetween (lb, ub) {
  return (value) => {
    return value >= lb && value <= ub;
  };
};
