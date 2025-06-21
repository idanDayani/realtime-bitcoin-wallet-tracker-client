"use client";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import { WalletData } from "./interfaces/walletData";
import { Footer } from "./components/footer";
import { WalletDetails } from "./components/walletDetails";
import { Description } from "./components/description";
import { Header } from "./components/header";
import styles from "./Home.module.css";
import RateLimitErrorDescription from "./components/rateLimitErrorDescription";

export default function Home() {
    const [walletData, setWalletData] = useState<WalletData | null>(null);
    const [isRateLimitError, setIsRateLimitError] = useState(false);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            console.log("WebSocket connected!");
        };

        ws.onmessage = event => {
            const data = JSON.parse(event.data);
            console.log("Received wallet event via WebSocket", { data });
            if (data.isRateLimitError) {
                setIsRateLimitError(true);
            } else {
                setIsRateLimitError(false);
                setWalletData(data);
            }
        };

        ws.onerror = err => {
            console.error("WebSocket error:", err);
        };

        return () => ws.close();
    }, []);

    if (!walletData && !isRateLimitError) {
        return <LoadingScreen />;
    }

    return (
        <div className={styles.container}>
            <Header />
            <Description />
            {isRateLimitError && <RateLimitErrorDescription />}
            {walletData && <WalletDetails walletData={walletData} />}
            <Footer />
        </div>
    );
}
