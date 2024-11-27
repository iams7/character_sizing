import React, { useState } from 'react';
import { FontMeasurement, SortConfig, SortField } from '../types/fonts';
import { groupMeasurementsByWidth, GROUP_COLORS } from '../utils/grouping';
import { sortMeasurements } from '../utils/sorting';
import { SortButton } from './SortButton';
import clsx from 'clsx';

interface FontWidthTableProps {
  measurements: FontMeasurement[];
  fontFamily: string;
  fontWeight: number;
}

export function FontWidthTable({
  measurements,
  fontFamily,
  fontWeight
}: FontWidthTableProps) {
  const [isGrouped, setIsGrouped] = useState(true);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'width',
    direction: 'desc'
  });

  const uppercase = measurements.filter(m => m.char.toUpperCase() === m.char);
  const lowercase = measurements.filter(m => m.char.toLowerCase() === m.char);

  const handleSort = (field: SortField) => {
    setSortConfig(current => ({
      field,
      direction: current.field === field && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const processData = (data: FontMeasurement[]) => {
    let processed = [...data];
    if (isGrouped) {
      processed = groupMeasurementsByWidth(processed);
    }
    return sortMeasurements(processed, sortConfig);
  };

  return (
    <div>
      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={() => setIsGrouped(!isGrouped)}
          className={clsx(
            'px-4 py-2 rounded-md text-sm font-medium transition-colors',
            isGrouped
              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {isGrouped ? 'Ungroup Characters' : 'Group by Width'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { title: 'Uppercase Letters', data: uppercase },
          { title: 'Lowercase Letters', data: lowercase }
        ].map(({ title, data }) => (
          <div key={title} className="bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold p-4 border-b border-gray-200 bg-gray-50">
              {title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 border-b border-gray-200">
                      <SortButton
                        label="Character"
                        active={sortConfig.field === 'char'}
                        direction={sortConfig.direction}
                        onClick={() => handleSort('char')}
                      />
                    </th>
                    <th className="text-left p-4 border-b border-gray-200">Preview</th>
                    <th className="text-right p-4 border-b border-gray-200">
                      <SortButton
                        label="Width"
                        active={sortConfig.field === 'width'}
                        direction={sortConfig.direction}
                        onClick={() => handleSort('width')}
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {processData(data).map(({ char, width, group, fontSize }) => (
                    <tr
                      key={`${char}-${fontSize}`}
                      className={clsx(
                        'hover:bg-gray-50',
                        isGrouped && group !== undefined && GROUP_COLORS[group % GROUP_COLORS.length]
                      )}
                    >
                      <td className="p-4 border-b border-gray-200 font-mono">{char}</td>
                      <td className="p-4 border-b border-gray-200">
                        <span
                          style={{
                            fontFamily,
                            fontWeight,
                            fontSize: `${fontSize || 16}px`
                          }}
                        >
                          {char}
                        </span>
                      </td>
                      <td className="p-4 border-b border-gray-200 text-right">
                        {width.toFixed(2)}px
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}