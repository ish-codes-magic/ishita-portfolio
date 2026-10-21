import { ImageResponse } from "next/og";

import { USER } from "@/data/user";

export const alt = `${USER.displayName} — AI engineer and safety researcher`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: "#fafbf7",
          color: "#202e29",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 20,
              background: "#32634c",
              color: "#fafbf7",
              fontSize: 34,
            }}
          >
            ip.
          </div>
          <div style={{ fontSize: 30 }}>{USER.displayName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, letterSpacing: -3, lineHeight: 1.1 }}>
            Building AI
          </div>
          <div
            style={{
              fontSize: 76,
              letterSpacing: -3,
              lineHeight: 1.1,
              color: "#32634c",
            }}
          >
            you can trust.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#626f67" }}>
            AI engineering · Safety & alignment · Research
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#626f67" }}>
          {new URL(USER.website).hostname}
        </div>
      </div>
    ),
    size
  );
}
