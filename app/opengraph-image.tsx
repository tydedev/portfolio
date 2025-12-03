// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export default async function Image() {
  const interBold = await readFile(
    join(process.cwd(), "assets/fonts/Inter-Bold.ttf")
  );
  const logoSvg = await readFile(join(process.cwd(), "assets/images/logo.svg"));

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "Inter",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0f172a",
          color: "white",
          flexDirection: "column",
        }}
      >
        <picture>
          <img
            src={`data:image/svg+xml;base64,${Buffer.from(logoSvg).toString(
              "base64"
            )}`}
            alt="Logo"
            width={80}
            height={150}
          />
        </picture>
        <h1 style={{ fontSize: 64, marginTop: 32 }}>Tydedev</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
