import { WalletData as WalletDataInterface } from "../interfaces/walletData";

export function WalletDetails({ walletData }: { walletData: WalletDataInterface }) {
    return (
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
                paddingTop: 60,
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
    );
}
