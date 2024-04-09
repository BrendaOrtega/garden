import { useEffect, useState } from "react";

export default function (lightValue: any, darkValue: unknown) {
  const [isDark, set] = useState<boolean>(false);
  useEffect(() => {
    const value = document.body.classList.contains("dark");
    set(value);
  }, []);
  return isDark ? darkValue : lightValue;
}
