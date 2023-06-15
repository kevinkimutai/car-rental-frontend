import { Banner, Cars, Footer } from "@/components";
import { GETCARDATAAPI } from "../utils/api/api";
import { useEffect, useState } from "react";

export default async function Home({ searchParams }: any) {
  const { make, model, fuel, limit } = searchParams;

  const carData = await GETCARDATAAPI(
    make || "audi",
    model || "",
    fuel || "gas",
    limit || 10,
    2022
  );

  return (
    <main className="h-screen">
      <Banner />
      <Cars data={carData} />
      <Footer />
    </main>
  );
}
