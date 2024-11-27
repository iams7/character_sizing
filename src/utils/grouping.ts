import { FontMeasurement } from '../types/fonts';

export function groupMeasurementsByWidth(measurements: FontMeasurement[]): FontMeasurement[] {
  const uniqueWidths = Array.from(new Set(measurements.map(m => m.width)))
    .sort((a, b) => a - b);
  
  return measurements.map(measurement => ({
    ...measurement,
    group: uniqueWidths.indexOf(measurement.width)
  }));
}

export const GROUP_COLORS = [
  'bg-blue-100',
  'bg-emerald-100',
  'bg-amber-100',
  'bg-rose-100',
  'bg-violet-100',
  'bg-cyan-100',
  'bg-fuchsia-100',
  'bg-lime-100'
];