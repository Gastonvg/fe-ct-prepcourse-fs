/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var elemento1 = array[0]  
   return elemento1
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var elemento1 = array[array.length - 1]
   return elemento1
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var long = array.length
   return long
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var sum = array.map((num) => {
      return num + 1;
   })
   return sum
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   palabras = palabras.join(' ')
   return palabras
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  if (array.includes(elemento)){
   return true
  }
  return false
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = 0;
   for (var i = 0; i < arrayOfNums.length; i++){
      suma = (arrayOfNums[i] + suma)
   }
   
   return suma
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var notas = 0
   var promedio = 0
   var cantidad = resultadosTest.length
   for (var i = 0; i < resultadosTest.length; i++){
        notas = (resultadosTest[i]+ notas)
   }
   promedio = notas / cantidad
   return promedio
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var g = 0
   arrayOfNums.forEach(numb => {
      if (numb > g){
         g = numb
      }
      
   });
   return g
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var t = 0
   var s = 0
   if (arguments.length === 0){
      return 0
   } else if (arguments.length === 1){
      t = (arguments[0])
      return t
   } 
   for (i = 0; i < arguments.length; i++){
      if (i === 0){
         t = arguments[0]
         i = i + 1
      }
      t = (t*arguments[i])
   }
   return t
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   c = 0
   array.forEach (numb => {
      if (numb > 18){
         c = c + 1
      }
   })
   return c
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
      if(numeroDeDia === 1 || numeroDeDia === 7){
         return ("Es fin de semana")

      }
      return ("Es dia laboral")
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var d = num.toString()
   d = d.split("")
   if (d[0] === "9"){
      return true
   }  else if (d[0] != 9){
      return false
   }
      
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
  var v = array[0]
for (i = 0; i < array.length; i++){
   if (array[i] != v){
      return false

   } 
}
return true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var l = array.includes('Enero', 'Marzo', 'Noviembre')
   var m = []
   if (l == true) {
      for (i = 0; i < array.length; i ++){
         if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
            m.push(array[i])
         }
      }
      return m

   }
   return ("No se encontraron los meses pedidos")
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var s = 6
   var r = 0
   var t = []
   for (i = 0; (s*i) < 61; i++){
      r = 0 
      r = (s*i)
      t.push(r)
   
   }
   return t
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var t =[]
   for (i = 0; i < array.length; i++){
      if ( array[i] > 100){
         t.push(array[i])
      }
   }
   return t
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   
var v = []
var t = 0
for (i = 0; i < 10; i ++ ){{
    if (num == i){
      return ("Se interrumpió la ejecución")  
      break
      
    }
      num = num+2
      v.push(num)
      
      
}
} return v
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var v = []
   var t = 0
   for (i = 0; i < 10; i ++ ){{
    if (i == 5){
     
      continue
      
     }
      num = num+2
      v.push(num)
      
      
  }
  } return v
  }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
