import React from 'react'
import YoutubeEmbed from "../components/YoutubeEmbed"

const TallerVariables = () => {
  return (
    <>
    <h1>Taller de PSeInt #1 Variables e Impresión</h1>
      <div>
        <p className="enunciado-programas">1. Realizar un programa el cual solicite su nombre y apellidos.</p>
        <pre>{`
        Proceso averigua_nombre
	
          Definir nombre Como Caracter;
          Definir  apellidos Como Caracter;
          
          Escribir "¿Por favor, digite su nombre?";
          Leer nombre;
          
          Escribir "¿Por favor, digite sus apellidos?";
          Leer apellidos;
          
          Limpiar Pantalla;
          
          Escribir  "Hola Sr(a) ", nombre, " ", apellidos, " bienvenido!";
            
        FinProceso
          `}</pre>
      </div>
      
      <YoutubeEmbed embedId="watch?v=yRmtHuofMPs" />

      <div>
        <p className="enunciado-programas">2. Realizar un programa el cual solicite su nombre, apellidos, edad y estatura.</p>
        <pre>{`
        Proceso datos_persona
	
          Definir nombre Como Caracter;
          Definir  apellidos Como Caracter;
          Definir edad Como Entero;
          Definir estatura Como Real;
          
          Escribir "¿Por favor, digite su nombre?";
          Leer nombre;
          
          Escribir "¿Por favor, digite sus apellidos?";
          Leer apellidos;
          
          Escribir "¿Por favor, digite su edad?";
          Leer edad;
          
          Escribir "¿Por favor, digite su estatura?";
          Leer estatura;
          
          Limpiar Pantalla;
          
          Escribir "Los datos ingresados son:";
          Escribir "Nombres y apellidos: ", nombre, " ", apellidos;
          Escribir "Edad de: ", edad, " años";
          Escribir "Con una estatura de: ", estatura, " cm";
          
        FinProceso
          `}</pre>
      </div>

      <YoutubeEmbed embedId="watch?v=NSonIxQpgKw" />

      <div>
        <p className="enunciado-programas">3. Realizar un programa el cual solicite su nombre y apellidos, también debe capturar nombre y apellidos de su padre y madre. Al finalizar debe imprimir en pantalla el siguiente mensaje "Yo [Nombre Completo], soy hijo de [Nombre de la Madre] y [Nombre del Padre].</p>
        <pre>{`
        Proceso mis_padres
	
          Definir nombre Como Caracter;
          Definir nombre_padre Como Caracter;
          Definir nombre_madre Como Caracter;
          
          Definir  apellidos Como Caracter;
          Definir  apellidos_padre Como Caracter;
          Definir  apellidos_madre Como Caracter;
          
          Escribir "Por favor, digite su nombre:";
          Leer nombre;
          
          Escribir "Por favor, digite sus apellidos:";
          Leer apellidos;
          
          Limpiar Pantalla;
          
          Escribir "Por favor, digite el nombre de su padre:";
          Leer nombre_padre;
          
          Escribir "Por favor, digite los apellidos de su padre:";
          Leer apellidos_padre;
          
          Limpiar Pantalla;
          
          Escribir "Por favor, digite el nombre de su madre:";
          Leer nombre_madre;
          
          Escribir "¿Por favor, digite los apellidos de su madre:";
          Leer apellidos_madre;
          
          
          Limpiar Pantalla;
          
          Escribir "Yo ", nombre, " ", apellidos, " soy hijo de ", nombre_madre, " ", apellidos_madre, " y ", nombre_padre, " ", apellidos_padre;
          
        FinProceso
          `}</pre>
      </div>

      <YoutubeEmbed embedId="watch?v=eZNy9nl5dVA" />

      <div>
        <p className="enunciado-programas">4. Realizar un programa el cual solicite el nombre de una ciudad capital y el país. Al finalizar debe imprimir en pantalla el siguiente mensaje "La ciudad [Nombre de la Ciudad], es la capital del país [Nombre del País]</p>
        <pre>{`
        Proceso ciudad_pais
	
          Definir ciudad Como Caracter;
          Definir pais Como Caracter;

          Escribir "Por favor, digite la ciudad capital:";
          Leer ciudad;

          Escribir "Por favor, digite el país:";
          Leer pais;

          Limpiar Pantalla;

          Escribir "La ciudad ", Ciudad, " es la capital del país ", pais;
        FinProceso
          `}</pre>
      </div>

      <YoutubeEmbed embedId="watch?v=5il1mA3ttXM" />

      <div>
        <p className="enunciado-programas">5. Realizar un programa el cual solicite el nombre de su mascota, edad de la mascota, el tipo de mascota y su nombre completo. Al finalizar el sistema debe e imprimir en pantalla el siguiente mensaje: [Nombre de Mascota] es un(a) [Tipo de Mascota], el cual, tiene [Edad de la Mascota] años de edad y [Nombre Completo] es actualmente su dueño(a).</p>
        <pre>{`
        Proceso datos_perro
	
          Definir nombre_completo Como Caracter;
          Definir  nombre_mascota Como Caracter;
          Definir edad_mascota Como Entero;
          Definir  tipo_mascota Como Caracter;
          
          Escribir "Por favor, digite su nombre y apellidos completo:";
          Leer nombre_completo;
          
          Escribir "Por favor, digite nombre de mascota:";
          Leer nombre_mascota;
          
          Escribir "Por favor, digite edad de la mascota:";
          Leer edad_mascota;
          
          Escribir "¿Por favor, digite raza de la mascota:";
          Leer tipo_mascota;
          
          Limpiar Pantalla;
          
          Escribir nombre_mascota, " es un(a) ", tipo_mascota, ", el cual, tiene ", edad_mascota, " años de edad y ", nombre_completo, " es actualmente su dueño(a)";
          
        FinProceso
          `}</pre>
      </div>

      <YoutubeEmbed embedId="watch?v=tDxZaU4cHqs" />
    </>
  )
}

export default TallerVariables