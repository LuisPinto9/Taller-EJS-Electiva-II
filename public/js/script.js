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
