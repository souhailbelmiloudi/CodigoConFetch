import { GetAlldatos, PostDatos, Getdatos } from "./crudFetch.js";

const url = "http://localhost:2020";
const tabla = "conceptos";

const botonGuarda = document.getElementById("boton");
const botonObten = document.getElementById("boton2");
const nombre = document.getElementById("nombre");
const anadeTabla = document.getElementById("anadeTabla");
const correo = document.getElementById("correo");
const tableform = document.getElementById("table");
const buscar = document.getElementById("buscar");
let datosForm = [
  /*nombre: "souhail",
    email: "souhail@gmail.com",*/
];

const cabeceraTable = () => {
  tableform.innerHTML = ` 
  <tr>
  <th>Nombre</th>
  <th>Email</th>
  </tr>`;
};

//obtener datos con fetch
botonObten.addEventListener("click", async () => {
  const res = await GetAlldatos(url, tabla);
  cabeceraTable();
  res.map((el) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${el.nombre}</td>
    <td>${el.email}</td>`;
    tableform.append(tr);
  });
});
//añadir un objeto a la lista
anadeTabla.addEventListener("click", (e) => {
  datosForm.push({
    nombre: nombre.value,
    email: correo.value,
  });
});

botonGuarda.addEventListener("click", (e) => {
  datosForm.map((el) => PostDatos(url, tabla, el));
});

buscar.addEventListener("click", async () => {
  const resultado = await Getdatos(url, tabla, "nombre", nombre.value);
  cabeceraTable();
  resultado.map((el) => {
    let tr = document.createElement("tr");

    tr.innerHTML = `
  
    <td>${el.nombre}</td>
        <td>${el.email}</td>`;
    tableform.append(tr);
  });
});
