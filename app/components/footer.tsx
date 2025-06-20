export function Footer() {
    return (
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
    );
}
