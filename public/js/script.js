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










