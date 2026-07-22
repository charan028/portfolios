import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sai Charan Merugu — AI & UX Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: 80,
                    backgroundColor: "#ece3cf",
                    color: "#26211a",
                    fontFamily: "serif",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 60,
                        right: 80,
                        display: "flex",
                        fontSize: 28,
                        color: "#8a8070",
                        letterSpacing: 6,
                    }}
                >
                    缘分 · PORTFOLIO
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 60,
                        left: 80,
                        width: 90,
                        height: 90,
                        borderRadius: 999,
                        backgroundColor: "#9c3b2e",
                        color: "#ece3cf",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 48,
                        fontWeight: 700,
                    }}
                >
                    C
                </div>
                <div style={{ display: "flex", fontSize: 96, lineHeight: 1 }}>
                    Sai Charan Merugu
                </div>
                <div
                    style={{
                        display: "flex",
                        marginTop: 28,
                        fontSize: 36,
                        color: "#5b5344",
                    }}
                >
                    AI &amp; UX Engineer — LLM systems, data platforms, immersive VR
                </div>
                <div
                    style={{
                        marginTop: 40,
                        width: 520,
                        height: 4,
                        backgroundColor: "#9c3b2e",
                        display: "flex",
                    }}
                />
            </div>
        ),
        size
    );
}
