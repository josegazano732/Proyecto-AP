# Proyecto-AP
Prcaticas GitHub

  # BORDES
* Utiliza las clases **border, border-top, border-right, border-bottom y border-left** para agregar bordes a tus elementos.
* Utiliza las clases border-0, border-top-0, border-right-0, border-bottom-0 y border-left-0 para remover bordes de tus elementos.
* Para mostrar una imagen dentro de un círculo utiliza la clase rounded-circle. Asegúrate que la imagen sea cuadrada.
 
 [Enlace](https://getbootstrap.com/docs/4.0/utilities/borders/)

  # ESPACIOS
 
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

# Display 

Puedes controlar **display** de un elemento utilizando las clases de **d-none,d-inline,d-block y d-flex** (existen otros pero estos son los mas comunes).

Tambien puedes controlar en que tipos de pantalla se aplica el display agregando **sm,md,lg,y xl.** Por ejmplo **d-md-none** aplicaria **display: none** a tabletas o pantallas mas grandes ( **lg** y **xl**).

## Ejemplo : imagen 1
d-inline

<img src="/img/display-inline.jpg">

## Ejemplo : imagen 2
d-block

<img src="/img/display-block.jpg">

[Enlace](https://getbootstrap.com/docs/4.0/utilities/display/)

# TEXTO 

Para alinear el texto utiliza las clases **text-left, text-center, text-right y text-justify**. También 
puedes controlar en qué tipos de pantalla se aplica la alineación. Por ejemplo, **text-md-center** va a centrar el texto a tabletas o pantallas más grandes (lg y xl)

Utiliza las clases text-lowercase, **text-uppercase y text-capitalize** para transformar el texto en 
minúscula, mayúscula y capitalizado, respectivamente.

Por último, existen las clases **font-weight-bold, font-weight-normal, font-weight-light y font-italic**.

[Enlace](https://getbootstrap.com/docs/4.0/utilities/text/)

# FLEXBOX

**d-flex** Para aplicar Flexbox a un elemento utiliza la clase d-flex.
**flex-row, flex-row-reverse, flex-column y flex-column-reverse** Para controlar la dirección del texto
Para controlar la propiedad **justify-content**
**justify-content-start,ustify-content-end,justify-content-center,justify-content-between** y **justify-content-around**


<hr>

# JAVASCRIPT 

<h3>Operador condicional ternario<h3>

El operador condicional es el único operador de JavaScript que necesita tres operadores. El operador asigna uno de dos valores basado en una condición. 

La sintaxis de este operador es: condición? valor1: valor2. Si la condición es verdadera, el operador tomará el valor 1, de lo contrario tomará el valor 2. 

""" var estado = (edad> = 18)? "adulto": "menor"; """