import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link href="/">Home</Link> | <Link href="/pos">POS</Link>
    </nav>
  );
}