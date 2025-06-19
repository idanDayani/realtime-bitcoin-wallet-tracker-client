import { FaBitcoin } from "react-icons/fa";

export default function LoadingScreen() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
            }}
        >
            <div style={{ color: "#FFD700", fontSize: 32, fontWeight: 700, letterSpacing: 2 }}>
                <FaBitcoin style={{ fontSize: 60, marginBottom: 16, filter: "drop-shadow(0 2px 8px #FFD70088)" }} />
                Loading Bitcoin Wallet Data...
            </div>
        </div>
    );
}
