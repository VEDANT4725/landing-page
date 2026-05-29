    import React from 'react';
    import Container from './shared/Container';
    import {
      motion
    } from 'framer-motion';
    import {
      BookOpen,
      Atom,
      Briefcase,
      Palette
    } from 'lucide-react';
    import {
      Button
    } from './ui/Button';

    const programs = [{
      icon: BookOpen,
      title: 'Liberal Arts',
      description: 'Explore humanities, social sciences, and arts for a broad understanding.'
    }, {
      icon: Atom,
      title: 'STEM Fields',
      description: 'Innovate in science, technology, engineering, and mathematics.'
    }, {
      icon: Briefcase,
      title: 'Business & Economics',
      description: 'Prepare for leadership roles in global markets and financial sectors.'
    }, {
      icon: Palette,
      title: 'Fine Arts & Design',
      description: 'Cultivate creativity and technical skills in various artistic disciplines.'
    }, ];

    const ProgramsSection: React.FC = () => {
      const cardVariants = {
        hidden: {
          opacity: 0,
          y: 50
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        },
      };

      return ( <
        section id = "academics"
        className = "py-16 sm:py-24 bg-gradient-to-br from-white to-indigo-50" >
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
        Our Academic Programs <
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
        From foundational studies to cutting-edge research, we offer a diverse range of programs designed to equip you for success. <
        /motion.p> <
        /div> <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" > {
          programs.map((program, index) => ( <
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
            className = "bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-indigo-100" >
            <
            div className = "p-4 bg-indigo-500 rounded-full text-white mb-6 transform hover:scale-110 transition-transform duration-300" >
            <
            program.icon className = "h-8 w-8" / >
            <
            /div> <
            h3 className = "text-2xl font-bold text-gray-900 mb-3" > {
              program.title
            } < /h3> <
            p className = "text-gray-600 text-base flex-grow" > {
              program.description
            } < /p> <
            Button variant = "link"
            className = "mt-6 text-indigo-600 hover:text-indigo-700 hover:underline" >
            Learn More <
            /Button> <
            /motion.div>
          ))
        } <
        /div> <
        div className = "mt-16 text-center" >
        <
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
        } >
        <
        Button size = "lg"
        className = "bg-purple-600 hover:bg-purple-700 text-white shadow-lg" >
        View All Programs <
        /Button> <
        /motion.div> <
        /div> <
        /Container> <
        /section>
      );
    };

    export default ProgramsSection;