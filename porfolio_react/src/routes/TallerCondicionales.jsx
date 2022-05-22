import React from 'react'
import YoutubeEmbed from "../components/YoutubeEmbed"

const TallerCondicionales = () => {
  return (
    <>
    <h1>Taller de PSeInt #2 Condicionales</h1>
      <div>
        <p className="enunciado-programas">1. Realizar un programa en el cual se solicite la edad de una persona. Si la persona es mayor o igual a 18 años, deberá mostrar en pantalla: Usted es mayor de edad.</p>
        <pre>{`
        Proceso edad_persona
    
          Definir edad Como Entero;
          
          Escribir "Por favor, digite edad:";
          Leer edad;
          
          Limpiar Pantalla;
          
          Si edad >= 18 Entonces;
            Escribir "Eres mayor de edad";
          SiNo
            Si edad < 18 y edad >= 0  Entonces;
              Escribir "Eres menor de edad";
            SiNo
              Si edad < 0 Entonces;
                Escribir "Solo digitar número y que sean positivos";
              FinSi		
            FinSi
          FinSi	
          
          
        FinProceso
            `}</pre>
      </div>
      
      <div>
        <p className="enunciado-programas">2. Realizar un programa en el cual se solicite la edad de una persona. Si la persona es menor a 18 años, deberá mostrar en pantalla: Usted aún es un niño(a).</p>
        <pre>{`
        Proceso edad_persona2
    
          Definir edad Como Entero;

          Escribir "Por favor, digite edad:";
          Leer edad;

          Limpiar Pantalla;

          Si edad >= 18 Entonces;
            Escribir "Eres una persona grande";
          SiNo
            Si edad < 18 y edad >= 0  Entonces;
              Escribir "Usted aún es un niño(a)";
            SiNo
              Si edad < 0 Entonces;
                Escribir "Solo digitar número y que sean positivos";
              FinSi		
            FinSi
          FinSi	

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">3. Realizar un programa en el cual se solicite el nombre, apellidos y edad de la persona. Si la persona es mayor o igual a 18 años, entonce se deberá imprimir en pantalla [Nombre completo] usted es mayor de edad, por lo tanto puede entrar a la fiesta. Si la edad de la persona es menor que 18 años, entonces, deberá imprimirse el siguiente mensaje: [Nombre completo] usted es menor de edad, por lo tanto, no puede entrar a la fiesta, por favor devuélvase a su casa.</p>
        <pre>{`
        Proceso fiesta
    
          Definir nombre Como Caracter;
          Definir  apellidos Como Caracter;
          Definir edad Como Entero;

          Escribir "¿Por favor, digite su nombre?";
          Leer nombre;

          Escribir "¿Por favor, digite sus apellidos?";
          Leer apellidos;

          Escribir "Por favor, digite su edad:";
          Leer edad;

          Limpiar Pantalla;

          Si edad >= 18 Entonces;
            Escribir nombre, " ", apellidos,  " usted es mayor de edad, por lo tanto puede entrar a la fiesta.";
          SiNo
            Si edad < 18 y edad >= 0  Entonces;
              Escribir  nombre, " ", apellidos,  "  usted es menor de edad, por lo tanto, no puede entrar a la fiesta, por favor devuélvase a su casa.";
            SiNo
              Si edad < 0 Entonces;
                Escribir "Solo digitar número y que sean positivos";
              FinSi		
            FinSi
          FinSi	

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">4. La video tienda que presta sus servicios de alquiler de películas a los usuarios del barrio el Porvenir, requiere de una aplicación que permita registrar el alquiler de las películas que adquieren sus usuarios. Para cada usuario se debe permitir la opción de alquilar película, consultar películas disponibles y recibir película en la video tienda con la opción de realizar anotaciones sobre estas si se llegan a presentar daños u otra novedad sobre la película.</p>
        <pre>{`
        Proceso alquiler_peliculas
    
          Definir recibir_pelicula, observacion_rta Como Caracter;
          Definir opcion, pelicula, observacion Como Entero;

          Escribir "Bienvenido a la tienda de alquiler del barrio el porvenir";
          Escribir "";
          Escribir "Eliga alguna opción:";
          Escribir "1.alquilar película";
          Escribir "2. consultar películas disponibles";
          Escribir "3. recibir película en la video tienda";
          Leer opcion;

          Limpiar Pantalla;

          Segun opcion hacer
            1: 
              Escribir "Cual pelicula de las opciones desea alquilar:";
              Escribir "";
              Escribir "1. Avengers";
              Escribir "2. Liga de la Justicia";
              Escribir "3. X-Men";
              Escribir "4. Hombres de Negro";
              Leer pelicula;

              Limpiar Pantalla;

              Segun pelicula Hacer
                1: 
                  Escribir "Gracias por preferirnos, seleccionaste la pelicula:";
                  Escribir "Avengers";
                2: 
                  Escribir "Gracias por preferirnos, seleccionaste la pelicula:";
                  Escribir "Liga de la Justicia";
                3: 
                  Escribir "Gracias por preferirnos, seleccionaste la pelicula:";
                  Escribir "X-Men";
                4: 
                  Escribir "Gracias por preferirnos, seleccionaste la pelicula:";
                  Escribir "Hombres de Negro";
              FinSegun
            2:
              Escribir "Las peliculas disponibles en este momento son:";
              Escribir "";
              Escribir "1. Avengers";
              Escribir "2. Liga de la Justicia";
              Escribir "3. X-Men";
              Escribir "4. Hombres de Negro";
            3:
              Escribir "Menú recibir película en la video tienda";
              Escribir "";
              Escribir "Opcion 1 - Realizar anotaciones/novedades de la pelicula recibida";
              Escribir "Opcion 2 - No Realizar ninguna anotacion ó novedad";
              Leer observacion;

              Limpiar Pantalla;

              Si observacion = 1 Entonces
                Escribir "Escribre la observación encontradas: ";
                Leer observacion_rta;
                Limpiar Pantalla;
                Escribir "Observación registrada; ", observacion_rta;
              SiNo
                Si observacion = 2 Entonces
                  Escribir "NO hubo ninguna novedad!! ;)";
                SiNo
                  Si (observacion <> 1 o observacion <> 2) Entonces
                    Escribir "Opción no existe, elige alguna de las 2 habilitadas";
                  FinSi	
                FinSi			
              FinSi
            De Otro Modo:
              Escribir "Opción incorrecta o no existe";
          FinSegun;

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">5. La Droguería Mi Salud presta sus servicios en la localidad de Suba y requiere una aplicación para poder facturar los productos que vende a sus clientes y para ello, los productos tienen unas características que deben indicársele al cliente para que pueda escoger el producto a comprar. Para cada cliente, se tienen las opciones de compra de producto, consulta de precios por producto y devoluciones en caso de que se presenten.</p>
        <pre>{`
        Proceso drogueria
    
          Definir opcion Como Entero;	
          Definir opcion_producto Como Entero;
          Definir costo_compra Como Entero;

          Definir opcion1 Como Caracter;
          Definir opcion2 Como Caracter;
          Definir opcion3 Como Caracter;

          opcion1 <- "Compra de Producto";
          opcion2 <- "Consulta de Producto";
          opcion3 <- "Devolución de Producto";

          Definir producto1 Como Caracter;
          Definir producto2 Como Caracter;
          Definir producto3 Como Caracter;

          producto1 <- "Jarabe";
          producto2 <- "Alcohol";
          producto3 <- "Tapabocas";

          Definir valor1 Como Entero;
          Definir valor2 Como Entero;
          Definir valor3 Como Entero;

          valor1 <- 10000;
          valor2 <- 5000;
          valor3 <- 2000;

          Definir cantidad Como Entero;;


          Escribir "Bienvenido al ménu de Droguería Mi Salud";
          Escribir "Opcion 1. Compra de Producto";
          Escribir "Opcion 2. Consulta de Producto";
          Escribir "Opcion 3. Devolución de Producto";
          Leer opcion;

          Limpiar Pantalla;

          Si opcion = 1 Entonces;
            Escribir "Sr(a) bienvenido al menú de compras, donde se realizara su pago";
            Escribir "Seleccione el producto a comprar: 1.Jarabe, 2.Tapabocas, 3.Alcohol";
            Leer opcion_producto;
            Si opcion_producto = 1 Entonces;
              Escribir "Indique la cantidad a comprar:";
              Leer cantidad;
              costo_compra <- cantidad * valor1;
              Limpiar Pantalla;
              Escribir "El total a pagar por ", cantidad, " ", producto1, "(s) es de: $", costo_compra;
            SiNo
              Si opcion_producto = 2 Entonces;
                Escribir "Indique la cantidad a comprar:";
                Leer cantidad;
                costo_compra <- cantidad * valor2;
                Limpiar Pantalla;
                Escribir "El total a pagar por ", cantidad, " ", producto2, "(s) es de: $", costo_compra;
              SiNo
                Si opcion_producto = 3 Entonces;
                  Escribir "Indique la cantidad a comprar:";
                  Leer cantidad;
                  costo_compra <- cantidad * valor3;
                  Limpiar Pantalla;
                  Escribir "El total a pagar por ", cantidad, " ", producto3, "(s) es de: $", costo_compra;
                FinSi
              FinSi
            FinSi
          SiNo
            Si opcion = 2 Entonces;
              Escribir "Sr(a) bienvenido al menú de consulta de su producto, donde conocera las caracteristicas";
              Escribir "Seleccione el producto a consultar: 1.Jarabe, 2.Alcohol, 3.Tapabocas";
              Leer opcion_producto;
              Si opcion_producto = 1 Entonces;
                cantidad <- 1;
                Limpiar Pantalla;
                Escribir "El precio del ", producto1, " es de: $", valor1;
              SiNo
                Si opcion_producto = 2 Entonces;
                  cantidad <- 1;
                  Limpiar Pantalla;
                  Escribir "El precio del ", producto2, " es de: $", valor2;
                SiNo
                  Si opcion_producto = 3 Entonces;
                    cantidad <- 1;
                    Limpiar Pantalla;
                    Escribir "El precio del ", producto3, " es de: $", valor3;
                  FinSi
                FinSi
              FinSi
            SiNo
              Si opcion = 3 Entonces;
                Escribir "Sr(a) bienvenido al menú de devolución de productos";
                Escribir "Seleccione el producto a devolver: 1.Jarabe, 2.Tapabocas, 3.Alcohol";
                Leer opcion_producto;
                Si opcion_producto = 1 Entonces;
                  Escribir "Indique la cantidad a devolver:";
                  Leer cantidad;
                  costo_compra <- cantidad * valor1;
                  Limpiar Pantalla;
                  Escribir "Devolucion de ", cantidad, " ", producto1, " por valor de: $", costo_compra;
                SiNo
                  Si opcion_producto = 2 Entonces;
                    Escribir "Indique la cantidad a devolver:";
                    Leer cantidad;
                    costo_compra <- cantidad * valor2;
                    Limpiar Pantalla;
                    Escribir "Devolucion de ", cantidad, " ", producto2, " por valor de: $", costo_compra;
                  SiNo
                    Si opcion_producto = 3 Entonces;
                      Escribir "Indique la cantidad a devolver:";
                      Leer cantidad;
                      costo_compra <- cantidad * valor3;
                      Limpiar Pantalla;
                      Escribir "Devolucion de ", cantidad, " ", producto3, " por valor de: $", costo_compra;
                    FinSi
                  FinSi
                FinSi
              FinSi		
            FinSi
          FinSi	

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">6. El taller de motos "El Maquinista" recibe motocicletas de alto cilindraje para realizar las respectivas revisiones y requiere una aplicación que le permita registrar los servicios generados a sus clientes. Para cada motocicleta se debe tener registro del ingreso al taller y las observaciones por parte del cliente. También debe existir registro de salida del taller con las novedades y otra de arreglos hechos por el mecánico en caso de que se requiera inventariar cambios repuestos en la motocicleta al entregarla.</p>
        <pre>{`
        Proceso taller_motos
    
          Definir opcion Como Entero;
          Definir cliente Como Caracter;
          Definir moto Como Caracter;
          Definir observaciones_cliente Como Caracter;
          Definir novedades Como Caracter;
          Definir arreglos Como Caracter;

          Escribir "Ménu Taller de Motos El Maquinista";
          Escribir "Elija la opción 1.Ingreso registro al taller, 2. Registro salida del taller.";
          Leer opcion;

          Limpiar Pantalla;

          Si opcion = 1 Entonces;
            Escribir "Ménu ingreso: Datos de registro de ingreso al taller:";
            Escribir "Nombres y apellidos del cliente:";
            Leer cliente;
            Escribir "Datos tipo motocicleta";
            Leer moto;
            Escribir "Observaciones por parte del cliente:";
            Leer observaciones_cliente;
            Limpiar Pantalla;
            Escribir "Datos registrados de ingreso:";
            Escribir "Cliente: ", cliente;
            Escribir "Caracteristicas de moto: ", moto;
            Escribir "Observaciones realizadas por el cliente: ", observaciones_cliente;
          SiNo
            Si opcion = 2 Entonces;
              Escribir "Ménu salida: Datos de salida del taller:";
              Escribir "Nombres y apellidos del cliente:";
              Leer cliente;
              Escribir "Datos tipo motocicleta";
              Leer moto;
              Escribir "Datos novedades encontradas en la moto:";
              Leer novedades;
              Escribir "Datos arreglos realizados a la moto";
              Leer arreglos;
              Limpiar Pantalla;
              Escribir "Datos de salida del taller:";
              Escribir "Cliente: ", cliente;
              Escribir "Caracteristicas de moto: ", moto;
              Escribir "Novedades encontradas: ", novedades;
              Escribir "Arreglos realizados: ", arreglos;
            FinSi
          FinSi	

        FinProceso
          `}</pre>
      </div>
      
      <YoutubeEmbed embedId="watch?v=hG1MpPq5RqU" />

      <div>
        <p className="enunciado-programas">7. La Secretaría de Salud Municipal requiere de una aplicación que le permita calcular el IMC (Índice de masa corporal) y requiere los datos peso en kilogramos y estatura en metros Para cada persona encuestada adicional a los datos suministrados, debe mostrar el resultado para cada uno y establecer en qué rango se encuentra (bajo peso, normal, sobrepeso y obeso).</p>
        <pre>{`
        Proceso secretaria_salud
    
          Definir peso Como Entero;
          Definir estatura Como Entero;
          Definir usuario Como Caracter;
          Definir IMC Como Real;

          Escribir "Ménu Consulta IMC (Índice de masa corporal) ";
          Escribir "Por favor ingrese los siguientes datos:";
          Escribir "Nombres y apellidos usuario:";
          Leer usuario;
          Escribir "Por favor ingrese peso de usuario:";
          Leer peso;
          Escribir "Por favor ingrese estatura de usuario:";
          Leer estatura;

          IMC <- peso / ((estatura/100) * (estatura/100));

          Si IMC < 18.5 Entonces;
            Escribir "Usuario: ", usuario, " Nivel de peso: Bajo peso, IMC: ", IMC;
          SiNo
            Si IMC >= 18.5 Y IMC < 24.9 Entonces;
              Escribir "Usuario: ", usuario, " Nivel de peso: Normal, IMC: ", IMC;
            SiNo
              Si IMC >= 25 Y IMC <= 29.9 Entonces;
                Escribir "Usuario: ", usuario, " Nivel de peso: Sobrepeso, IMC: ", IMC;
                Si IMC > 30 Entonces;
                  Escribir "Usuario: ", usuario, " Nivel de peso: Obesidad, IMC: ", IMC;
                FinSi
              FinSi		
            FinSi
          FinSi	

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">8. El pastelero Don Carlos es el mejor pastelero de la ciudad y requiere una aplicación que le permita registrar los pedidos de los clientes en cuanto a las tortas que realiza. Cada torta tiene unas características propias como sabor, cantidad (porciones) y decoraciones). Se requiere que la aplicación permita registrar los pedidos, las tortas disponibles y las ventas que se registren diariamente.</p>
        <pre>{`
        Proceso pastelero
    
          Definir cliente Como Caracter;
          Definir opcion_torta Como Entero;
          Definir opcion_sabor Como Entero;
          Definir opcion_decoracion Como Entero;
          Definir cantidad_porciones Como Entero;

          Definir torta Como Caracter;
          Definir sabor Como Caracter;
          Definir decoracion Como Caracter;

          Definir valor_torta Como Entero;
          Definir valor_sabor Como Entero;
          Definir valor_decoracion Como Entero;

          Definir valor_porcion Como Entero;
          valor_porcion <- 1000;

          Definir valor_venta Como Entero;


          Escribir "Ménu Pasteleria Don Carlos";
          Escribir "Por favor registrar los datos del pedido:";
          Escribir "Por favor registrar datos cliente:";
          Leer cliente;

          Limpiar Pantalla;

          Escribir "Elija la opciones de torta disponibles:";
          Escribir "Opciones: 1.Pequeña, 2.Mediana, 3.Grande";
          Leer opcion_torta;
          Escribir "Opciones: 1.Chocolate, 2.Fresa, 3.Frutos rojos";
          Leer opcion_sabor;
          Escribir "Opciones: 1.Cumpleaños, 2.Graduación, 3.Matrimonio";
          Leer opcion_decoracion;
          Escribir "Elija la cantidad de que cantidad de porciones necesita de la torta:";
          Leer cantidad_porciones;

          Limpiar Pantalla;


          Si opcion_torta = 1 Entonces;
            torta <- "pequeña";
            valor_torta <- 15000;
          SiNo
            Si opcion_torta = 2 Entonces;
              torta <- "mediana";
              valor_torta <- 25000;
            SiNo
              Si opcion_torta = 3 Entonces;
                torta <- "grande";
                valor_torta <- 50000;
              FinSi		
            FinSi
          FinSi

          Si opcion_sabor = 1 Entonces;
            sabor <- "chocolate";
            valor_sabor <- 6000;
          SiNo
            Si opcion_sabor = 2 Entonces;
              sabor <- "fresa";
              valor_sabor <- 5000;
            SiNo
              Si opcion_sabor = 3 Entonces;
                sabor <- "frutos rojos";
                valor_sabor <- 8000;
              FinSi		
            FinSi
          FinSi

          Si opcion_decoracion = 1 Entonces;
            decoracion <- "cumpleaños";
            valor_decoracion <- 5000;
          SiNo
            Si opcion_decoracion = 2 Entonces;
              decoracion <- "graduacion";
              valor_decoracion <- 8000;
            SiNo
              Si opcion_decoracion = 3 Entonces;
                decoracion <- "matrimonio";
                valor_decoracion <- 15000;
              FinSi		
            FinSi
          FinSi

          valor_venta <- (valor_porcion * cantidad_porciones) + valor_decoracion + valor_sabor + valor_torta;

          Escribir "Registro de venta:";
          Escribir "Cliente: ", cliente;
          Escribir "Torta de tamaño: ", torta;
          Escribir "Torta de sabor: ", sabor;
          Escribir "Torta con una decoracion de: ", decoracion;
          Escribir  "Para una cantidad de porciones: ", cantidad_porciones;
          Escribir "El costo de la torta es $", valor_venta;

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">9. El profesor de geometría está explicando a sus estudiantes las fórmulas para calcular el área de diferentes figuras geométricas, para ello requiere una aplicación que le facilite el ejercicio solicitándole los valores al estudiante. La aplicación debe permitir que el estudiante seleccione si desea calcular el área de un rectángulo, triángulo o trapecio. No olvide solicitar los datos necesarios para realizar cada cálculo y mostrar su respectivo resultado.</p>
        <pre>{`
        Proceso calculo_area
    
          Definir opcion_calcular Como Entero;
          Definir area Como Entero;
          Definir altura Como Entero;
          Definir base Como Entero;
          Definir base_mayor Como Entero;


          Escribir "Ménu calculo áreas";
          Escribir "Por favor seleccionar la opción que desea calcular:";
          Escribir "1.Rectángulo, 2.Triángulo, 3.Trapecio.";
          Leer opcion_calcular;

          Si opcion_calcular = 1 Entonces;
            Escribir "Digite la base:";
            Leer base;
            Escribir "Digite la altura:";
            Leer altura;
            area <- base * altura;
            Escribir "El área del rectangulo es: ", area, " mts2";
          SiNo
            Si opcion_calcular = 2 Entonces;
              Escribir "Digite la base:";
              Leer base;
              Escribir "Digite la altura:";
              Leer altura;
              area <- (base * altura) / 2;
              Escribir "El área del triangulo es: ", area, " mts2";
            SiNo
              Si opcion_calcular = 3 Entonces;
                Escribir "Digite la base menor:";
                Leer base;
                Escribir "Digite la base mayor:";
                Leer base_mayor;
                Escribir "Digite la altura:";
                Leer altura;
                area <- ((base_mayor + base) / 2) * altura;
                Escribir "El área del trapecio es: ", area, " mts2";

              FinSi		
            FinSi
          FinSi

        FinProceso
          `}</pre>
      </div>

      <div>
        <p className="enunciado-programas">10. El banco "Su banco fiel" es un banco que inicia sus actividades financieras y necesita una aplicación para llevar las cuentas de sus usuarios; por lo tanto, se sugiere que la cuenta tenga los atributos titular y cantidad. Para cada cliente las cuentas permitirán realizar ingresos, retiros o consultas de valor. En los ingresos no se pueden insertar valores negativos y para los retiros el valor no puede ser mayor al valor que tiene en la cuenta.</p>
        <pre>{`
          Proceso cuenta_bancaria_usuarios
    
          Definir titular Como Caracter;
          titular <- "Ernesto Perez";

          Definir cantidad Como Entero;
          cantidad <- 1000000;

          Definir opcion_cuenta Como Entero;
          Definir valor_ingreso Como Entero;
          Definir valor_retiro Como Entero;

          Escribir "Bienvenido al Ménu de Su Banco Fiel";
          Escribir "Sr(a) ", titular;
          Escribir "Seleccione la operación que desea realizar";
          Escribir "1. Consigar dinero, 2. Retirar dinero, 3. Consultar cuenta";
          Leer opcion_cuenta;

          Limpiar Pantalla;

          Si opcion_cuenta = 1 Entonces;
            Escribir "Por favor ingrese el valor a consignar en su cuenta:";
            Leer valor_ingreso;
            Si valor_ingreso <= 0 Entonces
              Escribir "No puede ingresar valor negativos o en 0";
            FinSi
            cantidad <- cantidad + valor_ingreso;
          SiNo
            Si opcion_cuenta = 2 Entonces;
              Escribir "Por favor ingrese el valor a retirar de su cuenta:";
              Leer valor_retiro;
              Si valor_retiro <= 0 Entonces
                Escribir "No puede ingresar valor negativos o en 0";
              FinSi
              Si valor_retiro > cantidad Entonces
                Escribir "No cuenta con el saldo disponible para realizar el retiro";
              FinSi
              cantidad <- cantidad - valor_retiro;
            SiNo
              Si opcion_cuenta = 3 Entonces;
                Escribir "El saldo de su cuenta en este momento es de:";
                Escribir "$ ", cantidad;
              FinSi		
            FinSi
          FinSi

        FinProceso
          `}</pre>
      </div>

    </>
  )
}

export default TallerCondicionales