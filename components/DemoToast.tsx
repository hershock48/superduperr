"use client";

import { useState } from "react";

export function useToast() {
  const [msg, setMsg] = useState<string | null>(null);
  const show = (m: string) => {
    setMsg(m);
    setTimeout(() => setMsg(null), 2600);
  };
  const node = msg ? <div className="toast">{msg}</div> : null;
  return { show, node };
}

export default function DemoButton({
  label,
  toast,
  className = "btn primary",
}: {
  label: string;
  toast: string;
  className?: string;
}) {
  const { show, node } = useToast();
  return (
    <>
      <button className={className} onClick={() => show(toast)}>
        {label}
      </button>
      {node}
    </>
  );
}
