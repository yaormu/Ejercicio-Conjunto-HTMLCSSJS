import React from 'react'
import YoutubeEmbed from "../components/YoutubeEmbed"
import cuadro from "../assets/images/cuadro.png"
const TallerArreglos = () => {
  return (
    <>
      <h1>Taller de Arreglos PSeInt</h1>
      <div>
        <p className="enunciado-programas">1. Crear un vector de tipo Entero con 5 posiciones, llenarlo con información solicitada al usuario. Después de recoger toda la información, se requiere imprimir el índice de cada posición en el arreglo con su valor de la siguiente manera:</p>
        <p className="enunciado-programas">[0] = 55</p>
        <p className="enunciado-programas">[1] = 99</p>
        <p className="enunciado-programas">[2] = 11</p>
        <p className="enunciado-programas">[3] = 56</p>
        <p className="enunciado-programas">[4] = 69</p>
        <pre>{`
          Proceso Ejercicio1
	
            Definir numerosArreglo, i, num Como Entero;
            
            Dimension  numerosArreglo[5];
            
            Para i <- 0 Hasta 4 Con Paso 1 Hacer
              Escribir "Digite un número: ", i, " del arreglo";
              Leer num;
              numerosArreglo[i] <- num;
              Limpiar Pantalla;
            FinPara
            
            Para i <- 0 Hasta 4 Con Paso 1 Hacer
              Escribir numerosArreglo[i];
            FinPara
            
          FinProceso
        `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">2. Crear un arreglo de números enteros de 20 posiciones, el cual, debe ser llenado con números aleatorios entre 1 y 100; después de haber llenado dicho arreglo, se debe volver a recorrer utilizando un ciclo diferente al que se usó para llenarse e imprimir los números pares e impares. Ejemplo</p>
        <p className="enunciado-programas">Números pares: 2, 4, 6, 8, 10</p>
        <p className="enunciado-programas">Números impares: 1, 3, 5, 7, 9</p>
        <pre>{`
            Proceso Ejercicio2
              Definir a,arreglo,i,num,j, par, impar Como Entero;
              a <- 1;
              i <- 1;
              Dimension arreglo[21];
              Dimension par[21];
              Dimension impar[21];

              num <- azar(10);

              Mientras i<=20 Hacer
                arreglo[i] <- azar(100);
                // Escribir arreglo[i]
                i <- i+1;
              FinMientras

              Escribir "Números pares: " Sin Saltar;

              Para i<-1 Hasta 20 Hacer
                //Escribir arreglo[i];
                Si arreglo[i] MOD 2 == 0 Entonces
                  Escribir arreglo[i], ", " Sin Saltar;
                  par[i] <- arreglo[i];
                FinSi
              FinPara

              Escribir "";

              Escribir "Números impares: " Sin Saltar;

              Para i<-1 Hasta 20 Hacer
                //Escribir arreglo[i];
                Si arreglo[i] MOD 2 == 1 Entonces
                  Escribir arreglo[i], ", " Sin Saltar;
                  impar[i] <- arreglo[i];
                FinSi
              FinPara

              Escribir "";

            FinProceso
        `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">3. Imprimir los números primos del 1 al 1000, el resultado debe ser buscado de forma matemática.</p>
        <pre>{`
           Proceso sin_titulo
            Definir arreglo,i,j,num,contador, div Como Entero;

            num <- 0;
            contador <- 0;

            Dimension arreglo[1001];

            Para i<-0 Hasta 1000 Hacer
              arreglo[i] <- num;
              num <- num+1;
            FinPara

            Para i<-0 Hasta 1000 Con Paso 1 Hacer

              div <- 0;

              Para j<-1 Hasta arreglo[i] Con Paso 1 Hacer
                Si arreglo[i] % j == 0 Entonces
                  div <- div + 1;
                FinSi
              FinPara

              Si div == 2 Entonces
                Escribir arreglo[i];
              FinSi
            FinPara	

          FinProceso
        `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">4. Dada la siguiente matriz bidimensional, el cual debe de quemar en el código</p>
        <p className="enunciado-programas">01 02 03 04 05</p>
        <p className="enunciado-programas">06 07 08 09 10</p>
        <p className="enunciado-programas">11 12 13 14 15</p>
        <p className="enunciado-programas">16 17 18 19 20</p>
        <p className="enunciado-programas">Utilizando el conocimiento adquirido, a excepción de hacerlo de forma manual, imprima la siguiente matriz bidimensional.</p>
        <p className="enunciado-programas">01 02 03 04 05</p>
        <p className="enunciado-programas">10 09 08 07 06</p>
        <p className="enunciado-programas">11 12 13 14 15</p>
        <p className="enunciado-programas">20 19 18 17 16</p>
        <pre>{`
            Proceso Ejercicio4
	
              Definir datosNumeros Como Caracter;
              Definir i, j, l Como Entero;

              Dimension datosNumeros[5, 4];

              datosNumeros[0,0] <- "01";
              datosNumeros[1,0] <- "02";
              datosNumeros[2,0] <- "03";
              datosNumeros[3,0] <- "04";
              datosNumeros[4,0] <- "05";

              datosNumeros[0,1] <- "06";
              datosNumeros[1,1] <- "07";
              datosNumeros[2,1] <- "08";
              datosNumeros[3,1] <- "09";
              datosNumeros[4,1] <- "10";

              datosNumeros[0,2] <- "11";
              datosNumeros[1,2] <- "12";
              datosNumeros[2,2] <- "13";
              datosNumeros[3,2] <- "14";
              datosNumeros[4,2] <- "15";

              datosNumeros[0,3] <- "16";
              datosNumeros[1,3] <- "17";
              datosNumeros[2,3] <- "18";
              datosNumeros[3,3] <- "19";
              datosNumeros[4,3] <- "20";

              Para i <- 0 Hasta 4-1 Con Paso 1 Hacer
                Para j <- 0 Hasta 5-1 Con Paso 1 Hacer
                  Escribir "  ", datosNumeros[j, i] Sin Saltar ;
                FinPara
                Escribir "";
              FinPara

              Escribir "";


              Para l <- 0 Hasta 4 Con Paso 1 Hacer
                Escribir "  ", datosNumeros[l, 0] Sin Saltar ;
              FinPara

              Escribir "";

              Para l <- 4 Hasta 0 Con Paso -1 Hacer
                Escribir "  ", datosNumeros[l, 1] Sin Saltar ;
              FinPara

              Escribir "";

              Para l <- 0 Hasta 4 Con Paso 1 Hacer
                Escribir "  ", datosNumeros[l, 2] Sin Saltar ;
              FinPara

              Escribir "";

              Para l <- 4 Hasta 0 Con Paso -1 Hacer
                Escribir "  ", datosNumeros[l, 3] Sin Saltar ;
              FinPara

              Escribir "";

            FinProceso
        `}</pre>
      </div>

      <YoutubeEmbed embedId="watch?v=ngpPrvPLRjA" />

      <div>
        <p className="enunciado-programas">5. Se debe de imprimir el siguiente cuadro - dolikos</p>
        <img src={cuadro} alt="cuadro" />
        <p>El usuario deberá insertar la fila y columna de la cual desea ver el resultado, el resultado de cada celda debe estar previamente calculado en una matriz bidimensional la cual cada resultado obedecerá a la fila y columna insertada por el usuario.</p>
        <pre>{`
            Proceso Ejercicio5 
	
              Definir fila, columna, arreglo, i, j Como Entero; 
              Definir arregloTabla Como Entero; 

              Dimension arreglo[10, 10]; 


              Escribir "   0   1   2   3   4   5   6   7   8   9";

              // Prueba validar resultados de la multiplicacion de datos ingresados 
              Para fila <- 1 Hasta 10 Con Paso 1 Hacer 
                Escribir  fila-1, " " Sin Saltar; 
                Para columna <- 1 Hasta 10 Con Paso 1 Hacer 

                  Escribir columna,  "x", fila , " " Sin Saltar; 
                FinPara 
                Escribir ""; 
              FinPara 

              Escribir ""; 

              i<-1; 
              j<-1; 
              // Ingresar datos al arreglo 
              Para fila <- 0 Hasta 9 Con Paso 1 Hacer 
                Para columna <- 0 Hasta 9 Con Paso 1 Hacer 
                  arreglo[fila, columna] <- i * j; 
                  i <- i+1; 
                FinPara 
                i<-1; 
                j <- j+1; 
              FinPara 


              Escribir "Ingrese la fila a consultar: "; 
              Leer fila; 

              Escribir "Ingrese la columna a consultar: "; 
              Leer columna; 

              //Limpiar Pantalla; 

              Escribir "El resultado es: ", arreglo[fila, columna]; 

            FinProceso
        `}</pre>
      </div>
      
    </>
  )
}

export default TallerArreglos