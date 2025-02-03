import { Features } from "./compoents/features";
import { Footer } from "./compoents/footer";
import { Hero } from "./compoents/hero";
import { Navbar } from "./compoents/navbar";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}