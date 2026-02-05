import BestSellerSection from "@/src/components/BestSellerSection";
import AllBooks from "@/src/components/AllBooks";
import { Suspense } from "react";
import Presentation from "@/src/components/Presentation";
import Spinner from "@/src/components/common/Spinner";

// Page with Partial Prerendering
export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* Static content  - Using Static Shell and is pre-rendered */}
      <Presentation />

      {/* Cached content - Cached for the lifetime inside the component */}
      <BestSellerSection />

      {/* Dynamic content - Revalidated on every request */}
      <Suspense fallback={<Spinner />}>
        <AllBooks />
      </Suspense>
    </div>
  );
}
