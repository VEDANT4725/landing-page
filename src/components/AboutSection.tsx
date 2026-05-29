    import React from 'react';
    import Container from './shared/Container';
    import {
      motion
    } from 'framer-motion';
    import {
      GraduationCap,
      Lightbulb,
      Users
    } from 'lucide-react';

    const featureItems = [{
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Rigorous programs, expert faculty, and a commitment to intellectual growth.'
    }, {
      icon: Lightbulb,
      title: 'Innovation & Research',
      description: 'Driving discovery through cutting-edge research and creative solutions.'
    }, {
      icon: Users,
      title: 'Vibrant Community',
      description: 'A diverse and inclusive environment where every student belongs.'
    }, ];

    const AboutSection: React.FC = () => {
      const itemVariants = {
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
        section id = "about"
        className = "py-16 sm:py-24 bg-white" >
        <
        Container >
        <
        div className = "lg:grid lg:grid-cols-2 lg:gap-12 items-center" >
        <
        motion.div initial = {
          {
            opacity: 0,
            x: -50
          }
        }
        whileInView = {
          {
            opacity: 1,
            x: 0
          }
        }
        viewport = {
          {
            once: true,
            amount: 0.3
          }
        }
        transition = {
          {
            duration: 0.8,
            ease: "easeOut"
          }
        }
        className = "relative mb-12 lg:mb-0" >
        <
        img src = "https://images.unsplash.com/photo-1628151016892-07a827599723?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt = "Campus building exterior"
        className = "rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[500px]" /
        >
        <
        div className = "absolute -bottom-8 -right-8 bg-indigo-600 p-6 rounded-3xl shadow-xl hidden md:block" >
        <
        p className = "text-white text-3xl font-bold" > 150 + < /p> <
        p className = "text-indigo-100 text-sm" > Years of Excellence < /p> <
        /div> <
        /motion.div> <
        div className = "text-center lg:text-left" >
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
            amount: 0.3
          }
        }
        transition = {
          {
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }
        }
        className = "text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-4xl" >
        About UniVerse University <
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
            amount: 0.3
          }
        }
        transition = {
          {
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut"
          }
        }
        className = "mt-6 text-lg text-gray-600 leading-relaxed" >
        UniVerse University has been a beacon of knowledge and innovation for over a century.We are dedicated to fostering a vibrant learning environment where students can thrive intellectually, personally, and professionally.Our commitment to research, community engagement, and student success sets us apart. <
        /motion.p> <
        div className = "mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8" > {
          featureItems.map((item, index) => ( <
            motion.div key = {
              index
            }
            variants = {
              itemVariants
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
                delay: 0.6 + index * 0.2
              }
            }
            className = "flex items-start text-left" >
            <
            div className = "flex-shrink-0" >
            <
            item.icon className = "h-8 w-8 text-indigo-600" / >
            <
            /div> <
            div className = "ml-4" >
            <
            h3 className = "text-xl font-semibold text-gray-900" > {
              item.title
            } < /h3> <
            p className = "mt-2 text-base text-gray-600" > {
              item.description
            } < /p> <
            /div> <
            /motion.div>
          ))
        } <
        /div> <
        /div> <
        /div> <
        /Container> <
        /section>
      );
    };

    export default AboutSection;