import React from "react";
import AccordionInformation from "../components/AccordionInformation";

const RefFamiliar = () => {
  return (
    <>
      <AccordionInformation
        titulo="Ruben Dario Ortiz Muñoz"
        contenido=" Ingeniero Industrial,
        Jefe de Bodega Postobon,
        Celular 329 124 85 96"
      />

      <AccordionInformation
        titulo="Heriberto Muñoz Escobar"
        contenido="Tecnico Jefe,
        Fuerza Aerea de Colombia,
        Celular 333 148 15 11"
      />

      <AccordionInformation
        titulo="Jaime Muñoz Escobar"
        contenido="Dragoniante,
        Instituto Penitenciario INPEC,
        Cel 809 145 22 25"
      />

      <AccordionInformation
        titulo="Erika Lorenny Ortiz Muñoz"
        contenido="Administradora de Empresas,
        Coordinadora de Alimentos Hospital Antonio de Paul,
        Cel 751 425 34 15"
      />
    </>
  );
};

export default RefFamiliar;
