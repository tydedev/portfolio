"use client";

import { useEffect, useState } from "react";

const Flashlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const size = 100;

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX - size / 2,
        y: event.clientY - size / 2,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="hidden md:fixed rounded-full w-[100px] h-[100px] bg-cyan-700/40 pointer-events-none blur-2xl mix-blend-screen"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Flashlight;
