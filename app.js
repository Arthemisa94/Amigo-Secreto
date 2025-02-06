let amigos = []; //Lista para almacenar nombres

//Funcion para agregar nombres
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    //Verificar que el campo de entrada no esté vacío    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre."); //Muestra alerta si no hay texto.
        return;
    }

    //Validad que el nombre no este duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    amigos.push(nombreAmigo); //Agrega el nombre a la lista.
    inputAmigo.value = ""; //Borra el texto del campo de entrada.
    actualizarLista(); //Llama a la funcion actualizar lista.
}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo dentro del contenedor de la lista.

    //Recorrer el array usando for
    for (let i = 0; i < amigos.length; i++) { //Iterar sobre cada elemento de la lista
        const li = document.createElement('li'); //Crea un nuevo elemento <li>
        li.textContent = amigos[i]; //Asigna el texto del elemento li al nombre del amigo actual en la lista.
        listaAmigos.appendChild(li); //Agrega el elemento li al contenedor de la lista en el DOM
    }
}

//Funcion para elegir amigo de manera aleatoria
function sortearAmigo() {
    if (amigos.length === 0) { //Comprueba si la lista 'amigos' está vacía
        alert("No hay nombres de amigos. Agregar al menos uno"); //Muestra una alerta si no hay amigos en la lista.
        return; 
    }

    //Generar un índice aleatorio

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera número aleatorio
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre del array.
    const resultado = document.getElementById('resultado'); //Obtiene el elemento del DOM con id "resultado"
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; //Actualiza el contenido del elemento con el nombre sorteado.
}