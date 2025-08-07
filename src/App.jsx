import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import SelectedProjects from './components/SelectedProjects';
import IntroSection from './components/IntroSection';
import PlaygroundSection from './components/PlaygroundSection';
import BlogSection from './components/BlogSection';
import Loader from "./components/Loader";
import Footer from "./components/Footer"; // ✅ Import Footer

function App() {
  return (
    <div className="bg-[#FCFAF8] p-[30px]">
      <Loader />
      <Header />
      <Hero />
      <SelectedProjects />
      <IntroSection />
      <PlaygroundSection />
      <BlogSection />
      <Footer /> {/* ✅ Footer added here */}
    </div>
  );
}

export default App;
