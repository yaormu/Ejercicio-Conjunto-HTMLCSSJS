import React from "react";
import AccordionInformation from "../components/AccordionInformation";

const Experiencia = () => {
  return (
    <>
      <AccordionInformation
        titulo="Banco Mundo Mujer SA"
        contenido="Coordinador de Servicios: Lider del proceso operativo y de servicio en oficinas Agencia
        y Punto de Atención, encargado de la seguridad en el trabajo,
        seguridad fisica, cumplimiento de metas en captaciones de
        ahorro, crédito y CDT's. Operatividad y flujo de dinero en
        bóveda."
      />

      <AccordionInformation
        titulo="Alcaldia Municipal de Baraya"
        contenido="Ingeniero de Soporte: Brindar soporte tecnologico en redes, mantenimiento
        preventivo, correctivo de computadores, impresora, monitores,
        para mantener la constancia en los puestos de trabajo de las
        diferentes áreas de la alcaldia y sus diferentes dependencias."
      />

      <AccordionInformation
        titulo="Banco Agragario de Colombia"
        contenido="Auxiliar Operativo: Apoyo operativo en el Centro de Operaciones Bancarias de la
        regional huila, dando soporte en radicados y diferentes
        programas como PADA para el beneficio de los agricultores de
        Colombia cumpliendo las normas exigidas."
      />

      <AccordionInformation
        titulo="Alcaldia Municipal de La Plata"
        contenido="Tecnico en Mantenimiento de Hardware: Mantenimiento preventivo, predictivo y correctivo de los
        computadores e impresoras en el Departamento Administrativo de
        Planeación del Municipio. Atención al cliente en generación de
        certificados expedidos por el DAP y validación de proyectos de
        acuerdo a la normativa y garantias."
      />
    </>
  );
};

export default Experiencia;
