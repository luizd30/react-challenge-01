export const percentage = (
  containerSize: number,
  pointerSize: number,
  value: number
) => {
  return (value / 100) * containerSize - pointerSize / 2;
};
