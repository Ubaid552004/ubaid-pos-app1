import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
      <h1>🚀 Ubaid POS App</h1>
      <p>Simple Point of Sale system built with Next.js</p>
      <Link href="/pos">
        <button style={{ padding: "10px 20px", marginTop: "20px", fontSize: "16px" }}>
          Open POS
        </button>
      </Link>
    </div>
  );
}