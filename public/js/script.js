function drop(button) {
  console.log("Drop function called");
  const id = button.getAttribute("data-id");
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `/stock/${id}`, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        console.log(xhr.responseText);
        window.location.reload(); // Recarga la página después de eliminar
      } else {
        console.error('Error al eliminar el componente:', xhr.status);
      }
    }
  };
  xhr.send();
}



function add() {
  const id = document.getElementById("modalId").value;
  const nombre = document.getElementById("modalNombre").value;
  const marca = document.getElementById("modalMarca").value;
  const cantidad = document.getElementById("modalCantidad").value;
  const costo = document.getElementById("modalCosto").value;

  if (id && nombre && marca && cantidad && costo) {
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
    alert("Uno o varios campos están vacíos");
  }
}



function edit(id) {
  const modalId = document.getElementById(`modalId${id}`).value;
  const modalNombre = document.getElementById(`modalNombre${id}`).value;
  const modalMarca = document.getElementById(`modalMarca${id}`).value;
  const modalCantidad = document.getElementById(`modalCantidad${id}`).value;
  const modalCosto = document.getElementById(`modalCosto${id}`).value;

  if (modalId && modalNombre && modalMarca && modalCantidad && modalCosto) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", `/stock/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
        window.location.href = "/stock"; 
      }
    };

    const data = {
      id: modalId,
      nombre: modalNombre,
      marca: modalMarca,
      cantidad: modalCantidad,
      costo: modalCosto,
    };

    xhr.send(JSON.stringify(data));
  } else {
    alert("Uno o varios campos están vacíos");
  }
}


// function edit() {
//   const id = document.getElementById("modalId").value;
//   const nombre = document.getElementById("modalNombre").value;
//   const marca = document.getElementById("modalMarca").value;
//   const cantidad = document.getElementById("modalCantidad").value;
//   const costo = document.getElementById("modalCosto").value;

//   const xhr = new XMLHttpRequest();
//     xhr.open("PUT", `/stock/${id}`, true);
//     xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onreadystatechange = () => {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         console.log(xhr.responseText);
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
//   // if (id && nombre && marca && cantidad && costo) {
    
//   // } else {
//   //   alert("Uno o varios campos están vacíos editar");
//   // }
// }




