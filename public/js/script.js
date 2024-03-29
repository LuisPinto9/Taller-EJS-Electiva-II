function drop(button) {
  const id = button.getAttribute("data-id");
  const nombreComponente = button.getAttribute("data-nombre");

  Swal.fire({
    title: "¿Está seguro?",
    html: `¿Desea eliminar el componente <strong>${nombreComponente}</strong>?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const xhr = new XMLHttpRequest();
      xhr.open("DELETE", `/stock/${id}`, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            Swal.fire({
              title: "Exito",
              text: "El componente se ha eliminado correctamente.",
              icon: "success",
            }).then(() => {
              window.location.href = "/stock";
            });
          } else {
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar el componente.",
              icon: "error",
            });
          }
        }
      };
      xhr.send();
    }
  });
}

function add() {
  const id = document.getElementById("modalId").value;
  const nombre = document.getElementById("modalNombre").value;
  const marca = document.getElementById("modalMarca").value;
  const cantidad = document.getElementById("modalCantidad").value;
  const costo = document.getElementById("modalCosto").value;

  const errors = validateInputs(id, nombre, marca, cantidad, costo);

  if (Object.values(errors).every((error) => !error)) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/stock", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          Swal.fire({
            title: "Exito",
            text: "El componente se ha agregado correctamente.",
            icon: "success",
          }).then(() => {
            window.location.href = "/stock";
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Ya existe un componente con el mismo ID. Por favor, utiliza un ID único.",
            icon: "error",
          });
        }
      }
    };

    const data = {
      id: id,
      nombre: nombre,
      marca: marca,
      cantidad: cantidad,
      costo: costo,
    };

    xhr.send(JSON.stringify(data));
  } else {
    Swal.fire({
      title: "Campos Inválidos",
      html: `
        <p>Complete los campos correctamente antes de confirmar:</p>
        <ul style="text-align: left; list-style-position: inside;">
          <li>Letras para <strong>NOMBRE</strong> y <strong>MARCA</strong>.</li>
          <li>Números para <strong>ID</strong>, <strong>CANTIDAD</strong> y <strong>COSTO</strong>.</li>
          <li>Sin campos vacíos.</li>
        </ul>`,
      icon: "error",
    });
  }
}

function edit(id2) {
  const id = document.getElementById(`modalId${id2}`).value;
  const nombre = document.getElementById(`modalNombre${id2}`).value;
  const marca = document.getElementById(`modalMarca${id2}`).value;
  const cantidad = document.getElementById(`modalCantidad${id2}`).value;
  const costo = document.getElementById(`modalCosto${id2}`).value;

  const errors = validateInputs(id, nombre, marca, cantidad, costo);

  if (Object.values(errors).every((error) => !error)) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `/stock/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          Swal.fire({
            title: "Exito",
            text: "El componente se ha actualizado correctamente.",
            icon: "success",
          }).then(() => {
            window.location.href = "/stock";
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al actualizar el componente.",
            icon: "error",
          });
        }
      }
    };

    const data = {
      id: id,
      nombre: nombre,
      marca: marca,
      cantidad: cantidad,
      costo: costo,
    };

    xhr.send(JSON.stringify(data));
  } else {
    Swal.fire({
      title: "Campos Inválidos",
      html: `
        <p>Complete los campos correctamente antes de confirmar:</p>
        <ul style="text-align: left; list-style-position: inside;">
          <li>Letras para <strong>NOMBRE</strong> y <strong>MARCA</strong>.</li>
          <li>Números para <strong>ID</strong>, <strong>CANTIDAD</strong> y <strong>COSTO</strong>.</li>
          <li>Sin campos vacíos.</li>
        </ul>`,
      icon: "error",
    });
  }
}

function validateInputs(id, nombre, marca, cantidad, costo) {
  const idPattern = /^\d+$/;
  const nombrePattern = /^[A-Za-z\s]+$/;
  const cantidadPattern = /^\d+$/;
  const costoPattern = /^\d+(\.\d{1,2})?$/;

  const errors = {
    id: !idPattern.test(id),
    nombre: !nombrePattern.test(nombre),
    marca: !nombrePattern.test(marca),
    cantidad: !cantidadPattern.test(cantidad),
    costo: !costoPattern.test(costo),
  };

  return errors;
}
