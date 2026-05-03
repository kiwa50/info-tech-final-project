var film = document.getElementById("selfie-upload-by-user");
film.style.display = "none";
selfie.onchange = evt => {
  const [file] = selfie.files
  if (file) {
     film.src = URL.createObjectURL(file);
     film.style.display = "block";
  }
}