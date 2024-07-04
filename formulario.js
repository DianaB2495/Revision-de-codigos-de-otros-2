var formulario = document.querySelector("formulario");

formulario.onsubmit = function(e) {

  e.preventDeafult(); // Previene el envio por defecto del formualario

  //CAaptura los elementos del formulario por su posición
  
  var nombre = formulario.elements[0];
  var edad = formulario.elements[1];
  var nacionalidad = formulario.elements[2];

 // Obtiene el valor del nombre, edad y nacionalidad seleccionada
  var nombre = nombreInput.value;
  var edad = edadInput.value;
  var indexNacionalidad = nacionalidadSelect.selectedIndex;
  var nacionalidad = nacionalidadSelect.options[indexNacionalidad].value;

  // Muestra en consola el nombre, edad y nacionalidad para depuracion

  console.log(nombre, edad, nacionalidad);

  // Validacion del formulario

  if (nombre.length === 0) {
    // Agrega clase de error si el nombre esta vacio
    nombreInput.classList.add("error");
  }
  if (edad.length === 0 || isValidNumber(edad) || < 18 || edad > 120) {

   // Agrega clase de error si la edad no esta en el formato o rango valido
   edadInput.classList.add("error");
  }

  // Si el nombre no esta vacio y la edad esta dentro del rango, agregar invitado
  if (nombre.length > 0 && isValidNumber(edad) && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}

// Funcion para verificar si un valor es un numero valido

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

// Funcion para crear elementos span e input para mostrar detalles del invitado

function crearElemento(descripcion, valor) {
var span = document.createElement("span")
var input = document.createElement("input")
var br = document.createElement("br");
span.textContent = descripcion + ": ";
input.value = valor 
elementoLista.appendChild(span);
elementoLista.appendChild(input);
elementoLista.appendChild(br);
}

// Crea elementos para mostrar nombre, edad y nacionalidad del invitado

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

// Crea un botón para eliminar invitado

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var br = document.createElement("br");
elementoLista.appendChild(br);
elementoLista.appendChild(botonBorrar);

// Evento al hacer clic en el botón de eliminar invitado

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.removeChild()
  }
}