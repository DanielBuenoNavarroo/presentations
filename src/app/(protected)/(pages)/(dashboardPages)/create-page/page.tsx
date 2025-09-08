import React, { Suspense } from "react";
import CreatePageSkeleton from "./_components/CreatePage/skeleton";
import RenderPage from "./_components/RenderPage";

const Page = () => {
  return (
    <main className="w-full h-full pt-6 overflow-hidden">
      <Suspense fallback={<CreatePageSkeleton />}>
        <RenderPage />
      </Suspense>
    </main>
  );
};

export default Page;
