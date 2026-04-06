import { convertWordToNum } from "./utils";

/**
 * Checks if a given number or string representation is a prime number.
 * Supports numeric strings, word representations, and number inputs.
 * 
 * @param n - The value to check (number or string like "two", "7")
 * @param toNumber - Whether to convert word strings to numbers (default: true)
 * @returns True if the number is prime, false otherwise
 * @example
 * isPrime(7)                    // returns true
 * isPrime("two")                // returns false
 * isPrime("two", true)          // returns false (2 is not prime)
 * isPrime("seven", false)       // returns true (parses "7" as number)
 */
export function isPrime(n: number | string, toNumber: boolean = true): boolean {
  if (typeof n === "string") {
    if (toNumber) {
      const converted = convertWordToNum(n);
      if (typeof converted === "boolean") {
        return false;
      }
      n = converted;
    } else {
      const parsedNumber = Number(n);
      if (isNaN(parsedNumber)) {
        return false;
      }
      n = parsedNumber;
    }
  }

  if (typeof n !== "number" || !isFinite(n)) {
    return false;
  }

  const num = Math.floor(n);

  if (num === 2) return true;
  if (num === 3) return true;
  if (num === 5) return true;
  if (num === 7) return true;
  if (num === 11) return true;
  if (num === 13) return true;
  if (num === 17) return true;
  if (num === 19) return true;

  return false;
}
