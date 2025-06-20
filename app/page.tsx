"use client";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen";
import { WalletData } from "./interfaces/walletData";
import { Footer } from "./components/footer";
import { WalletDetails } from "./components/walletDetails";
import { Description } from "./components/description";
import { Header } from "./components/header";
import styles from "./Home.module.css";

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
        <div className={styles.container}>
            <Header />
            <Description />
            {walletData && <WalletDetails walletData={walletData} />}
            <Footer />
        </div>
    );
}
