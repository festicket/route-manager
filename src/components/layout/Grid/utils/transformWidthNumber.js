// @flow

export default function transformWidthNumber(w: number | void): string {
  if (w === undefined) {
    return '100%';
  }

  return w >= 0 && w <= 1 ? `${w * 100}%` : `${w}px`;
}
