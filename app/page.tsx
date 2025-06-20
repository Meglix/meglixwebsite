"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GridOverlay from "./components/common/Layout";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <GridOverlay />
      <img
        src="/images/womanfranz.png"
        alt="background"
        className="absolute h-[100vh] max-w-none object-contain object-center left-1/2 transform -translate-x-1/2 z-[-1]"
      />
    </div>
  );
}
