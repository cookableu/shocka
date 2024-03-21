function drop() {
  var navbar = document.getElementById("navbar");
  navbar.classList.add("nav-active");

  const ddee = document.getElementById("ddee");
  const hdee = document.getElementById("hdee");

  ddee.style.animation = "rotateFadeOut 0.5s forwards"; // Apply fade-out animation

  setTimeout(() => {
    ddee.style.display = "none";
    hdee.style.display = "block";
    hdee.style.animation = "rotateFadeIn 0.2s forwards";
  }, 200); // Delay to match animation duration
}

function pull() {
  var navbar = document.getElementById("navbar");
  navbar.classList.remove("nav-active");

  const ddee = document.getElementById("ddee");
  const hdee = document.getElementById("hdee");

  hdee.style.animation = "rotateFadeOut 0.2s forwards"; // Apply fade-out animation

  setTimeout(() => {
    hdee.style.display = "none";
    ddee.style.display = "block";
    ddee.style.animation = "rotateFadeIn 0.5s forwards";
  }, 200); // Delay to match animation duration
}