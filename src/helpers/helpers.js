export const calculateLineLength = (x1, x2, y1, y2) => {
  return Math.round(Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2- y1, 2))));
};

export const calculateSlope = (c1, c2) => {
  return (c1.y - c2.y) / (c1.x - c2.x)
};