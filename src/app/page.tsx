import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Jobs } from "@/components/Jobs";
import { Housing } from "@/components/Housing";
import { Marketplace } from "@/components/Marketplace";
import { Services } from "@/components/Services";
import { Countries } from "@/components/Countries";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Jobs />
      <Housing />
      <Marketplace />
      <Services />
      <Countries />
    </>
  );
}