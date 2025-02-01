// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
//Variables Globales

let amigo = [];

function agregarAmigo() {
    let nombreAmigoInsertado = document.getElementById('amigo').value;
    if ( nombreAmigoInsertado == "") {
       
        alert("Ingrese un nombre, es obligatorio");

    } else {
        amigo.push(nombreAmigoInsertado);
        alert(amigo);
        document.getElementById('amigo').value = '';
    };

};