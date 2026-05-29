    import React from 'react';
    import Container from './shared/Container';
    import {
      motion
    } from 'framer-motion';
    import {
      Facebook,
      Twitter,
      Instagram,
      Linkedin
    } from 'lucide-react';

    const Footer: React.FC = () => {
      const footerNavs = [{
        title: 'Academics',
        links: ['Programs', 'Departments', 'Faculty', 'Research']
      }, {
        title: 'Admissions',
        links: ['Apply', 'Tuition & Aid', 'Visit', 'Requirements']
      }, {
        title: 'Campus Life',
        links: ['Student Orgs', 'Housing', 'Athletics', 'Events']
      }, {
        title: 'About',
        links: ['Our Story', 'Mission', 'Leadership', 'Careers']
      }, ];

      const socialLinks = [{
        icon: Facebook,
        href: '#'
      }, {
        icon: Twitter,
        href: '#'
      }, {
        icon: Instagram,
        href: '#'
      }, {
        icon: Linkedin,
        href: '#'
      }, ];

      return ( <
        motion.footer initial = {
          {
            opacity: 0,
            y: 50
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
            ease: "easeOut"
          }
        }
        className = "bg-gray-800 text-gray-300 py-12 sm:py-16" >
        <
        Container >
        <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10" >
        <
        div className = "lg:col-span-2 text-center md:text-left" >
        <
        a href = "/"
        className = "flex-shrink-0 font-bold text-3xl text-white mb-4 justify-center md:justify-start" >
        <
        span className = "text-indigo-400" > Uni < /span>Verse <
        /a> <
        p className = "text-gray-400 text-base max-w-sm mx-auto md:mx-0" >
        Empowering minds, shaping futures.UniVerse University is committed to academic excellence and societal impact. <
        /p> <
        div className = "flex mt-6 space-x-4 justify-center md:justify-start" > {
          socialLinks.map((link, index) => ( <
            a key = {
              index
            }
            href = {
              link.href
            }
            className = "text-gray-400 hover:text-indigo-400 transition-colors" >
            <
            link.icon className = "h-6 w-6" / >
            <
            /a>
          ))
        } <
        /div> <
        /div> <
        div className = "lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left" > {
          footerNavs.map((section, index) => ( <
            div key = {
              index
            } >
            <
            h3 className = "text-lg font-semibold text-white mb-4" > {
              section.title
            } < /h3> <
            ul className = "space-y-2" > {
              section.links.map((link, linkIndex) => ( <
                li key = {
                  linkIndex
                } >
                <
                a href = "#"
                className = "text-gray-400 hover:text-indigo-400 transition-colors text-base" > {
                  link
                } < /a> <
                /li>
              ))
            } <
            /ul> <
            /div>
          ))
        } <
        /div> <
        /div> <
        div className = "mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm" >
        © {
          new Date().getFullYear()
        }
        UniVerse University.All rights reserved. <
        /div> <
        /Container> <
        /motion.footer>
      );
    };

    export default Footer;