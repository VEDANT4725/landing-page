    import React from 'react';
    import Container from './shared/Container';
    import {
      motion
    } from 'framer-motion';
    import {
      Quote
    } from 'lucide-react';

    interface Testimonial {
      quote: string;
      author: string;
      title: string;
      image: string;
    }

    const testimonials: Testimonial[] = [{
      quote: "UniVerse University transformed my perspective and provided me with the tools to excel in my career. The faculty mentorship was invaluable.",
      author: "Dr. Anya Sharma",
      title: "Alumna, Computer Science",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, {
      quote: "The campus life is incredibly vibrant, and the diverse community made me feel at home. I built lifelong friendships and discovered new passions.",
      author: "Michael Chen",
      title: "Current Student, Business Administration",
      image: "https://images.unsplash.com/photo-1507003211169-e695bc35bd0e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, {
      quote: "The research opportunities at UniVerse are unparalleled. I was able to work on groundbreaking projects that truly made a difference.",
      author: "Sarah Kim",
      title: "Graduate, Biomedical Engineering",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, ];

    const TestimonialsSection: React.FC = () => {
      const cardVariants = {
        hidden: {
          opacity: 0,
          y: 50
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        },
      };

      return ( <
        section id = "testimonials"
        className = "py-16 sm:py-24 bg-purple-50" >
        <
        Container >
        <
        div className = "text-center mb-16" >
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
        className = "text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-4xl" >
        What Our Students Say <
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
        className = "mt-4 text-xl text-gray-600 max-w-3xl mx-auto" >
        Hear directly from the voices of our vibrant community about their experiences at UniVerse. <
        /motion.p> <
        /div> <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > {
          testimonials.map((testimonial, index) => ( <
            motion.div key = {
              index
            }
            variants = {
              cardVariants
            }
            initial = "hidden"
            whileInView = "visible"
            viewport = {
              {
                once: true,
                amount: 0.3
              }
            }
            transition = {
              {
                delay: index * 0.15
              }
            }
            className = "bg-white p-8 rounded-xl shadow-lg border border-purple-100 flex flex-col justify-between" >
            <
            Quote className = "h-8 w-8 text-purple-400 mb-6" / >
            <
            p className = "text-lg text-gray-700 leading-relaxed italic flex-grow" > "{
              testimonial.quote
            }" < /p> <
            div className = "flex items-center mt-8" >
            <
            img src = {
              testimonial.image
            }
            alt = {
              testimonial.author
            }
            className = "h-12 w-12 rounded-full object-cover mr-4 ring-2 ring-purple-300" /
            >
            <
            div >
            <
            p className = "font-semibold text-gray-900" > {
              testimonial.author
            } < /p> <
            p className = "text-sm text-gray-500" > {
              testimonial.title
            } < /p> <
            /div> <
            /div> <
            /motion.div>
          ))
        } <
        /div> <
        /Container> <
        /section>
      );
    };

    export default TestimonialsSection;