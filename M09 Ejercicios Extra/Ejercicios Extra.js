/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
    var l = []
    var u =[]
    for (var i in objeto){
     u.push(i)
     u.push(objeto[i])
     l.push(u)
     u = []
    
   }
    

return l
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var contador = {}
   for (i = 0; i < string.length; i ++){
      var letra = string[i]
      if (contador.hasOwnProperty(letra)){

        contador[letra] ++
      } else {
        contador[letra] = 0
        contador[letra] ++
        
      }
    
   }
   function ordenado(objeto){
      var ordenado = {}
      var propiedades = Object.keys(objeto).sort()
      propiedades.forEach(function (propiedades){
          ordenado[propiedades] = objeto[propiedades]
      })
      return ordenado
     }
  
  
  
  return ordenado(contador)
  
   
}
     
      


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var ma = []
   var min = []
   for (i = 0; i < string.length; i ++){
      var letra = string[i]
      var s = letra.toUpperCase()
      if (letra === s){
         min.push(letra)
      } else {     
      }
    }
   for (i = 0; i < string.length; i ++){
        var letra = string[i]
        var s = letra.toUpperCase()
        if (letra === s){
        } else {
         min.push(letra)     
        }
    }
   var h = string.split('')
   for (i = 0; i < h.length; i ++){
        letra = min[i]
         h[i] = letra
      }
   string = h.join('')
   return string
   }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabra = frase.split(" ")
   var stringretrun = ""
   for (i = 0; i < palabra.length; i++){
        var invertida = "";
        for (var j = palabra[i].length - 1; j >=0; j--){
            invertida += palabra[i][j];
        }
        stringretrun  += invertida + " ";


    


    }
    return stringretrun.trim();

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var l = numero.toString()
   var x = l.split ('')
   var n = x.reverse('')
   var t = n.join('')
   var p = parseInt(t)


   if (numero === p ){
    return ("Es capicua")
   } else {
    return("No es capicua")
   }



}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var x = string.split('')
   var n = []
   for (i = 0; i < string.length; i ++){
    var letra = x[i]
    if (letra == "a" || letra == "b" || letra == "c"){

    }else{
        n.push(letra)
    }
   }
    var l = n.join('')
    string = l
    return string
 
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
    arrayOfStrings.sort(function(a,b){
    return a.length - b.length
    

})
return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var n = []
   if (array1.length >= array2.length){
    for (i = 0; i < array2.length; i ++){
        if(array1.includes(array2[i])){
        n.push(array2[i])   
        }  
      }  
   }
   if (array1.length <= array2.length){
    for (i = 0; i < array1.length; i ++){
        if(array2.includes(array1[i])){
        n.push(array1[i])   
        }   
      }  
   }
return n
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
