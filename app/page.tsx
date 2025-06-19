"use client";
import React, { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import LoadingScreen from "./components/loadingScreen";
import { WalletData } from "./interfaces/walletData";

export default function Home() {
    const [walletData, setWalletData] = useState<WalletData | null>(null);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            console.log("WebSocket connected!");
        };

        ws.onmessage = event => {
            setWalletData(JSON.parse(event.data));
        };

        ws.onerror = err => {
            console.error("WebSocket error:", err);
        };

        return () => ws.close();
    }, []);

    if (!walletData) {
        return <LoadingScreen />;
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                width: "100vw",
                background: "linear-gradient(120deg, #232526 0%, #414345 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: 100,
            }}
        >
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
            <div
                style={{
                    color: "#bbb",
                    fontSize: 26,
                    marginTop: 10,
                    marginBottom: 40,
                    textAlign: "center",
                    maxWidth: "50%",
                    fontWeight: 400,
                }}
            >
                <p>Real-time monitoring of your Bitcoin wallet.</p>
                <p>Instantly see your BTC balance, current price, and total value in USD.</p>
            </div>

            <section
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "stretch",
                    gap: 48,
                    width: "100%",
                    maxWidth: 1200,
                    paddingTop: 80,
                }}
            >
                <div style={{ minWidth: 220, textAlign: "center" }}>
                    <div style={{ color: "#FFD700", fontWeight: 700, fontSize: 20, letterSpacing: 1, marginBottom: 8 }}>Wallet</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>BTC</div>
                </div>
                <div style={{ minWidth: 220, textAlign: "center" }}>
                    <div style={{ color: "#FFD700", fontWeight: 700, fontSize: 20, letterSpacing: 1, marginBottom: 8 }}>Balance</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>{walletData.balanceBTC.toLocaleString(undefined, { minimumFractionDigits: 8, maximumFractionDigits: 8 })} BTC</div>
                </div>
                <div style={{ minWidth: 220, textAlign: "center" }}>
                    <div style={{ color: "#FFD700", fontWeight: 700, fontSize: 20, letterSpacing: 1, marginBottom: 8 }}>BTC/USD</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>${walletData.btcUsdPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                </div>
                <div style={{ minWidth: 220, textAlign: "center" }}>
                    <div style={{ color: "#FFD700", fontWeight: 700, fontSize: 20, letterSpacing: 1, marginBottom: 8 }}>Total Value</div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>${walletData.balanceUSD.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD</div>
                </div>
            </section>
            <footer
                style={{
                    color: "#888",
                    fontSize: 15,
                    marginTop: "auto",
                    marginBottom: 24,
                    textAlign: "center",
                    letterSpacing: 1,
                }}
            >
                <span style={{ color: "#FFD700", fontWeight: 600 }}>Live</span> updates via WebSocket. Powered by Bitcoin and CoinGecko APIs.
            </footer>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
