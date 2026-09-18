"use client";

import React, { useState, useEffect } from "react";

export default function LiveClock({ initialTime = "" }: { initialTime?: string }) {
  const [time, setTime] = useState(initialTime || "--:--:--");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
