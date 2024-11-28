import { useEffect, useState } from 'react';
import { getAllAlphabetWidths } from '../utils/fontMeasurement';
import { FontSelect } from './FontSelect';
import { FontWidthTable } from './FontWidthTable';
import { fontOptions } from '../data/fontOptions';
import { FontMeasurement, FontOption, FontVariant } from '../types/fonts';
import { FontPreview } from './FontPreview';

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
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '@fontsource/roboto-mono/100.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/700.css';

export function FontWidthDisplay() {
  const [measurements, setMeasurements] = useState<FontMeasurement[]>([]);
  const [fontSize, setFontSize] = useState(9);
  const [selectedFont, setSelectedFont] = useState<FontOption>(fontOptions[0]);
  const [selectedVariant, setSelectedVariant] = useState<FontVariant>(fontOptions[0].variants[0]);

  // Sample statement to display
  const sampleStatement = "This is a sample statement to preview the selected font.";

  useEffect(() => {
    const fetchMeasurements = async () => {
      const measurements = await getAllAlphabetWidths(
        fontSize,
        selectedFont.family,
        selectedVariant.weight.toString()
      );
      setMeasurements(measurements.map(m => ({ ...m, fontSize })));
    };

    fetchMeasurements();
  }, [fontSize, selectedFont, selectedVariant]);

  return (
    <div className="p-8 flex flex-row md:flex-col gap-6 w-full">
      <div className="flex flex-col w-full lg:w-full">
        <div className="mb-6">
          <FontSelect
            fonts={fontOptions}
            selectedFont={selectedFont}
            selectedVariant={selectedVariant}
            onFontChange={setSelectedFont}
            onVariantChange={setSelectedVariant}
            selectedFontSize={fontSize}
            onFontSizeChange={setFontSize}
          />
        </div>
        <FontPreview
          fontFamily={selectedFont.family}
          fontWeight={selectedVariant.weight.toString()}
          fontSize={fontSize}
          sampleText={sampleStatement}
        />
      </div>

      <div className="w-full lg:w-full">
        <FontWidthTable
          measurements={measurements}
          fontFamily={selectedFont.family}
          fontWeight={selectedVariant.weight}
        />
      </div>
    </div>
  );
}