"use client";

import * as React from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: "square" | "round";
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = "round",
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));

  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${
    size * 1.25
  }`;

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-90deg)" }}
        className="relative"
      >
        {/* Base Circle */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          className={cn("stroke-primary/25", className)}
        />

        {/* Progress */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
          strokeLinecap={shape}
          strokeDashoffset={percentage}
          fill="transparent"
          strokeDasharray={circumference}
          className={cn(
            "stroke-teal-500 transition-all duration-300",
            progressClassName
          )}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-md text-teal-500",
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export default function CircularProgressAutoAnimate() {
  const t = useTranslations("home.projects");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const targetValue = 100; // il valore finale che vuoi animare
  const [progress, setProgress] = React.useState(0);

  // Animazione fluida
  React.useEffect(() => {
    if (!inView) return;

    let start: number | null = null;
    let frameId: number;

    const duration = 1000; // 1s di animazione

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;

      const progressTime = timestamp - start;
      const percentage = Math.min(progressTime / duration, 1);

      setProgress(Math.floor(percentage * targetValue));

      if (percentage < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-center py-20"
    >
      <div className="flex flex-col items-center font-semibold">
        <CircularProgress
          value={progress}
          size={120}
          strokeWidth={10}
          showLabel
          labelClassName="text-xl font-bold"
          renderLabel={(p) => `${p}%`}
        />
        <p>{t("performance")}</p>
      </div>
      <div className="flex flex-col items-center font-semibold">
        <CircularProgress
          value={progress}
          size={120}
          strokeWidth={10}
          showLabel
          labelClassName="text-xl font-bold"
          renderLabel={(p) => `${p}%`}
        />
        <p>{t("accessibility")}</p>
      </div>
      <div className="flex flex-col items-center font-semibold">
        <CircularProgress
          value={progress}
          size={120}
          strokeWidth={10}
          showLabel
          labelClassName="text-xl font-bold"
          renderLabel={(p) => `${p}%`}
        />
        <p>{t("usability")}</p>
      </div>
      <div className="flex flex-col items-center font-semibold">
        <CircularProgress
          value={progress}
          size={120}
          strokeWidth={10}
          showLabel
          labelClassName="text-xl font-bold"
          renderLabel={(p) => `${p}%`}
        />
        <p>{t("seo")}</p>
      </div>
    </div>
  );
}
