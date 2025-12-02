import { Loader } from "lucide-react";

interface Props {
  loadingText?: string;
  hideIcon?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}
const LoadingState = ({ loadingText, hideIcon, size, className }: Props) => {
  return (
    <>
      {!hideIcon && (
        <Loader
          className={`animate-spin ${
            size === "sm"
              ? "h-4 w-4"
              : size === "md"
              ? "h-5 w-5"
              : size === "lg"
              ? "h-6 w-6"
              : "h-5 w-5"
          } ${className || ""}`}
        />
      )}
      {loadingText && <span>{loadingText}</span>}
    </>
  );
};

export default LoadingState;
