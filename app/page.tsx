import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import OurService from "./Components/OurService";
import OurWork from "./Components/OurWork";
import Testimonials from "./Components/Testimonials";
import Faq from "./Components/Faq";
import Call from "./Components/call";
import Footer from "./Components/Footer";
// import Contact from "./Components/contact/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Cards />
      <OurService />
      <OurWork/>
      <Testimonials/>
      <Faq/>
      <Call/>
      <Footer/>
      {/* <Contact/> */}
    </div>
  );
}
