import { useState } from "react";

export default function POS() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item.trim() === "") return;
    setCart([...cart, item]);
    setItem("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <h1>🛒 POS System</h1>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}