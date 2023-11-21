function drop(button) {
  const id = button.getAttribute("data-id");
  const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/", true);
    xhr.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded",
      true
    );
    xhr.onreadystatechange = () => {
      if ((xhr.readyState == 4) & (xhr.status == 200)) {
        console.log(xhr.responseText);
      }
    };
    xhr.send(`id=${id}`);
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
        window.location.href = "/stock"; // Redirecciona después de agregar
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

// function add() {
//   const id = document.getElementById("id").value;
//   const name = document.getElementById("nombre").value;
//   const type = document.getElementById("tipo").value;
//   const price = document.getElementById("precio").value;

//   if ((id != "") & (name != "") & (type != "") & (price != "")) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "/", true);
//     xhr.setRequestHeader(
//       "Content-Type",
//       "application/x-www-form-urlencoded",
//       true
//     );
//     xhr.onreadystatechange = () => {
//       if ((xhr.readyState == 4) & (xhr.status == 200)) {
//         console.log(xhr.responseText);
//       }
//     };
//     xhr.send(id=${id}&name=${name}&type=${type}&price=${price});

//     document.getElementById("id").value = "";
//     document.getElementById("nombre").value = "";
//     document.getElementById("tipo").value = "";
//     document.getElementById("precio").value = "";
//     window.location.href = "/";
//   } else {
//     alert("Uno o varios campos están vacios");
//   }
// }

function update() {
}










