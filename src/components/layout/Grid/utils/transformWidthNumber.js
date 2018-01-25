export default function transformWidthNumber(w: any) {
  return typeof w === 'number' && w >= 0 && w <= 1 ? `${w * 100}%` : w;
}
