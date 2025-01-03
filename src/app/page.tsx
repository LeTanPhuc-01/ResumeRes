import { Hero } from "home/Hero";
import { Steps } from "home/Steps";
import { Features } from "home/Features";
import { Testimonials } from "home/Testimonials";
import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";
import {Footer} from "home/Footer";

export default function Home() {
  return (
    <body className="min-h-screen flex flex-col">
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12">
      <Hero />
      <section className="mt-8" id="features-section">
        <Features />
      </section>
      
    </main>
    <Footer />
    </body>
  );
}
