/**
 *  Convert Pixels to rem
 *  @param Pixels - Pixels valueto be converted
 *  @returns The convertedrem value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
