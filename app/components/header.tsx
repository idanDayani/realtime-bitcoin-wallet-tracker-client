import { FaBitcoin } from "react-icons/fa";

export function Header() {
    return (
        <header
            style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 18,
                padding: "32px 0 0 0",
                justifyContent: "center",
            }}
        >
            <FaBitcoin style={{ fontSize: 54, color: "#FFD700", filter: "drop-shadow(0 2px 16px #FFD70088)" }} />
            <span
                style={{
                    fontSize: 80,
                    fontWeight: 900,
                    letterSpacing: 2,
                    color: "#FFD700",
                    textShadow: "0 2px 12px #FFD70044",
                }}
            >
                Bitcoin Wallet Tracker
            </span>
        </header>
    );
}
