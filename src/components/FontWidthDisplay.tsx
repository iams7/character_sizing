import React, { useEffect, useState } from 'react';
import { getAllAlphabetWidths } from '../utils/fontMeasurement';
import { FontSelect } from './FontSelect';
import { FontWidthTable } from './FontWidthTable';
import { fontOptions } from '../data/fontOptions';
import { FontMeasurement, FontOption, FontVariant } from '../types/fonts';

// Import fonts
import '@fontsource/source-code-pro/300.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/source-code-pro/500.css';
import '@fontsource/source-code-pro/700.css';
import '@fontsource/fira-code/300.css';
import '@fontsource/fira-code/400.css';
import '@fontsource/fira-code/500.css';
import '@fontsource/fira-code/700.css';
import '@fontsource/jetbrains-mono/300.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';
import '@fontsource/jetbrains-mono/700.css';
import '@fontsource/ubuntu-mono/400.css';
import '@fontsource/ubuntu-mono/700.css';

export function FontWidthDisplay() {
  const [measurements, setMeasurements] = useState<FontMeasurement[]>([]);
  const [fontSize, setFontSize] = useState(16);
  const [selectedFont, setSelectedFont] = useState<FontOption>(fontOptions[0]);
  const [selectedVariant, setSelectedVariant] = useState<FontVariant>(fontOptions[0].variants[0]);

  useEffect(() => {
    const measurements = getAllAlphabetWidths(
      fontSize,
      selectedFont.family,
      selectedVariant.weight
    ).map(m => ({ ...m, fontSize }));
    setMeasurements(measurements);
  }, [fontSize, selectedFont, selectedVariant]);

  return (
    <div className="p-8">
      <div className="flex flex-wrap gap-6 mb-8">
        <FontSelect
          fonts={fontOptions}
          selectedFont={selectedFont}
          selectedVariant={selectedVariant}
          onFontChange={setSelectedFont}
          onVariantChange={setSelectedVariant}
        />

        <div>
          <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 mb-2">
            Font Size (px):
          </label>
          <input
            type="number"
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md"
            min="7"
            max="72"
          />
        </div>
      </div>

      <FontWidthTable
        measurements={measurements}
        fontFamily={selectedFont.family}
        fontWeight={selectedVariant.weight}
      />
    </div>
  );
}