import { Banner, Cars, Footer } from "@/components";
import { GETCARDATAAPI } from "../utils/api/api";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

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
    <main className="h-full">
      <Nav />
      <Banner />
      <Cars data={carData} />
      <Footer />
    </main>
  );
}
