import Image from "next/image";
import { Banner, Quote } from "../_components";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 py-24">
      <Banner />
      <Quote
        content="With great power comes great electricity bill"
        author="Dr. Who"
      />
    </main>
  );
}
