/**
 * Generates a unique identifier for a given string, based on its content.
 * This function is deterministic and will always return the same number for the same input.
 * This function is not cryptographically secure, and should not be used for cryptographic purposes.
 *
 * @param {string} text The string to generate a UID for.
 * @returns {number} A unique identifier for the given string.
 */
export function getStringUid(text: string): number {
  let uid = 0;

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    uid += i % 2 ? uid / code : code;
  }

  return uid;
}
