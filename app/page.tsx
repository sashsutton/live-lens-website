import Header from "../components/Header";
import Hero from "../components/Hero";
import Process from "../components/Process";
import WhyData from "../components/WhyData";
import B2B from "../components/B2B";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <WhyData />
        <B2B />
      </main>
      <Footer />
    </>
  );
}
