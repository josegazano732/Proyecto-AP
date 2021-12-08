# Proyecto-AP
Prcaticas GitHub
<hr>

# Bootstrap

<hr>


<h3>BORDES<h3>
*Utiliza las clases **border, border-top, border-right, border-bottom y border-left** para agregar bordes a tus elementos.

*Utiliza las clases border-0, border-top-0, border-right-0, border-bottom-0 y border-left-0 para remover bordes de tus elementos.

*Para mostrar una imagen dentro de un círculo utiliza la clase rounded-circle. Asegúrate que la imagen sea cuadrada.
 
 [Enlace](https://getbootstrap.com/docs/4.0/utilities/borders/)

<h3>ESPACIOS<h3>
 
 * Puedes utilizar clases para controlar el margin y padding de tus elementos de forma responsive.
 Las clases que controlan el margin y padding empiezan con m y las que controlan el padding comienzan con p. 
 Por defecto existen 6 tamaños para los espacios: 0 a 5 son los siguientes valores.

 * 0 - eliminar el margin o el padding.
 * 1 - 0.25rem
 * 2 - 0.5rem
 * 3 - 1rem
 * 4 - 1.5rem
 * 5 - 3rem

 Por ejemplo, para agregar un margen de 0.5rem utilizarías la clase m-2. Para un padding de 1rem utilizaríamos la clase p-3.
 También puedes aplicar el **margin o padding** a diferentes lados agregando las siguientes letras a m o p:
 
 - t - aplicar al margin o padding superior (p.e. mt-3 o pt-1).
 - b - aplicar al margin o padding inferior (p.e. mb-1 o pb-5).
 - l - margin o padding izquierdo.
 - r - margin o padding derecho.
 - x - margin o padding derecho e izquierdo.
 - y - margin o padding superior e inferior.
 
* También puedes agregar sm, md, lg y xl para controlar en qué tipos de pantalla se aplica el margin o el padding. Por ejemplo: mt-md-5 sólo agregaría el margen superior de 3rem para tablets o superior.
 
 [Enlace](https://getbootstrap.com/docs/4.0/utilities/spacing/)

<h3>DISPLAY<h3>

Puedes controlar **display** de un elemento utilizando las clases de **d-none,d-inline,d-block y d-flex** (existen otros pero estos son los mas comunes).

Tambien puedes controlar en que tipos de pantalla se aplica el display agregando **sm,md,lg,y xl.** Por ejmplo **d-md-none** aplicaria **display: none** a tabletas o pantallas mas grandes ( **lg** y **xl**).

## Ejemplo : imagen 1
d-inline

<img src="/img/display-inline.jpg">

## Ejemplo : imagen 2
d-block

<img src="/img/display-block.jpg">

[Enlace](https://getbootstrap.com/docs/4.0/utilities/display/)

<h3>TEXTO<h3>

Para alinear el texto utiliza las clases **text-left, text-center, text-right y text-justify**. También 
puedes controlar en qué tipos de pantalla se aplica la alineación. Por ejemplo, **text-md-center** va a centrar el texto a tabletas o pantallas más grandes (lg y xl)

Utiliza las clases text-lowercase, **text-uppercase y text-capitalize** para transformar el texto en 
minúscula, mayúscula y capitalizado, respectivamente.

Por último, existen las clases **font-weight-bold, font-weight-normal, font-weight-light y font-italic**.

[Enlace](https://getbootstrap.com/docs/4.0/utilities/text/)

<h3>FLEXBOX<h3>

**d-flex** Para aplicar Flexbox a un elemento utiliza la clase d-flex.
**flex-row, flex-row-reverse, flex-column y flex-column-reverse** Para controlar la dirección del texto
Para controlar la propiedad **justify-content**
**justify-content-start,ustify-content-end,justify-content-center,justify-content-between** y **justify-content-around**


<hr>

# JAVASCRIPT 
<hr>

<h3>Operador condicional ternario<h3>

El operador condicional es el único operador de JavaScript que necesita tres operadores. El operador asigna uno de dos valores basado en una condición. 

La sintaxis de este operador es: condición? valor1: valor2. Si la condición es verdadera, el operador tomará el valor 1, de lo contrario tomará el valor 2. 

``var estado = (edad> = 18)? "adulto": "menor";``

<h2>Funciones y estructuras<h2>

### SWITCH:
Una sentencia switch permite a un programa evaluar una expresión e intentar igualar el valor de dicha expresión a una etiqueta de caso (case). Si se encuentra una coincidencia, el programa ejecuta la sentencia asociada. Una sentencia switch se describe como se muestra a continuación:

EJEMPLO: La función recibe un color. Devolver el string correspondiente:
  En caso que el color recibido sea "blue", devuleve --> "This is blue"
  En caso que el color recibido sea "red", devuleve --> "This is red"
  En caso que el color recibido sea "green", devuleve --> "This is green"
  En caso que el color recibido sea "orange", devuleve --> "This is orange"
  Caso default: devuelve --> "Color not found"
  Usar el statement Switch.

```
      function colors(color) {
      switch(color) {
      case "blue":
        return "This is blue";
      case "red": 
        return "This is red";
      case "green":
        return "This is green";
      case "orange":
        return "This is orange";
      default: 
      return "Color not found";
        }
      }
```   
Primero busca una cláusula case con una etiqueta que coincide con el valor de la expresión y entonces, transfiere el control a esa cláusula, ejecutando las sentencias asociadas a ella. Si no se encuentran etiquetas coincidentes, busca la cláusula opcional predeterminada y transfiere el control a esa cláusula ejecutando las sentencias asociadas. Si no se encuentra la cláusula predeterminada, el programa continúa su ejecución por la siguiente sentencia al final del switch. Por convención la cláusula por defecto es la última cláusula aunque no es necesario que sea así.

La sentencia opcional break asociada con cada cláusula case asegura que el programa finaliza la sentencia switch una vez que la sentencia asociada a la etiqueta coincidente es ejecutada y continúa la ejecución por las sentencias siguientes a la sentencia switch. Si se omite la sentencia break, el programa continúa su ejecución por la siguiente sentencia que haya en la sentencia switch.

La declaracion de una funcion consiste en:

- Un nombre.
- Una lista de parámetros o argumentos encerrados entre paréntesis.
- Conjunto de sentencias JavaScript encerradas entre llaves.
```
  function suma(x, y) {
  //"x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return (x + y);
  }
```

