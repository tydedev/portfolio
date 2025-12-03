import { ImageResponse } from "next/og";
export const runtime = "nodejs";

const baseUrl = process.env.VERCEL_URL
  ? `https://tydedev.vercel.app`
  : "http://localhost:3000";

export default async function OpenGraphImage() {
  // Leggi il font come buffer
  const interBold = await fetch(`${baseUrl}/fonts/Inter-Bold.ttf`).then((r) =>
    r.arrayBuffer()
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
          backgroundColor: "#0f172a",
          color: "white",
        }}
      >
        <picture>
          <img
            src={`${baseUrl}/images/logo_icon.svg`}
            alt="Logo"
            width={100}
            height={170}
            style={{ marginBottom: 32 }}
          />
        </picture>
        <h1 style={{ fontSize: 64, fontWeight: 700 }}>Tydedev</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
