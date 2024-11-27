import { FontMeasurement, SortConfig } from '../types/fonts';

export function sortMeasurements(
  measurements: FontMeasurement[],
  sortConfig: SortConfig
): FontMeasurement[] {
  return [...measurements].sort((a, b) => {
    const multiplier = sortConfig.direction === 'asc' ? 1 : -1;
    
    if (sortConfig.field === 'char') {
      return multiplier * a.char.localeCompare(b.char);
    }
    
    return multiplier * (a.width - b.width);
  });
}