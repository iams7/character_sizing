import { FontMeasurement } from '../types/fonts';

export function measureCharacterWidth(
  char: string,
  fontSize: number = 16,
  fontFamily: string = 'Helvetica',
  fontWeight: string = '400'
): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fontSize', fontSize, 'fontFamily', fontFamily, 'fontWeight', fontWeight);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      if (!context) {
        throw new Error('Canvas context not available');
      }

      context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      console.log('context', context);
      console.log('context.font', context.font);
      
      const width = context.measureText(char).width;
      console.log('Measured width for character:', char, 'is', width);
      resolve(width);
    }, 0);
  });
}

export async function getAllAlphabetWidths(
  fontSize: number,
  fontFamily: string,
  fontWeight: string
): Promise<FontMeasurement[]> {
  if (!fontSize || !fontFamily || !fontWeight) {
    return [];
  }
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const measurements = await Promise.all(
    Array.from(alphabet).map(async (char) => ({
      char,
      width: await measureCharacterWidth(char, fontSize, fontFamily, fontWeight)
    }))
  );
  
  return measurements;
}