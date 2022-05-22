import React from 'react'
import AccordionInformation from '../components/AccordionInformation'

const Estudios = () => {
  return (
    <>
      <AccordionInformation
        titulo="Gestión Empresarial"
        contenido="Politecnico Grancolombiano,
        Junio 2013"
      />

<AccordionInformation
        titulo="Especialización Tecnologica en Seguridad de Redes"
        contenido="Servicio Nacional de Aprendizaje SENA,
        Junio 2013"
      />

<AccordionInformation
        titulo="Administración de Empresas"
        contenido="Universidad Nacional Abierta y a Distancia UNAD,
        Enero 2010"
      />

<AccordionInformation
        titulo="Tecnico en Mantenimiento de Hardware"
        contenido="Servicio Nacional de Aprendizaje SENA,
        Enero 2006"
      />
    </>
  )
}

export default Estudios