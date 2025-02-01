// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
//Variables Globales

let amigos = [];

//Agregar amigos al array, validar campo vacio y limpiar campo.
function agregarAmigo() {
    let nombreAmigoInsertado = document.getElementById('amigo').value;
    if ( nombreAmigoInsertado == "") {
       
        alert("Ingrese un nombre, es obligatorio");

    } else {
        amigos.push(nombreAmigoInsertado);
        document.getElementById('amigo').value = '';
    };

};

