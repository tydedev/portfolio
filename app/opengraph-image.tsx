import CustomBadge from "@/components/ui/customBadge";
import { Equal, Plus } from "lucide-react";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Tydedev";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
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
        }}
      >
        <picture>
          <img
            src={`data:image/svg+xml;base64,${Buffer.from(logoSvg).toString(
              "base64"
            )}`}
            alt="Tydedev"
            width={150}
            height={150}
          />
        </picture>
        <h1 style={{ fontSize: 64 }}>Tydedev</h1>
        <h2 className="text-5xl md:text-7xl font-bold border-r-4 pr-1 animate-blink flex gap-x-3 items-baseline">
          <span className="text-fuchsia-500">Design</span>
          <span className="flex -space-x-1 mr-[0.15rem]">
            <Plus className="shrink-0 md:w-8 md:h-8" strokeWidth={4} />
            <Equal className="shrink-0 md:w-8 md:h-8" strokeWidth={4} />
          </span>
          <span className="text-cyan-500">Code</span>
        </h2>
        <div className="py-6 text-foreground space-x-2 text-center">
          <CustomBadge className="bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5">
            UI/UX
          </CustomBadge>
          <CustomBadge className="bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5">
            Web Development
          </CustomBadge>
          <CustomBadge className="bg-linear-to-t from-blue-700/11 to-blue-from-blue-700/5">
            Brand Identity
          </CustomBadge>
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
