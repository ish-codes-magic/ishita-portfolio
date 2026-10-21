import { ImageResponse } from "next/og";

import { USER } from "@/data/user";

export const alt = `${USER.displayName} — ${USER.headline}`;
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
          background: "#fdfaff",
          color: "#2f2238",
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
              background: "#7c4d9a",
              color: "#fffaff",
              fontSize: 34,
            }}
          >
            ip.
          </div>
          <div style={{ fontSize: 30 }}>{USER.displayName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, letterSpacing: -2, lineHeight: 1.1 }}>
            Building AI systems.
          </div>
          <div
            style={{
              fontSize: 48,
              letterSpacing: -1,
              lineHeight: 1.1,
              marginTop: 16,
              color: "#7c4d9a",
            }}
          >
            Studying how to make them safer.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#716279" }}>
            AI engineering · AI safety research · Agent security
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#716279" }}>
          {new URL(USER.website).hostname}
        </div>
      </div>
    ),
    size
  );
}
