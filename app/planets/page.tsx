import { Suspense } from "react";
import PlanetsContent from "./PlanetsContent";

export default function PlanetsPage() {
  return (
    <Suspense fallback={<div>Laster planetsiden...</div>}>
      <PlanetsContent />
    </Suspense>
  );
}
