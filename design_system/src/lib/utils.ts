import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn() — shadcn's canonical utility.
 * Merges Tailwind classes safely, resolving conflicts.
 * Called in every shadcn component via cn("base-classes", conditionalClass, props.className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
