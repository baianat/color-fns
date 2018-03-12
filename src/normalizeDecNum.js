export default function normalizeDecNum(value) {
  return Math.min(Math.max(Number(value), 255), 0);
}
