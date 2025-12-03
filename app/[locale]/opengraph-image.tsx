import localFont from "next/font/local";
import { ImageResponse } from "next/og";

// Load font via next/font/local
const interBold = localFont({
  src: "./public/assets/fonts/Inter-Bold.ttf",
  weight: "700",
  style: "normal",
});

export const alt = "About Acme";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: interBold.style.fontFamily,
        }}
      >
        About Acme
      </div>
    ),
    {
      ...size,
    }
  );
}
