// src/App.jsx
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WhyMindery from "./Components/WhyMindery";
import Programs from "./Components/Programs";
import BuiltForKids from "./Components/BuiltForKids";
import Pricing from "./Components/Pricing";
import ParentTeacherHub from "./Components/ParentTeacherHub";
import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";
import PopupForm from "./Components/PopupForm";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <>
      {/* pass the same handler under both names so all components work */}
      <Navbar onStartTrial={openForm} onOpenForm={openForm} />
      <div className="pt-16">
        <Hero onStartTrial={openForm} onOpenForm={openForm} />
        <WhyMindery />
        <Programs />
        <BuiltForKids />
        <Pricing onStartTrial={openForm} onOpenForm={openForm} />
        <ParentTeacherHub />
        <Testimonials />
        <CTA onStartTrial={openForm} onOpenForm={openForm} />
        <Footer />
      </div>

      <PopupForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
}

export default App;
