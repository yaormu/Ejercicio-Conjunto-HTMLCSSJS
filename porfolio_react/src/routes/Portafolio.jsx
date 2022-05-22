import React from "react";
import AccordionJava from "../components/AccordionJava";
import AccordionPSeInt from "../components/AccordionPSeInt";


const Portafolio = () => {
  return (
    <>
      <p>En esta sección encontraras el desarrollo de códigos realizados en PSeInt</p>
      <AccordionPSeInt />
      <p>En esta sección encontrar el mismo código anteriormente, pero desarrollado bajo el lenguaje Java</p>
      <AccordionJava />
    </>
  );
};

export default Portafolio;
