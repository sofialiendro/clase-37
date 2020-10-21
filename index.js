let gatitosEnAdopcion = 3

let quiereAdoptarGatito = prompt("Quiere adoptar un gatito?")

// Codigo sin FOR, o sea, repetitivo si tengo muchos gatitos

// if (quiereAdoptarGatito === "si") {
//     alert("felicidades")
//     gatitosEnAdopcion-- //esto significa q se resta 1
// }

// console.log("nos quedan", gatitosEnAdopcion, "gatitos en adopcion")


// Código con FOR, se va a repetir el prompt hasta q no haya mas gatitos, o sea 3 veces

for (let i = 1; i <= gatitosEnAdopcion; i++) {
    let quiereAdoptar = prompt("quiere adoptar un gatito?")
    if (quiereAdoptar == "si") {
        alert("felicidades, adoptaste!")
        gatitosEnAdopcion--
    }
}


// ejemplo de array con strings

let listaDeNombres = [ "Sofia", "Nombre1", "Nombre2" ]

console.log(listaDeNombres)
console.log(listaDeNombres[2].toUpperCase) // acá pasaría Nombre2 a mayúsculas


// 

for (let i = 0 < listaDeNombres.length; i++) {
    const nombre = listaDeNombres[i];
    console.log(nombre.toUpperCase())
}  

for (let nombre of listaDeNombres) {
    console.log(nombre.toUpperCase)
}


// arrays dentro de arrays

let listaDeEdades = [22, 23, undefined]

let listaDeArrays = [[ "Sofia", "Nombre1", "Nombre2" ], [22, 23, undefined]]

// listaDeArrays tiene dos elementos que a su vez cada uno tiene 3 elementos

console.log(listaDeArrays)

listaDeArrays[0]  // es igual q nombrar a la listaDeNombres xqe esta en la posicion 0 de la listaDeArrays
listaDeArrays[0][2] // es igual a nombrar "Nombre2" de la listaDeNombres dentro de listaDeArrays 

// Si hay muchos arrays, es mejor dividirlos con un enter:

// ARRAY BIDIMENSIONAL o "matriz" - manera basica de representar tablas, grillas en codigo, asi relacionamos datos: 

let listaDeArrays = [
    [ "Sofia", "Nombre1", "Nombre2" ], 
    [22, 23, undefined]
    // a sofia le corresponde 22, y asi sucesivamente
]


// ARRAY TRIDIMENSIONAL (tipico de videojuegos)

let listaDeArrays3 = [
    [
        [], [], []
    ],
    [
        [], [], []
    ],
    [
        [], [], []
    ]
    
]

listaDeArrays3[0][0][0]
             // alto - largo - profundo


// Acceder a los datos de un array UNIDIMENSIONAL

for (let nombre of listaDeNombres) {
    console.log(nombre)
}

// Acceder a los datos de un array BIDIMENSIONAL

for (let array of listaDeArrays) {
    for (let elemento of array) {
        console.log(elemento) // este for es para recorrer el primer array con los nombres, cuando termina, el for mas grande recorre el de las edades
        
    }
}