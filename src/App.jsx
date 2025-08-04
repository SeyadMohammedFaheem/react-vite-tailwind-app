import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero'; // ✅ Import Hero
import SelectedProjects from './components/SelectedProjects';
import IntroSection from './components/IntroSection'; // ✅ Import IntroSection
import PlaygroundSection from './components/PlaygroundSection'; // ✅ Import PlaygroundSection
import BlogSection from './components/BlogSection'; // ✅ Import BlogSection
import Loader from "./components/Loader";

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
    </div>
  );
}

export default App;
