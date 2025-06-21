export default function RateLimitErrorDescription() {
    return (
        <div>
            <div
                style={{
                    color: "#FFD700",
                    fontSize: "clamp(1.5rem, 2vw, 1.2rem)",
                    fontWeight: 500,
                    letterSpacing: 2,
                    textAlign: "center",
                    padding: "2rem",
                    lineHeight: "1.6",
                }}
            >
                This app uses the Blockcypher API to track wallet balances in real-time.
                <br />
                Their service has a request limit, which means balance updates might take a temporary pause.
                <br />
                Don&apos;t worry, everything will be back to normal automatically.
            </div>
        </div>
    );
}
