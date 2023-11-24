

function drop(button) {
  const id = button.getAttribute("data-id");
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `/stock/${id}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        window.location.reload();
      } else {
        console.error("Error al eliminar el componente:", xhr.status);
      }
    }
  };
  xhr.send();
}

//  function add() {
//   const id = document.getElementById("modalId").value;
//   const nombre = document.getElementById("modalNombre").value;
//   const marca = document.getElementById("modalMarca").value;
//   const cantidad = document.getElementById("modalCantidad").value;
//   const costo = document.getElementById("modalCosto").value;

//   if (id && nombre && marca && cantidad && costo) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "/stock", true);
//     xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onreadystatechange = () => {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         window.location.href = "/stock";
//       }
//     };

//     const data = {
//       id: id,
//       nombre: nombre,
//       marca: marca,
//       cantidad: cantidad,
//       costo: costo,
//     };

//     xhr.send(JSON.stringify(data));
//   } else {
//     alert("Uno o varios campos están vacíos");
//   }
// }


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
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        window.location.href = "/stock";
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
    alert("Por favor, completa todos los campos correctamente antes de confirmar.");
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

function edit(id2) {
  const id = document.getElementById(`modalId${id2}`).value;
  const nombre = document.getElementById(`modalNombre${id2}`).value;
  const marca = document.getElementById(`modalMarca${id2}`).value;
  const cantidad = document.getElementById(`modalCantidad${id2}`).value;
  const costo = document.getElementById(`modalCosto${id2}`).value;

  if (id && nombre && marca && cantidad && costo) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `/stock/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        window.location.href = "/stock";
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
    alert("Uno o varios campos están vacíos");
  }
}
