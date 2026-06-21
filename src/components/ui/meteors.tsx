"use client";

import { useEffect, useState } from "react";

type MeteorData = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

export const Meteors = ({ number = 20 }: { number?: number }) => {
  const [meteors, setMeteors] = useState<MeteorData[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, () => ({
        left: Math.floor(Math.random() * 800 - 400) + "px",
        animationDelay: (Math.random() * 0.8 + 0.1).toFixed(3) + "s",
        animationDuration: Math.floor(Math.random() * 8 + 3) + "s",
      }))
    );
  }, [number]);

  return (
    <>
      {meteors.map((m, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: m.left,
            width: "1px",
            height: "1px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.07)",
            transform: "rotate(215deg)",
            animation: `meteor ${m.animationDuration} linear ${m.animationDelay} infinite`,
          }}
        >
          {/* Schweif */}
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              width: "80px",
              height: "1px",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.6), transparent)",
            }}
          />
        </span>
      ))}
    </>
  );
};
