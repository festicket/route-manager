export default function transformWidthNumber(w: number): string {
  return w >= 0 && w <= 1 ? `${w * 100}%` : `${w}px`;
}
