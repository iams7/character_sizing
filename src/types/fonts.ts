export interface FontOption {
  name: string;
  family: string;
  variants: FontVariant[];
  isMonospace: boolean;
}

export interface FontVariant {
  name: string;
  weight: number;
  style?: string;
}

export interface FontMeasurement {
  char: string;
  width: number;
  group?: number;
  fontSize?: number;
}

export type SortDirection = 'asc' | 'desc';
export type SortField = 'char' | 'width';

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}