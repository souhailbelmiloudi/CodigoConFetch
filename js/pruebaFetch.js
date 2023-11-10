import { GetAlldatos, PostDatos, Getdatos } from "./crudFetch.js";

const baseURL = "http://localhost:2020";
const table = "conceptos";

const botonAgregar = document.getElementById("boton");
const botonObtener = document.getElementById("boton2");
const inputNombre = document.getElementById("nombre");
const inputCorreo = document.getElementById("correo");
const tablaElemento = document.getElementById("table");
const botonBuscar = document.getElementById("buscar");

let datosFormulario = [];

const CabeceraTabla = () => {
  tablaElemento.innerHTML = `
    <tr>
      <th>Nombre</th>
      <th>Email</th>
    </tr>`;
};

const FilaTabla = (datos) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${datos.nombre}</td>
    <td>${datos.email}</td>`;
  tablaElemento.appendChild(tr);
};

const obtenerDatos = async () => {
  try {
    const datosResponse = await GetAlldatos(baseURL, table);
    CabeceraTabla();
    datosResponse.forEach((datos) => FilaTabla(datos));
  } catch (error) {
    console.log("Error al obtener datos:", error);
  }
};

const agregarDatosALista = () => {
  datosFormulario.push({
    nombre: inputNombre.value,
    email: inputCorreo.value,
  });
};

const guardarDatos = () => {
  datosFormulario.forEach((datos) => PostDatos(baseURL, table, datos));
};

const buscarDatos = async () => {
  try {
    const resultado = await Getdatos(
      baseURL,
      table,
      "nombre",
      inputNombre.value
    );
    CabeceraTabla();
    resultado.forEach((datos) => FilaTabla(datos));
  } catch (error) {
    console.log("Error al buscar datos:", error);
  }
};

botonObtener.addEventListener("click", obtenerDatos);
botonAgregar.addEventListener("click", agregarDatosALista);
botonAgregar.addEventListener("click", guardarDatos);
botonBuscar.addEventListener("click", buscarDatos);
