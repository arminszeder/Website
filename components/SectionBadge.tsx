import React from 'react';

interface SectionBadgeProps {
  label: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 mb-4">
      <span className="text-xs font-semibold tracking-wide text-brand-red uppercase">
        {label}
      </span>
    </div>
  );
};