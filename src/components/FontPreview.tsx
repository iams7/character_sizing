import React from 'react';

interface FontPreviewProps {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  sampleText: string;
}

export const FontPreview: React.FC<FontPreviewProps> = ({ fontFamily, fontWeight, fontSize, sampleText }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div
        style={{
          fontFamily,
          fontWeight,
          fontSize: `${fontSize}px`,
          color: 'black',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        {sampleText}
      </div>
    </div>
  );
};
