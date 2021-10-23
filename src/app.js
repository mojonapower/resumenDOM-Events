/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const actionButton = () => {
  let img = document.createElement("IMG");
  img.src =
    "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59a669fc5bafe88febb3d6cc/gatito-cesped_0.jpg";

  let body = document.getElementsByTagName("BODY");
  body[0].insertBefore(img, body[0].childNodes[3]);
};

let parrafo = document.querySelectorAll("P");
parrafo[0].innerHTML = "Soy el primer parrafo";
parrafo[1].innerHTML = "Soy el segundo parrafo";
parrafo[2].innerHTML = "Soy el tercer parrafo";

let boton = document.getElementById("botoncito");
boton.addEventListener("click", actionButton);

/*
document.querySelector("P").innerHTML = "estamos en el parrafo";
document.querySelector("#primero").innerHTML = "primer item";
document.querySelector(".segundo").innerHTML = "segundo elemento";
let parrafo = document.getElementsByTagName("P");
console.log(parrafo);

document.getElementsByClassName("segundo")[0].innerHTML =
  "segundo parrafo chiques";
document.getElementById("primero").innerHTML = "primer parrafo :D ";

let array = ["Juan Flores", "Freddy", "Caro", "German", "Jhonny"];

let ol = document.querySelector("ol");

  ol[0].innerHTML = `<li>${array[0]}</li>
  <li>${array[1]}</li>
  <li>${array[2]}</li>
  <li>${array[3]}</li>
  <li>${array[4]}</li>`;

for (let i = 0; i < array.length; i++) {
  let li = document.createElement("LI");
  let texto = document.createTextNode(array[i]);
  li.appendChild(texto);
  ol.appendChild(li);
}
let item = document.createElement("LI");
let nombre = document.createTextNode("Saray");
item.appendChild(nombre);
ol.insertBefore(item, ol.childNodes[1]);

//ol.removeChild(ol.childNodes[3]);
let boton = document.getElementsByTagName("button");
let intentos = 0;
boton[0].addEventListener("click", () => {
  if (ol.firstChild && intentos < 3) {
    ol.removeChild(ol.firstChild);
    intentos += 1;
  } else if (intentos >= 3) {
    alert("No quedan elementos a eliminar");
    boton[0].removeEventListener("click", () => {});
  }
});

let poem = document.getElementsByTagName("textarea");
poem[0].addEventListener("change", evento => {
  console.log(evento.target.value);
  if (evento.target.value == "") {
    alert("no puedes dejar el texto vacío >:C");
  }
});
*/
