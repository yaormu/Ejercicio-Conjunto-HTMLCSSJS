import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";

const TallerCiclos = () => {
  return (
    <>
      <h1>Taller de PSeInt #3 Ciclos</h1>

      <div>
        <p className="enunciado-programas">1. Realizar la siguiente figura por medio del ciclo Para</p>
        <pre>{`
                    *
                    **
                    ***
                    ****
                    *****
                    ******
                    ********
                    *********
      `}</pre>
        <pre>{`
          Proceso figura_ciclo_para
    
            definir i, asterisco Como Entero;


            Para i<-1 Hasta 10 Con Paso 1 Hacer

              Para asterisco<-1 Hasta i Con Paso 1 Hacer
                Escribir Sin Saltar "*";
              FinPara
              Escribir "";
            FinPara
          FinProceso
    `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">2. Realizar la siguiente figura por medio del ciclo Mientras - Hacer</p>
        <pre>{`
                            *
                           **
                          ***
                         ****
                        *****
                      *******
                     ********
                    *********
      `}</pre>
        <pre>{`
        Proceso figura_mientras_hacer
          Definir i,j, k, max Como Entero;
          Definir simbolo Como Caracter;

          i <- 1;
          max <- 10;
          simbolo <- '*';

          Mientras i<=max Hacer

            j <- 1;
            k <- 10;

            Mientras k>=i Hacer
              Escribir " " Sin Saltar;
              k <- k-1;
            FinMientras

            Mientras j<=i Hacer
              Escribir simbolo Sin Saltar;
              j <- j+1;
            FinMientras

            Escribir "";
            i <- i+1;

          FinMientras
        FinProceso
    `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">3. Realizar la siguiente figura por medio del ciclo Repetir - Hasta Que</p>
        <pre>{`
                            *
                           ***
                          *****
                         *******
                        *********
                      ************
                     **************
                    ****************
                          ***
                          ***
                         *****
                        *******
      `}</pre>
        <pre>{`
          Proceso figura_repetir_hasta_que
            // Variables copa arbol
            Definir i,j,k,l,max Como Entero;
            Definir a,b,c,index, maximo Como Entero;

            // Variable para simbolo y lo definimos como un * 
            Definir simbolo Como Caracter;
            simbolo <- '*';

            // Inicializar variables de inicio y máximo 
            i <- 1;
            index <- 1;
            max <- 10;
            maximo <- 5;


            // Crear copa del arbol
            Repetir
              // Inicializacion variables a utilizar
              j <- 1;
              k <- 10;
              l <- 1;

              // Crea espacios iniciando desde 10 y diminuye al repetir ciclo
              Repetir
                Escribir ' ' Sin Saltar;
                k <- k-1;
              Hasta Que k<i

              Repetir
                // Imprimir desde la 2da interacción
                Si j==1 Entonces
                  Escribir '' Sin Saltar;
                SiNo
                  Escribir simbolo Sin Saltar;
                FinSi
                j <- j+1;
              Hasta Que j>i

              Repetir
                // Imprimir desde la 2da interacción
                Si l==1 Entonces
                  Escribir '' Sin Saltar;
                SiNo
                  Escribir simbolo Sin Saltar;
                FinSi
                l <- l+1;
              Hasta Que l>i

              // Al llegar a este punto da un salto
              Escribir '*';

              i <- i+1;

              Hasta Que i>=max
          
          
            // ---------------------  Base del arbol ---------------------------//
            // Crea espacios iniciando desde 10 y diminuye al repetir ciclo
            Repetir

              a <- 10;
              b <- 2;
              c <- 2;

              Repetir
                Si a == 1 Entonces
                  Escribir "" Sin Saltar;
                SiNo
                  Escribir " " Sin Saltar;
                FinSi
                a <- a-1;
              Hasta Que a<index

              Repetir
                Escribir simbolo Sin Saltar;
                b <- b+1;
              Hasta Que b>index

              Repetir
                Escribir simbolo Sin Saltar;
                c <- c+1;
              Hasta Que c>index

              // Al llegar a este punto da un salto
              Escribir simbolo;

              index <- index+1;

            Hasta Que index>=maximo
          
          FinProceso
    `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">4. Se requiere un programa que pueda crear la tabla de multiplicar del número que el usuario indique por medio del ciclo Para; esta debe ser impresa del 1 al 10. Ejemplo, si el usuario indica que desea crear la tabla del 5, entonces el resultado debería ser el siguiente:</p>
        <p className="enunciado-programas">1 X 5 = 5</p>
        <p className="enunciado-programas">2 X 5 = 10</p>
        <p className="enunciado-programas">3 X 5 = 15</p>
        <p className="enunciado-programas">4 X 5 = 20</p>
        <p className="enunciado-programas">5 X 5 = 25</p>
        <p className="enunciado-programas">6 X 5 = 30</p>
        <p className="enunciado-programas">7 X 5 = 35</p>
        <p className="enunciado-programas">8 X 5 = 40</p>
        <p className="enunciado-programas">9 X 5 = 45</p>
        <p className="enunciado-programas">10 X 5 = 50</p>
        <pre>{`
            Proceso tabla_multiplicar_para
	
            Definir i, j Como Entero;
            
            Para i<-5 Hasta 5 Con Paso 1 Hacer
              //Escribir "Tabla del: ", i;
              
              Para j<-1 Hasta 10 Con Paso 1 Hacer
                Escribir i, " X ", j, " = ", i*j;
              FinPara
            FinPara
            
          FinProceso
    `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">5. Utilizando el ciclo que usted desee, crear un menú de ejecución infinita hasta que el usuario desee terminar dicho ciclo.</p>
        <p className="enunciado-programas">Ménu de usuario</p>
        <p className="enunciado-programas">1. captura nombre</p>
        <p className="enunciado-programas">2. saludar persona</p>
        <p className="enunciado-programas">3. salir del sistema</p>
        <pre>{`
          Proceso menu_infinito_ciclo
	
          Definir opcion Como Entero;
          Definir opcion_repetir, nombre Como Caracter;
          
          nombre <- "NN";
          
          Repetir
            
            Escribir "Menú de usuario";
            Escribir "1. Captura nombre";
            Escribir "2. Saludar persona";
            Escribir "3. Salir del sistema";
            Leer opcion;
            
            Limpiar Pantalla;
            
            Segun opcion Hacer
              1:
                Escribir "Opción: Captura nombre";
                Escribir "";
                Escribir "Ingresa un nombre:";
                Leer nombre;
              2:
                Escribir "Opción: Saludar Persona";
                Escribir "";
                Escribir "Hola ", nombre, " bienvenido!!";
              3:
                Escribir "Seguro que desas salir";
              De Otro Modo:
                Escribir "Opción invalida";
            FinSegun
            
            Escribir "Continuar Enter... Para salir del programa digita S";
            
            Leer opcion_repetir;
            
            Limpiar Pantalla;
            
            
          Hasta Que opcion_repetir == "S" O opcion_repetir == "s"
          
        FinProceso
    `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">6. Se está creando una aplicación que va a estar conectada con un prototipo que permita almacenar contactos telefónicos en el dispositivo. Para ello cada contacto debe contener nombre completo, teléfono y organización. Se requiere que la aplicación permita añadir 3 contactos verificando que el número no esté almacenado, buscar contactos almacenados y eliminar contactos si el usuario lo requiere. Recuerde que el sistema debe terminar cuando el usuario así lo indique.</p>
        <pre>{`
            Proceso contactos_telefonicos
	
            Definir opcion, cantidad_contactos, maximo_contactos Como Entero;
            Definir numero_contacto1, numero_contacto2, numero_contacto3 Como Entero;
            Definir nombre_contacto, nombre_contacto1, nombre_contacto2, nombre_contacto3 Como Caracter;
            Definir organizacion1, organizacion2, organizacion3 Como Caracter;
            Definir opcion_salir Como Caracter;
            
            nombre_contacto <- "";
            nombre_contacto1 <- "";
            nombre_contacto2 <- "";
            nombre_contacto3 <- "";
            
            numero_contacto1 <- 0;
            numero_contacto2 <- 0;
            numero_contacto3 <- 0;
            
            maximo_contactos <- 3;
            opcion_salir <- "";
            
            Repetir
              
              Escribir "Bienvenido a la agenda de contactos";
              Escribir "";
              Escribir "Digite alguna de las siguientes opciones:";
              Escribir "1. Registro de contacto";
              Escribir "2. Buscar contacto";
              Escribir "3. Eliminar contacto";
              Leer opcion;
              Limpiar Pantalla;
              
              Segun opcion Hacer
                1:
                  Escribir "MENÚ REGISTRO CONTACTOS";
                  Escribir "";
                  Escribir "Por favor indique la cantidad de contactos a registrar:";
                  Leer cantidad_contactos;
                  Limpiar Pantalla;
                  
                  Si cantidad_contactos > maximo_contactos Entonces
                    Escribir "Solo pueden registra máximo ", maximo_contactos, " contactos!!";
                    Escribir "";
                  SiNo
                    Si cantidad_contactos <= maximo_contactos Entonces
                      Segun cantidad_contactos Hacer
                        1:
                          Escribir "Datos de contacto #1";
                          Escribir "";
                          Escribir "Número de Celular:";
                          Leer numero_contacto1;
                          
                          Si numero_contacto1 = numero_contacto2 | numero_contacto1 = numero_contacto3 Entonces
                            Escribir "El número ya se encuentra registrado";
                          SiNo
                            Escribir "Nombre de Contacto";
                            Leer nombre_contacto1;
                            Escribir "Organización de contacto";
                            Leer organizacion1;
                            Limpiar Pantalla;
                          FinSi
                          
                        2:
                          Escribir "Datos de contacto #1";
                          Escribir "";
                          Escribir "Número de Celular:";
                          Leer numero_contacto1;
                          
                          Si numero_contacto1 = numero_contacto2 | numero_contacto1 = numero_contacto3 Entonces
                            Escribir "El número ya se encuentra registrado";
                          SiNo
                            Escribir "Nombre de Contacto";
                            Leer nombre_contacto1;
                            Escribir "Organización de contacto";
                            Leer organizacion1;
                            Limpiar Pantalla;
                          FinSi
                          
                          Escribir "Datos de contacto #2";
                          Escribir "";
                          Escribir "Número de Celular:";
                          Leer numero_contacto2;
                          
                          Si numero_contacto2 = numero_contacto1 | numero_contacto2 = numero_contacto3 Entonces
                            Escribir "El número ya se encuentra registrado";
                            Escribir "";
                          SiNo
                            Escribir "Nombre de Contacto";
                            Leer nombre_contacto2;
                            Escribir "Organización de contacto";
                            Leer organizacion2;
                            Limpiar Pantalla;									
                          FinSi
                        3:
                          Escribir "Datos de contacto #1";
                          Escribir "";
                          Escribir "Número de Celular:";
                          Leer numero_contacto1;
                          
                          Si numero_contacto1 = numero_contacto2 | numero_contacto1 = numero_contacto3 Entonces
                            Escribir "El número ya se encuentra registrado";
                          SiNo
                            Escribir "Nombre de Contacto";
                            Leer nombre_contacto1;
                            Escribir "Organización de contacto";
                            Leer organizacion1;
                            Limpiar Pantalla;
                          FinSi
                          
                          Escribir "Datos de contacto #2";
                          Escribir "";
                          Escribir "Número de Celular:";
                          Leer numero_contacto2;
                          
                          Si numero_contacto2 = numero_contacto1 | numero_contacto2 = numero_contacto3 Entonces
                            Escribir "El número ya se encuentra registrado";
                            Escribir "";
                          SiNo
                            Escribir "Nombre de Contacto";
                            Leer nombre_contacto2;
                            Escribir "Organización de contacto";
                            Leer organizacion2;
                            Limpiar Pantalla;									
                          FinSi
                          
                          Escribir "Datos de contacto #3";
                          Escribir "";
                          Escribir "Número de Celular:";
                          Leer numero_contacto3;
                          
                          Si numero_contacto3 = numero_contacto1 | numero_contacto3 = numero_contacto2 Entonces
                            Escribir "El número ya se encuentra registrado";
                          SiNo
                            Escribir "Nombre de Contacto";
                            Leer nombre_contacto3;
                            Escribir "Organización de contacto";
                            Leer organizacion3;
                            Limpiar Pantalla;
                          FinSi
                          
                        De Otro Modo:
                          Escribir "Error";
                      FinSegun
                    FinSi
                  FinSi
                  
                2:
                  Escribir "MENÚ BUSCAR CONTACTO";
                  Escribir "";
                  Escribir "Digite el nombre de contacto";
                  Leer nombre_contacto;
                  Limpiar Pantalla;
                  
                  Si nombre_contacto = nombre_contacto1 Entonces
                    Escribir "Contacto encontrado: ";
                    Escribir "";
                    Escribir "Nombre: ", nombre_contacto1;
                    Escribir "Celular: ", numero_contacto1;
                    Escribir "Organizacion: ", organizacion1;
                    Escribir "";
                  SiNo
                    Si nombre_contacto = nombre_contacto2 Entonces
                      Escribir "Contacto encontrado: ";
                      Escribir "";
                      Escribir "Nombre: ", nombre_contacto2;
                      Escribir "Celular: ", numero_contacto2;
                      Escribir "Organizacion: ", organizacion2;
                      Escribir "";
                    SiNo
                      Si nombre_contacto = nombre_contacto3 Entonces
                        Escribir "Contacto encontrado: ";
                        Escribir "";
                        Escribir "Nombre: ", nombre_contacto3;
                        Escribir "Celular: ", numero_contacto3;
                        Escribir "Organizacion: ", organizacion3;
                        Escribir "";
                      SiNo
                        Escribir "No se encontro registro!!";
                        Escribir "";
                      FinSi
                    FinSi
                  FinSi				
                3:
                  Escribir "MENÚ ELIMINAR CONTACTO";
                  Escribir "";
                  Escribir "Digite el nombre de contacto:";
                  Leer nombre_contacto;
                  Limpiar Pantalla;
                  
                  Si nombre_contacto = nombre_contacto1 Entonces
                    nombre_contacto1 <- "";
                    numero_contacto1 <- 0;
                    organizacion1 <- "";
                    Escribir "Contacto eliminado!";
                    Escribir "";
                  SiNo
                    Si nombre_contacto = nombre_contacto2 Entonces
                      nombre_contacto2 <- "";
                      numero_contacto2 <- 0;
                      organizacion2 <- "";
                      Escribir "Contacto eliminado!";
                      Escribir "";
                    SiNo
                      Si nombre_contacto = nombre_contacto3 Entonces
                        nombre_contacto3 <- "";
                        numero_contacto3 <- 0;
                        organizacion3 <- "";
                        Escribir "Contacto eliminado!";
                        Escribir "";
                      SiNo
                        Escribir "No se encontro registro!!";
                        Escribir "";
                      FinSi
                    FinSi
                  FinSi	
                  
                De Otro Modo:
                  Escribir "Opción incorrecta!!";
                  Escribir "Al digitar 4 saldras al continuar... :(";
                  Escribir "";
              FinSegun
              
              
              Escribir "Presiona Enter para continuar...";
              Escribir "Digita S para salir totalmente del programa";
              Leer opcion_salir;
              
              Si opcion_salir = "s" | opcion_salir = "S" Entonces
                opcion <- 4;		
              FinSi
              
              Limpiar Pantalla;
              
            Hasta Que opcion > 0 & opcion = 4;
            
          FinProceso
    `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">7. El parqueadero "El guardián" presta sus servicios de parqueadero nocturno para los usuarios del barrio y requiere una aplicación que permita registrar los vehículos que se cuidan en estas instalaciones. Se sugiere que el parqueadero tenga los atributos del vehículo como son, placa y marca, y los datos del cliente como son nombre completo y número de teléfono. Para cada vehículo se debe permitir la opción de ingresar al parqueadero, retirar del parqueadero y consultar si un vehículo se encuentra en el parqueadero. Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga en presente que el parqueadero solo puede almacenar máximo 5 vehículos.</p>
        <pre>{`
            Proceso parqueadero_vehiculos
		
            // Declarar variables con su respectivo tipo
            Definir opcion_menu, numero_telefonico, i, cantidad_carro, maxima_capacidad, contador Como Entero;
            Definir opcion_salir, marca, nombre_completo Como Caracter;
            Definir placa, placa_retiro, placa_busqueda Como Caracter;
            
            maxima_capacidad <- 5;
            placa <- "";
              
            Escribir "Bienvenido al programa de parqueadero el guardián";
            Escribir "";
            Escribir "Digite alguna opción disponible:";
            Escribir "";
              
            Repetir
              Escribir "1. Ingreso vehiculo al parqueadero";
              Escribir "2. Retiro vehiculo del parqueadero";
              Escribir "3. Consultar vehiculos en el parqueadero";
                
              Leer opcion_menu;		
              
              Limpiar Pantalla;
              
              Segun opcion_menu Hacer
                1:
                  Escribir "Cantidad de carros a registrar";
                  Leer cantidad_carro;
                  
                  Limpiar Pantalla;
                  
                  Si cantidad_carro = maxima_capacidad Entonces
                    Escribir "La capacidad maxima es: ", maxima_capacidad, "!!!";
                    Escribir "";
                  SiNo
                    Si cantidad_carro <= maxima_capacidad Entonces
                      
                      contador <- 0;
                      
                      Para i <- 1 Hasta cantidad_carro Con Paso 1 Hacer
                        
                        Escribir "Menú registro vehículo";
                        Escribir "";
                        Escribir "Por favor ingrese los siguientes datos:";
                        Escribir "Carro #: ", i;
                        Escribir "";
                        
                        Escribir "- Registrar placa vehiculo:";
                        Leer placa;
                        Escribir "- Registrar marca vehiculo:";
                        Leer marca;
                        Escribir "- Registrar nombre completo cliente";
                        Leer nombre_completo;
                        Escribir "- Registrar número telefonico cliente";
                        Leer numero_telefonico;
                        
                        Limpiar Pantalla;
                        
                        Escribir "Datos registrados exitosamente!";
                        Escribir "";
                        Escribir "Placa: ", placa;
                        Escribir "Marca: ", marca;
                        Escribir "Propietario: ", nombre_completo;
                        Escribir "Telefono: ", numero_telefonico;
                        
                        contador <- contador + 1;
                        
                        Escribir "Registro #: ", contador;
                        Escribir "Disponibilidad parqueaderos: ", maxima_capacidad - contador;
                        Escribir "";
                  
                      FinPara
                    FinSi
                  FinSi
                  
                2:
                  Escribir "Menú retiro vehiculo del parqueadero";
                  Escribir "";
                  Escribir "Por favor registrar placa vehiculo:";
                  Leer placa_retiro;
                  
                  Limpiar Pantalla;
                  
                  Si placa_retiro = placa Entonces
                    Escribir "Retiro del Vehiculo:";
                    Escribir "";
                    Escribir "- Placa: ", placa;
                    Escribir "- Marca: ", marca; 
                    Escribir "";
                    placa <- "";
                  SiNo
                    Escribir "Ningun vehiculo registrado con dicho número de placa";
                    Escribir "";
                  FinSi
              
                3:
                  Escribir "Menú consultar vehiculos en el parqueadero";
                  Escribir "";
                  Escribir "Por favor ingrese placa para iniciar busqueda...?";
                  Leer placa_busqueda;
                  
                  Limpiar Pantalla;
                  
                  Si placa_busqueda = placa Entonces
                    Escribir "Vehiculo encontrado:";
                    Escribir "";
                    Escribir "- Placa: ", placa; 
                    Escribir "- Marca: ", marca;
                    Escribir "- Propietario: ", nombre_completo;
                    Escribir "";
                  SiNo
                    Escribir "Ningun vehiculo registrado con dicho número de placa";
                    Escribir "";
                  FinSi
                De Otro Modo:
                  Escribir "Elegio una opción incorrecta :(";
                  Escribir "";
              FinSegun
                
              Escribir "Presiona Enter para continuar...";
              Escribir "Digita S para salir totalmente del programa";
              Leer opcion_salir;
                
              Si opcion_salir = "s" | opcion_salir = "S" Entonces
                Escribir "Gracias por utilizar el programa";
                opcion_menu <- 4;		
                Escribir "Gracias por utilizar el programa";
                Limpiar Pantalla;
              FinSi
              
              Limpiar Pantalla;
                
            Hasta Que opcion_menu > 0 & opcion_menu == 4;	
            
          FinProceso
    `}</pre>
      </div>

      <YoutubeEmbed embedId="watch?v=ssTZywNzbWw" />

      <div>
        <p className="enunciado-programas">8. La escuela automovilística "El Maestro" requiere una aplicación que permita registrar a sus clientes en los cursos de enseñanza automovilística y establecer quienes lo han aprobado para continuar con el trámite de adquirir la licencia de conducción. 

Para cada usuario se debe permitir registrar su ingreso al curso, consultar usuarios que hayan presentado el curso y resultados de la prueba del curso (si fueron aprobados o no).

Recuerde que el sistema debe terminar cuando el usuario así lo indique. Tenga presente que la escuela tiene capacidad máxima de gestionar 8 usuarios en su totalidad.</p>
        <pre>{`
            Proceso escuela_automovilistica
	
            Definir cantidad_usuarios, maximo_usuarios, documento_usuario, opcion_menu, i, consulta_usuario Como Entero;
            Definir nombre_usuario, apellido_usuario, opcion_salir Como Caracter;
            
            maximo_usuarios <- 8;
            documento_usuario <- 0;
            consulta_usuario <- 0;
            opcion_salir <- "";
            nombre_usuario <- "";
            
            Escribir "Bienvenido al menú escuela automovilística El Maestro";
            Escribir "";
            Escribir "Por favor digite alguna de las opciones:";
            Escribir "";
            
            
            Repetir
              Escribir "1. Registro de usuario";
              Escribir "2. Consultar registro de usuario";
              Escribir "3. Consultar aprobación curso de usuario";
              Leer opcion_menu;
              
              Limpiar Pantalla;
              
              Segun opcion_menu Hacer
                1:
                  Escribir "Cantidad de usuarios a registrar";
                  Leer cantidad_usuarios;
                  Limpiar Pantalla;
                  
                  Si cantidad_usuarios > maximo_usuarios Entonces
                    Escribir "Solo puede realizar máximo ", maximo_usuarios, " registros";
                  SiNo
                    Si cantidad_usuarios > 0 && cantidad_usuarios <= maximo_usuarios Entonces
                      
                      Para i<-1 Hasta cantidad_usuarios Con Paso 1 Hacer
                        Escribir "Menú registro usuario";
                        Escribir "Usuario #", i;
                        Escribir "- Por favor ingrese nombre usuario:";
                        Leer nombre_usuario;
                        Escribir "- Por favor ingrese apellido usuario:";
                        Leer apellido_usuario;
                        Escribir "- Por favor ingrese número de documento usuario:";
                        Leer documento_usuario;
                        Limpiar Pantalla;
                        
                      FinPara
                    FinSi
                  FinSi
                  
                  
                2:
                  Escribir "Menú consulta registro usuario";
                  Escribir "";
                  Escribir "- Por favor ingrese número de identificación del usuario:";
                  Leer consulta_usuario;
                  Escribir "";
                  
                  Si consulta_usuario = documento_usuario && consulta_usuario > 0 Entonces
                    Escribir "Nombre Usario: ", nombre_usuario;
                    Escribir "Documento identificación: ", documento_usuario;
                    Escribir "";
                  SiNo
                    Escribir "Usuario no registrado!!";
                    Escribir "";
                  FinSi
                3:
                  Escribir "Menú consulta aprobación curso";
                  Escribir "";
                  Escribir "- Por favor ingrese número de identificación del usuario:";
                  Leer consulta_usuario;
                  
                  Si consulta_usuario = documento_usuario & consulta_usuario < 100 Entonces
                    Escribir "Nombre Usario: ", nombre_usuario;
                    Escribir "Documento identificación: ", documento_usuario;
                    Escribir "Aprobo el Curso";
                  SiNo
                    // Ponemos como ejemplo que si una cedula es mayor a 100 aparecera que NO aprueba
                    Si consulta_usuario = documento_usuario & consulta_usuario > 100 Entonces
                      Escribir "Nombre Usario: ", nombre_usuario;
                      Escribir "Documento identificación: ", documento_usuario;
                      Escribir "NO Aprobo el curso";
                    SiNo
                      Escribir "El usuario no esta registrado!!";	
                    FinSi
                  FinSi
          
                De Otro Modo:
                  Escribir "Selecciono una respuesta incorrecta";
                  Escribir "";
              FinSegun
              
              Escribir "Presiona Enter para continuar...";
              Escribir "Digita X para salir totalmente del programa";
              Leer opcion_salir;
              
              Si opcion_salir = "x" | opcion_salir = "X" Entonces
                opcion_menu <- 4;
              FinSi
              
              Limpiar Pantalla;
              
            Hasta Que opcion_menu > 0 & opcion_menu == 4;
            
          FinProceso
    `}</pre>
      </div>
    </>
  );
};

export default TallerCiclos;
