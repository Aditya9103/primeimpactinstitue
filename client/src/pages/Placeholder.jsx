import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
      <p className="text-text-secondary max-w-lg text-lg">
        This page is currently under construction. We will build it soon!
      </p>
    </div>
  );
}
