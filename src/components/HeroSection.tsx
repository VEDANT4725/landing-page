    import React from 'react';
    import {
      motion
    } from 'framer-motion';
    import {
      Button
    } from './ui/Button';
    import Container from './shared/Container';
    import {
      ChevronRight
    } from 'lucide-react';

    const HeroSection: React.FC = () => {
      const staggerVariants = {
        hidden: {
          opacity: 0
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
          }
        },
      };

      const itemVariants = {
        hidden: {
          opacity: 0,
          y: 20
        },
        visible: {
          opacity: 1,
          y: 0
        },
      };

      return ( <
        section className = "relative bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden py-16 sm:py-24 lg:py-32" >
        <
        Container className = "relative z-10" >
        <
        div className = "lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center" >
        <
        div className = "lg:col-span-7 text-center lg:text-left" >
        <
        motion.div variants = {
          staggerVariants
        }
        initial = "hidden"
        animate = "visible" >
        <
        motion.a href = "#admissions"
        variants = {
          itemVariants
        }
        className = "inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700 hover:bg-indigo-200 transition-colors" >
        <
        span className = "uppercase" > Admissions Open for Fall 2024 < /span> <
        ChevronRight className = "ml-1 h-4 w-4" / >
        <
        /motion.a> <
        motion.h1 variants = {
          itemVariants
        }
        className = "mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight" >
        Your Future Starts <
        span className = "block text-indigo-600" > Here at UniVerse. < /span> <
        /motion.h1> <
        motion.p variants = {
          itemVariants
        }
        className = "mt-6 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0" >
        Discover endless possibilities, world-class education, and a vibrant community that empowers you to achieve your dreams. <
        /motion.p> <
        motion.div variants = {
          itemVariants
        }
        className = "mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" >
        <
        Button size = "lg"
        className = "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg transition-all transform hover:-translate-y-1" >
        Explore Programs <
        /Button> <
        Button size = "lg"
        variant = "outline"
        className = "border-indigo-300 text-indigo-700 hover:bg-indigo-50 hover:border-indigo-400 transition-all transform hover:-translate-y-1" >
        Take a Virtual Tour <
        /Button> <
        /motion.div> <
        /motion.div> <
        /div> <
        div className = "mt-16 lg:mt-0 lg:col-span-5" >
        <
        motion.div initial = {
          {
            opacity: 0,
            scale: 0.9
          }
        }
        animate = {
          {
            opacity: 1,
            scale: 1
          }
        }
        transition = {
          {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.5
          }
        }
        className = "relative aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-indigo-200" >
        <
        img src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt = "Students walking on campus"
        className = "w-full h-full object-cover" /
        >
        <
        div className = "absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" > < /div> <
        /motion.div> <
        /div> <
        /div> <
        /Container> <
        /section>
      );
    };

    export default HeroSection;