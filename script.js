let happy = true;

function changeMood() {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach(eye => {
    if (happy) {
      eye.style.height = "2px";
      eye.style.top = "38px";
    } else {
      eye.style.height = "10px";
      eye.style.top = "32px";
    }
  });

  happy = !happy;
}
