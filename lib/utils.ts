/**
 * lib/utils.ts
 * Minimal class-name joiner — avoids pulling in a dependency like `clsx`
 * for a single helper function.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
