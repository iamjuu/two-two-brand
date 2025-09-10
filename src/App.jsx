import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/couter";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import QRConnect from "./components/QRConnect";
import Footer from "./components/Footer";
import { AnimatedTestimonialsDemo } from "./components/acternity/card"
import { CometCardDemo } from "./components/3dcard";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <main>
              <div className="   " id="home">
                <Home />
              </div>

              <div className="   pt-[25px] md:pt-[100px]" id="about">
                <About />
              </div>

              <div className="   pt-[25px] md:pt-[100px]" id="blog">
                <Blogs />
              </div>
              <div className="   pt-[25px] md:pt-[100px]">
                <AnimatedTestimonialsDemo/>
              </div>

              <div className="   pt-[25px] md:pt-[100px]" id="services">
                <Services />
              </div>
              <div className="   pt-[25px] md:pt-[100px]">
                <Counter />
              </div>

              <div  className="   pt-[25px] md:pt-[100px]" id="doctors">
                <Doctors />
              </div>
              {/* <div className="flex flex-wrap justify-center gap-5 p-4">
                <CometCardDemo/>
                <CometCardDemo/>
                <CometCardDemo/>
                  <CometCardDemo/>
              </div>
               */}

           
            </main>
          } />
          <Route path="/qr-connect" element={<QRConnect />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
