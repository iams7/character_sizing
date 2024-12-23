import { FontOption, FontVariant } from '../types/fonts';

interface FontSelectProps {
  fonts: FontOption[];
  selectedFont: FontOption;
  selectedVariant: FontVariant;
  selectedFontSize: number;
  onFontChange: (font: FontOption) => void;
  onVariantChange: (variant: FontVariant) => void;
  onFontSizeChange: (size: number) => void;
}

export function FontSelect({
  fonts,
  selectedFont,
  selectedVariant,
  selectedFontSize,
  onFontChange,
  onVariantChange,
  onFontSizeChange
}: FontSelectProps) {
  return (
    <div className="flex gap-4">
      <div>
        <label htmlFor="fontFamily" className="block text-sm font-medium text-gray-700 mb-2">
          Font Family:
        </label>
        <select
          id="fontFamily"
          value={selectedFont.name}
          onChange={(e) => {
            const font = fonts.find(f => f.name === e.target.value);
            if (font) onFontChange(font);
          }}
          className="w-48 px-3 py-2 border border-gray-300 rounded-md"
        >
          {fonts.map(font => (
            <option key={font.name} value={font.name}>
              {font.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="fontVariant" className="block text-sm font-medium text-gray-700 mb-2">
          Font Weight:
        </label>
        <select
          id="fontVariant"
          value={selectedVariant.weight}
          onChange={(e) => {
            const variant = selectedFont.variants.find(v => v.weight === Number(e.target.value));
            if (variant) onVariantChange(variant);
          }}
          className="w-48 px-3 py-2 border border-gray-300 rounded-md"
        >
          {selectedFont.variants.map(variant => (
            <option key={variant.weight} value={variant.weight}>
              {variant.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 mb-2">
          Font Size (px):
        </label>
        <input
          type="number"
          id="fontSize"
          value={selectedFontSize}
          onChange={(e) => onFontSizeChange(Number(e.target.value))}
          className="w-24 px-3 py-2 border border-gray-300 rounded-md"
          min="7"
          max="72"
        />
      </div>
    </div>
  );
}