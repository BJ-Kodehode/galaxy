"use client";

import { Suspense } from "react";
import StarsContent from "./StarsContent";

export default function StarsPage() {
  return (
    <Suspense fallback={<div>Laster stjernesiden...</div>}>
      <StarsContent />
    </Suspense>
  );
}
