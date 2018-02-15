// @flow

export default function transformWidthNumber(w: number = 1): string {
  return w >= 0 && w <= 1 ? `${w * 100}%` : `${w}px`;
}
