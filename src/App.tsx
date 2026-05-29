    import React from 'react';
    import Navbar from './components/Navbar';
    import HeroSection from './components/HeroSection';
    import AboutSection from './components/AboutSection';
    import ProgramsSection from './components/ProgramsSection';
    import TestimonialsSection from './components/TestimonialsSection';
    import CallToActionSection from './components/CallToActionSection';
    import Footer from './components/Footer';

    const App: React.FC = () => {
      return ( <
        div className = "font-sans antialiased bg-gray-50 text-gray-900" >
        <
        Navbar / >
        <
        main >
        <
        HeroSection / >
        <
        AboutSection / >
        <
        ProgramsSection / >
        <
        TestimonialsSection / >
        <
        CallToActionSection / >
        <
        /main> <
        Footer / >
        <
        /div>
      );
    };

    export default App;