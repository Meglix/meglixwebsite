"use client";

import { useState } from "react";

export default function GridOverlay({}) {
  return (
    <div className="fixed inset-0 w-screen h-screen grid grid-cols-6 grid-rows-6 pointer-events-none z-50">
      {Array.from({ length: 36 }, (_, i) => (
        <div key={i} className="border border-black w-full h-full"></div>
      ))}
    </div>
  );
}
