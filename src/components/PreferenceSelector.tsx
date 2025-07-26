'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const preferenceRows = [
  ['Finance', 'Entertainment', 'Lifestyle', 'Art', 'Food'],
  ['Travel', 'Sports', 'Fashion', 'Technology'],
  ['Science', 'Game', 'Books', 'Hike', 'Media'],
];

export const PreferenceSelector = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const togglePreference = (pref: string) => {
    setSelected((prev) =>
      prev.includes(pref)
        ? prev.filter((p) => p !== pref)
        : [...prev, pref]
    );
  };

  const isSelected = (pref: string) => selected.includes(pref);

  return (
    <div
      className="bg-white rounded-xl p-6 flex flex-col items-center justify-between"
      style={{
        width: '475px',
        height: '350px',
      }}
    >
      {/* Heading */}
      <h2
        className="text-center text-[#1C1C1C]"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '150%',
          letterSpacing: '2.5%',
        }}
      >
        Choose your preferences
      </h2>

      {/* Preference Rows */}
      <div className="flex flex-col items-center gap-4 my-4">
        {preferenceRows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {row.map((pref) => (
              <div
                key={pref}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Checkbox
                  id={pref}
                  checked={isSelected(pref)}
                  onCheckedChange={() => togglePreference(pref)}
                  className="border-gray-400 data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-50 data-[state=checked]:text-purple-600"
                />
                <Label
                  htmlFor={pref}
                  className={`text-sm text-gray-700`}
                >
                  {pref}
                </Label>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        className="bg-primary text-white w-[296px] h-[48px] rounded-lg text-sm font-medium hover:bg-purple-700 transition"
        onClick={() => alert(`Saved: ${selected.join(', ')}`)}
      >
        Save Preferences
      </button>
    </div>
  );
};
