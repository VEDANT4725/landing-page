    import React from 'react';
    import {
      cn
    } from '../../lib/utils';
    import {
      motion
    } from 'framer-motion';

    interface ContainerProps extends React.HTMLAttributes < HTMLDivElement > {
      children: React.ReactNode;
      className ? : string;
      as ? : React.ElementType;
      initial ? : any;
      animate ? : any;
      transition ? : any;
      viewport ? : any;
    }

    const Container = React.forwardRef < HTMLDivElement, ContainerProps > (
      ({
        children,
        className,
        as: Comp = 'div',
        initial = {
          opacity: 0,
          y: 20
        },
        animate = {
          opacity: 1,
          y: 0
        },
        transition = {
          duration: 0.6,
          ease: "easeOut"
        },
        viewport = {
          once: true,
          amount: 0.3
        },
        ...props
      }, ref) => {
        return ( <
          motion.div as = {
            Comp
          }
          ref = {
            ref
          }
          className = {
            cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)
          }
          initial = {
            initial
          }
          whileInView = {
            animate
          }
          viewport = {
            viewport
          }
          transition = {
            transition
          } { ...props
          } > {
            children
          } <
          /motion.div>
        );
      }
    );

    Container.displayName = 'Container';

    export default Container;