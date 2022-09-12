/*// leer HTML desde JS
//querySelectorAll selecciona todos los elementos del mismo tipo
//querySelector selecciona el primer elemento que encuentre en la estructura HTML, podemos usar la clase o el ID como en CSS para seleccionar un elemento en específico.

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const pClass = document.getElementsByClassName("p_class");
const pId = document.getElementById("p_id");
const input = document.querySelector("input");

console.log(h1); //se imprime todo el elemento HTML

console.log({h1, p, pClass, pId, input}); //al poner las opciones a imprimir entre corchetes se imprime como si fueran un objeto


//para modificar o "sobreescribir" un elemento HTML se usa innerHTML, dentro de este se pueden usar otros elementos HTML. También podemos usar innerText, sin embargo este no permite ingresar otros elementos HTML.
h1.innerHTML = "Hola, mundo! <br> Hola a TODOS!!"
p.innerHTML = `También podemos agregar otros elementos HTML
    <ul><span>Esto es una lista agregada desde JS: </span>
        <li>elemento 1</li>
        <li>elemento 2</li>
    </ul>`

//Se puede acceder a los valores de los atributos de los elementos HTML mediante getAttribute y se pueden modificar mediante setAttribute, primero colocamos el nombre del atributo a medificar y después el valor nuevo que le queremos dar separado por una coma.

console.log(h1.getAttribute("id"));
h1.setAttribute("id", "titulo");
console.log(h1.getAttribute("id"));

//Otra forma de agregar o quitar clases a los elementos es mediante classList.add o classList.remove.
console.log(h1.classList);
h1.classList.add("main-title");
console.log(h1.classList);
h1.classList.remove("primer-titulo");

//Para cambiar o agregar el Value de un input utilizamos .value("nuevo-valor");
/* input.value = "5678";*/
/*input.placeholder = "hola de nuevo";



//Para crear cualquier elemento usamos document.createElement

const img = document.createElement("img");
img.setAttribute("src", "./assets/ejemplo_creacion_elementos_html.jpg");
pId.append(img); //append y appendChild mantienen el contenido anterior, innerHTML reemplaza el contenido por completo
*/

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btn-calcular");
const resultado = document.querySelector("#resultado");

//una de las formas para ecuchar elementos tenemos onlcick, onchange, etc, agregando directamente estas propiedades sobre los elementos HTML, sin embargo podemos usar el addEventListener para facilitar el proceso y no saturar el HTML

//con addEventListener manejamos todo desde JS

btn.addEventListener("click", btnOnClick);

function btnOnClick() {
    console.log("Escuchando al botón");
    resultado.innerHTML = `El resultado es ${(parseInt(input1.value) + parseInt(input2.value))}`;
}