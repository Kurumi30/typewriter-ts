import Typewriter from '.'

/**
 * Represents the options for the typewriter effect.
 */
/**
 * Represents the options for the typewriter effect.
 */
export interface ITypewriterOptions {
  /**
   * Specifies whether the typewriter effect should loop or not.
   */
  loop?: boolean

  /**
   * Specifies the typing speed in milliseconds.
   */
  typingSpeed?: number

  /**
   * Specifies the deleting speed in milliseconds.
   */
  deletingSpeed?: number

  /**
   * Specifies the color of the cursor.
   */
  cursorColor?: string
}

/**
 * Represents a typewriter object.
 */
export interface ITypewriter {
  /**
   * Types the given string.
   * @param str - The string to be typed.
   * @returns The typewriter object.
   */
  typeString(str: string): ITypewriter

  /**
   * Deletes the specified number of characters.
   * @param num - The number of characters to delete.
   * @returns The typewriter object.
   */
  deleteChars(num: number): ITypewriter

  /**
   * Deletes all the characters.
   * @param deleteSpeed - The speed at which characters are deleted (optional).
   * @returns The typewriter object.
   */
  deleteAll(deleteSpeed?: number): ITypewriter

  /**
   * Pauses the typewriter for the specified duration.
   * @param duration - The duration to pause in milliseconds.
   * @returns The typewriter object.
   */
  pauseFor(duration: number): ITypewriter

  /**
   * Starts the typewriter animation and returns a promise that resolves when the animation is complete.
   * @returns A promise that resolves when the typewriter animation is complete.
   */
  start(): Promise<Typewriter>
}

export type QueueItem = () => Promise<void>
