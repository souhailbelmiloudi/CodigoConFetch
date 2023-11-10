const alert = (error) => {
  const message = error.statusText || "Ocurrió un Error";
  const status = error.status || "";
  Swal.fire({
    icon: "error",
    title: `${status} ${message}`,
    text: "Asegúrate de que la API esté en funcionamiento y disponible en este momento.",
  });
};

export const GetAlldatos = async (url, tabla) => {
  try {
    const respuesta = await fetch(`${url}/${tabla}`);
    if (respuesta.ok) {
      return await respuesta.json();
    } else {
      throw { status: respuesta.status, statusText: respuesta.statusText };
    }
  } catch (error) {
    alert(error);
  }
};

export const Getdatos = async (url, tabla, campo, valor) => {
  try {
    const respuesta = await fetch(`${url}/${tabla}?${campo}=${valor}`);
    if (respuesta.ok) {
      return await respuesta.json();
    } else {
      throw { status: respuesta.status, statusText: respuesta.statusText };
    }
  } catch (error) {
    alert(error);
  }
};

export const PostDatos = async (url, tabla, datos) => {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(datos),
    };

    const respuesta = await fetch(`${url}/${tabla}`, options);

    if (!respuesta.ok) {
      throw { status: respuesta.status, statusText: respuesta.statusText };
    }
  } catch (error) {
    alert(error);
  }
};
