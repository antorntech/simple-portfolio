import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <>
      {/* <-- Start Navbar --> */}
      <nav className="navbar navbar-expand-lg">
        <Navbar />
      </nav>
      {/* <!-- End Navbar --> */}

      {/* <!-- Start Header --> */}
      <header
        className="header valign bg-img"
        data-scroll-index="0"
        data-overlay-dark="6"
        data-background="img/bg.jpg"
        data-stellar-background-ratio="0.5"
      >
        <Header />
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- Start Hero --> */}
      <section className="hero section-padding" data-scroll-index="1">
        <Hero />
      </section>
      {/* <!-- End Hero --> */}

      {/* <!-- Start Services --> */}
      <section
        className="services section-padding bg-gray"
        data-scroll-index="2"
      >
        <Services />
      </section>
      {/* <!-- End Services --> */}

      {/* <!-- Start Portfolio --> */}
      <section className="portfolio section-padding" data-scroll-index="3">
        <Portfolio />
      </section>
      {/* <!-- End Portfolio --> */}

      {/* <!-- Start Blog --> */}
      <section className="blog section-padding bg-gray" data-scroll-index="4">
        <Blog />
      </section>
      {/* <!-- End Blog --> */}

      {/* <!-- Start Contact --> */}
      <section className="contact section-padding" data-scroll-index="5">
        <Contact />
      </section>
      {/* <!-- End Contact --> */}

      {/* <!-- Start Footer --> */}
      <footer className="text-center">
        <Footer />
      </footer>
      {/* <!-- End Footer  --> */}
    </>
  );
}

export default App;
