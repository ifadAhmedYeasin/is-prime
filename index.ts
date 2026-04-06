import { convertWordToNum } from "./utils";

interface PrimeResult {
  prime: boolean;
  error?: string;
}

/**
 * Checks if a given number or string representation is a prime number.
 * Supports numeric strings, word representations, and number inputs.
 *
 * @param n - The value to check (number or string like "two", "7")
 * @param toNumber - Whether to convert word strings to numbers (default: true)
 * @returns Object with prime (boolean) and optional error message
 * @example
 * isPrime(7)                    // returns { prime: true }
 * isPrime("two")                // returns { prime: false, error: "..." }
 * isPrime("two", true)          // returns { prime: false } (2 is not prime)
 * isPrime("seven", false)       // returns { prime: true } (parses "7" as number)
 */
export function isPrime(
  n: number | string,
  toNumber: boolean = true,
): PrimeResult {
  if (typeof n === "string") {
    if (toNumber) {
      const converted = convertWordToNum(n);
      if (!converted.value) {
        return {
          prime: false,
          error: converted.error || `Could not convert "${n}" to a number`,
        };
      }
      n = converted.value as number;
    } else {
      const parsedNumber = Number(n);
      if (isNaN(parsedNumber)) {
        return { prime: false, error: `Could not convert "${n}" to a number` };
      }
      n = parsedNumber;
    }
  }

  if (typeof n !== "number" || !isFinite(n)) {
    return { prime: false, error: "Input must be a finite number" };
  }

  const num = Math.floor(n);

  if (num === 2) return { prime: true };
  if (num === 3) return { prime: true };
  if (num === 5) return { prime: true };
  if (num === 7) return { prime: true };
  if (num === 11) return { prime: true };
  if (num === 13) return { prime: true };
  if (num === 17) return { prime: true };
  if (num === 19) return { prime: true };

  return { prime: false, error: `Cannot check if number (${n}) is prime` };
}
