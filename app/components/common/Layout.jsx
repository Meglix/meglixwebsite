"use client";

import { useState } from "react";

export default function GridOverlay({}) {
  return (
    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none z-50">
      {Array.from({ length: 36 }, (_, i) => (
        <div key={i} className="border border-black "></div>
      ))}
    </div>
  );
}
