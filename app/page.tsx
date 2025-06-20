"use client";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import { WalletData } from "./interfaces/walletData";
import { Footer } from "./components/footer";
import { WalletDetails } from "./components/walletDetails";
import { Description } from "./components/description";
import { Header } from "./components/header";

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
            <Header />
            <Description />
            {/* <WalletAddressInput onAddressSubmit={handleAddressSubmit} currentAddress={walletAddress} /> */}
            {walletData && <WalletDetails walletData={walletData} />}
            <Footer />
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                input:focus {
                    border-color: #ffd900;
                    box-shadow: 0 0 10px rgba(255, 217, 0, 0.3);
                }
                button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(255, 217, 0, 0.3);
                }
            `}</style>
        </div>
    );
}
