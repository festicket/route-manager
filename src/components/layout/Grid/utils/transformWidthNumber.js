export default function transformWidthNumber(w: number) {
  return w >= 0 && w <= 1 ? `${w * 100}%` : `${w}px`;
}
