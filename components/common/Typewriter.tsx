import { useEffect, useRef } from "react";

const Typewriter = ({
  word,
  speed = 100,
}: {
  word: string;
  speed?: number;
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!spanRef.current) return;

    let currentIndex = 0;

    const animate = () => {
      if (!spanRef.current) return;
      spanRef.current.textContent = word.slice(0, currentIndex + 1);
      currentIndex += 1;
      if (currentIndex < word.length) {
        setTimeout(animate, speed);
      }
    };

    animate();
  }, [word, speed]);

  return <span ref={spanRef} className="text-cyan-500"></span>;
};

export default Typewriter;
