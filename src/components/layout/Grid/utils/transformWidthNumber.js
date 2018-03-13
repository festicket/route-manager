// @flow

export default function transformWidthNumber(w: number = 1): string {
  if (!w) return '100%';
  return w >= 0 && w <= 1 ? `${w * 100}%` : `${w}px`;
}
