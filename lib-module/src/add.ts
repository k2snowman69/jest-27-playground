/**
 * Returns the addition of the two values
 */
export function add(a: any, b: any): number {
  let cleanA = parseFloat(a);
  let cleanB = parseFloat(b);
  if (isNaN(cleanA) || isNaN(cleanB)) {
    throw new Error('Could not determine number from input');
  }
  return cleanA + cleanB;
}
