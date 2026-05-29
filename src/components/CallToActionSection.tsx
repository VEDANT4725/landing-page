    import React from 'react';
    import Container from './shared/Container';
    import {
      motion
    } from 'framer-motion';
    import {
      Button
    } from './ui/Button';

    const CallToActionSection: React.FC = () => {
      return ( <
        section className = "py-16 sm:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white" >
        <
        Container className = "text-center" >
        <
        motion.h2 initial = {
          {
            opacity: 0,
            y: 20
          }
        }
        whileInView = {
          {
            opacity: 1,
            y: 0
          }
        }
        viewport = {
          {
            once: true,
            amount: 0.5
          }
        }
        transition = {
          {
            duration: 0.6
          }
        }
        className = "text-4xl font-extrabold sm:text-5xl lg:text-4xl" >
        Ready to Join Our Community ?
        <
        /motion.h2> <
        motion.p initial = {
          {
            opacity: 0,
            y: 20
          }
        }
        whileInView = {
          {
            opacity: 1,
            y: 0
          }
        }
        viewport = {
          {
            once: true,
            amount: 0.5
          }
        }
        transition = {
          {
            duration: 0.6,
            delay: 0.2
          }
        }
        className = "mt-6 text-xl text-indigo-100 max-w-3xl mx-auto" >
        Take the next step towards a brighter future.Apply now and become part of a legacy of excellence and innovation. <
        /motion.p> <
        motion.div initial = {
          {
            opacity: 0,
            y: 20
          }
        }
        whileInView = {
          {
            opacity: 1,
            y: 0
          }
        }
        viewport = {
          {
            once: true,
            amount: 0.5
          }
        }
        transition = {
          {
            duration: 0.6,
            delay: 0.4
          }
        }
        className = "mt-10" >
        <
        Button size = "lg"
        className = "bg-white text-indigo-700 hover:bg-indigo-100 shadow-lg px-8 py-3 transform transition-all hover:scale-105" >
        Start Your Application <
        /Button> <
        /motion.div> <
        /Container> <
        /section>
      );
    };

    export default CallToActionSection;