// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
//Variables Globales

let amigos = [];

//Agregar amigos al array, validar campo vacio y limpiar campo.
function agregarAmigo() {
    let nombreAmigoInsertado = document.getElementById('amigo').value;
    if ( nombreAmigoInsertado) {

        amigos.push(nombreAmigoInsertado); //Agrega el nombre a la ultima posicion de amigos[]
        document.getElementById('amigo').value = ''; //Limpia el cajon
        actualizarListaAmigos(); //Agrega los nombres a la lista y la muestra en pantalla

    } else {

        alert("Ingrese un nombre, es obligatorio");

    };

};

//Agregar los nombre a la lista y limpiar la lista.

function actualizarListaAmigos() {
    
    let listaEnPantalla = document.getElementById('listaAmigos');
    listaEnPantalla.innerHTML = ""; //Limpia Lista

    for (let x = 0; x < amigos.length; x++){
       
        let nuevoElementoLista = document.createElement('li'); //Crea Nuevo elemento en la lista
        nuevoElementoLista.textContent = amigos [x]; //Agrega el contenido
        listaEnPantalla.appendChild(nuevoElementoLista); //Agrega el li a la lista

    };

};

