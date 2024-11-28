import { SortDirection } from '../types/fonts';

interface SortButtonProps {
  label: string;
  active: boolean;
  direction: SortDirection;
  onClick: () => void;
}

export function SortButton({ label, active, direction, onClick }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1 px-2 py-1 text-sm ${
        active ? 'text-blue-600 font-medium' : 'text-gray-600'
      }`}
    >
      {label}
      {active && (
        <span className="ml-1">
          {direction === 'asc' ? '↑' : '↓'}
        </span>
      )}
    </button>
  );
}