"use client";

import { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return { isScrolling, setIsScrolling };
};

export default useScroll;
