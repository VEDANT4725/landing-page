    import React from 'react';
    import {
      motion
    } from 'framer-motion';
    import {
      Button
    } from './ui/Button';
    import {
      Menu,
      X
    } from 'lucide-react';
    import {
      cn
    } from '../lib/utils';

    const navLinks = [{
      name: 'Academics',
      href: '#academics'
    }, {
      name: 'Admissions',
      href: '#admissions'
    }, {
      name: 'Campus Life',
      href: '#campus-life'
    }, {
      name: 'Research',
      href: '#research'
    }, {
      name: 'Contact',
      href: '#contact'
    }, ];

    const Navbar: React.FC = () => {
      const [isOpen, setIsOpen] = React.useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      return ( <
        motion.nav initial = {
          {
            y: -100
          }
        }
        animate = {
          {
            y: 0
          }
        }
        transition = {
          {
            type: 'spring',
            stiffness: 120,
            damping: 20,
            delay: 0.1
          }
        }
        className = "bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm" >
        <
        div className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
        <
        div className = "flex items-center justify-between h-16" >
        <
        div className = "flex items-center" >
        <
        a href = "/"
        className = "flex-shrink-0 font-bold text-2xl text-indigo-700" >
        <
        span className = "text-indigo-500" > Uni < /span>Verse <
        /a> <
        /div> <
        div className = "hidden md:block" >
        <
        div className = "ml-10 flex items-baseline space-x-4" > {
          navLinks.map((link) => ( <
            a key = {
              link.name
            }
            href = {
              link.href
            }
            className = "text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors" > {
              link.name
            } <
            /a>
          ))
        } <
        Button variant = "default"
        className = "ml-4 bg-indigo-600 hover:bg-indigo-700 text-white" >
        Apply Now <
        /Button> <
        /div> <
        /div> <
        div className = "-mr-2 flex md:hidden" >
        <
        Button onClick = {
          toggleMenu
        }
        variant = "ghost"
        size = "icon"
        className = "inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-700 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" > {
          isOpen ? < X className = "h-6 w-6" / > : < Menu className = "h-6 w-6" / >
        } <
        /Button> <
        /div> <
        /div> <
        /div> {
          isOpen && ( <
            motion.div initial = {
              {
                opacity: 0,
                y: -10
              }
            }
            animate = {
              {
                opacity: 1,
                y: 0
              }
            }
            exit = {
              {
                opacity: 0,
                y: -10
              }
            }
            transition = {
              {
                duration: 0.2
              }
            }
            className = "md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-2 pb-4 border-t border-gray-100" >
            <
            div className = "px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center" > {
              navLinks.map((link) => ( <
                a key = {
                  link.name
                }
                href = {
                  link.href
                }
                onClick = {
                  toggleMenu
                }
                className = "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-center" > {
                  link.name
                } <
                /a>
              ))
            } <
            Button variant = "default"
            className = "mt-4 bg-indigo-600 hover:bg-indigo-700 text-white w-2/3" >
            Apply Now <
            /Button> <
            /div> <
            /motion.div>
          )
        } <
        /motion.nav>
      );
    };

    export default Navbar;