import React, { useEffect, useState } from "react";

export default function Temperature() {
  const [temp, setTemp] = useState(10);
  const [color, setColor] = useState("#002fff");
  useEffect(() => {
    let r = temp * 10;
    let g = 255 - Math.floor(255 * (Math.abs(temp - 127) / 128));
    let b = 255 - temp;
    const toHex = (a) => {
      let hex = a.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    const hexColor = "#" + toHex(r) + toHex(g) + toHex(b);
    setColor(hexColor);
  }, [temp]);
  return (
    <div className="mx-auto w-full text-center mt-44 ">
      <button
        onClick={() => setTemp(temp - 1)}
        className="px-6 py-2 rounded-lg bg-blue-500 "
      >
        -
      </button>
      <div className="relative inline-block">
        <label style={{ left: temp }} className="absolute -top-6">
          {temp}
        </label>
        <input
          type={"range"}
          onChange={(e) => setTemp(Number(e.target.value))}
          value={temp}
        />
      </div>
      <button
        onClick={() => setTemp(temp + 1)}
        className="px-6 py-2 rounded-lg bg-red-500"
      >
        +
      </button>
    </div>
  );
}
