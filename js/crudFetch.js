export const GetAlldatos = async (url, tabla) => {
  let respuesta;
  try {
    respuesta = await fetch(`${url}/${tabla}`);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      return datos;
    } else {
      throw { status: respuesta.status, statusText: respuesta.statusText };
    }
  } catch (error) {
    let message = error.statusText || "Ocurrio un Error";
    let status = error.status || "";
    Swal.fire({
      icon: `error`,
      title: `${status} ${message}`,
      text: "Asegúrate de que la API esté en funcionamiento y disponible en este momento.",
    });
  }
};

export const Getdatos = async (url, tabla, campo, valor) => {
  let respuesta;
  try {
    respuesta = await fetch(`${url}/${tabla}?${campo}=${valor}`);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      return datos;
    } else {
      throw { status: respuesta.status, statusText: respuesta.statusText };
    }
  } catch (error) {
    let message = error.statusText || "Ocurrio un Error";
    let status = error.status || "";
    Swal.fire({
      icon: `error`,
      title: `${status} ${message}`,
      text: "Asegúrate de que la API esté en funcionamiento y disponible en este momento.",
    });
  }
};

export const PostDatos = async (url, tabla, datos) => {
  try {
    let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json ;charset=utf-8",
        },
        body: JSON.stringify(datos),
      },
      respuesta = await fetch(`${url}/${tabla}`, options);

    if (!respuesta.ok) {
      throw { status: respuesta.status, statusText: respuesta.statusText };
    }
  } catch (error) {
    let message = error.statusText || "Ocurrio un Error";
    let status = error.status || "";
    Swal.fire({
      icon: `error`,
      title: `${status} ${message}`,
      text: "Asegúrate de que la API esté en funcionamiento y disponible en este momento.",
    });
  }
};
