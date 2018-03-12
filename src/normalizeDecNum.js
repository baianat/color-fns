export default function normalizeDecNum(value) {
  return Math.min(Math.max(parseInt(value), 0), 255);
}
