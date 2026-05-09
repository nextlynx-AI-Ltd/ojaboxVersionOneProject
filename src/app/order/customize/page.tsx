import { Suspense } from "react";

import Customise from "./Customise";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="container py-20 text-center">Loading...</div>}
    >
      <Customise />
    </Suspense>
  );
}
