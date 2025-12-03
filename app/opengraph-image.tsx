import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import path from "node:path";

// Image metadata
export const alt = "Tydedev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Image({ params }: Props) {
  const interBold = await readFile(
    path.resolve(join(process.cwd(), "assets/fonts/Inter-Bold.ttf"))
  );
  const logoSvg = await readFile(
    path.resolve(join(process.cwd(), "assets/images/logo.svg"))
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "Inter",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0f172a", // slate-950
          color: "white",
        }}
      >
        <picture>
          <img
            src={`data:image/svg+xml;base64,${Buffer.from(logoSvg).toString(
              "base64"
            )}`}
            alt="Tydedev"
            width={80}
            height={150}
            style={{ marginBottom: 32 }}
          />
        </picture>
        <h1 style={{ fontSize: 64, margin: 0 }}>Tydedev</h1>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            borderRight: "4px solid white",
            paddingRight: "0.25rem",
            margin: "16px 0",
          }}
        >
          <span style={{ color: "#c026d3" }}>Design</span>
          <span style={{ display: "flex", gap: "-0.15rem" }}>+=</span>
          <span style={{ color: "#06b6d4" }}>Code</span>
        </h2>
        <div
          style={{
            display: "flex",
            gap: "12px",
            paddingTop: 24,
            textAlign: "center",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(59,130,246,0.11), rgba(59,130,246,0.05))",
              padding: "4px 12px",
              borderRadius: 6,
            }}
          >
            UI/UX
          </div>
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(59,130,246,0.11), rgba(59,130,246,0.05))",
              padding: "4px 12px",
              borderRadius: 6,
            }}
          >
            Web Development
          </div>
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(59,130,246,0.11), rgba(59,130,246,0.05))",
              padding: "4px 12px",
              borderRadius: 6,
            }}
          >
            Brand Identity
          </div>
        </div>
      </div>
    ),
    {
      ...size,
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
