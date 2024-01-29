import React from "react";
import "./App.css";
import About from "./componets/About";
import Home from "./componets/Home";
import Contact from "./componets/Contact";
import Experience from "./componets/Experience"
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Portfolio from "./componets/Portfolio";
import Service from "./componets/Service";
import Weather from "./componets/Weather";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>



     
    </div>
  );
}
