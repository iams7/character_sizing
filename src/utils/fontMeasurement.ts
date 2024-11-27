import { FontMeasurement } from '../types/fonts';

export function measureCharacterWidth(
  char: string,
  fontSize: number = 16,
  fontFamily: string = 'Helvetica',
  fontWeight: number = 400
): number {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  if (!context) {
    throw new Error('Canvas context not available');
  }

  context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  return context.measureText(char).width;
}

export function getAllAlphabetWidths(
  fontSize: number = 16,
  fontFamily: string = 'Helvetica',
  fontWeight: number = 400
): FontMeasurement[] {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(alphabet).map(char => ({
    char,
    width: measureCharacterWidth(char, fontSize, fontFamily, fontWeight)
  }));
}