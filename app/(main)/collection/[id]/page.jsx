import React, { Suspense } from "react";
import CollectionDetails from "@/app/(main)/_components/CollectionDetails";
import Testimonials from "@/components/common/Testimonials";
import CTA from "@/components/common/CTA";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const idOrSlug = resolvedParams?.id;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://backend.cremainformatica.it/api/v1";
    const res = await fetch(`${baseUrl}/product-conditions/${idOrSlug}`, { cache: "no-store" });
    const json = await res.json();
    if (json?.data) {
      const p = json.data;
      return {
        title: `${p.name} | CREMA INFORMATICA`,
        description: p.short_description || `Acquista ${p.name} ricondizionato certificato con garanzia 1 anno e controllo qualità.`,
        openGraph: {
          title: `${p.name} | Ricondizionato Certificato`,
          description: p.short_description,
          images: p.thumbnail ? [p.thumbnail] : [],
        },
      };
    }
  } catch (err) {
    // Fallback if API fails during SSR
  }

  return {
    title: "Dettagli Articolo Collezione | CREMA INFORMATICA",
    description: "Visualizza specifiche complete, rapporto sulle condizioni e dettagli della garanzia per dispositivi ricondizionati certificati.",
  };
}


export default function CollectionItemPage() {
  return (
    <div className="pt-[80px]">
      <Suspense
        fallback={
          <div className="w-full section-padding-x py-12 animate-pulse">
            <div className="h-6 bg-white/10 rounded w-32 mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 h-[400px] bg-white/5 rounded-3xl" />
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="h-6 bg-white/10 rounded w-1/3" />
                <div className="h-10 bg-white/10 rounded w-3/4" />
                <div className="h-20 bg-white/5 rounded w-full" />
                <div className="h-12 bg-white/10 rounded w-full mt-6" />
              </div>
            </div>
          </div>
        }
      >
        <CollectionDetails />
      </Suspense>
      <Testimonials />
      <CTA />
    </div>
  );
}
