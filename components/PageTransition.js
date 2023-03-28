import { useRef } from "react";
import { motion as m } from "framer-motion";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PageTransition = ({ children, route }) => {
  return (
    <TransitionGroup component={null}>
      <CSSTransition classNames="page" timeout={900} key={route}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
