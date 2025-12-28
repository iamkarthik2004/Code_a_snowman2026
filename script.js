let happy = true;

function changeMood() {
  const eyes = document.querySelectorAll(".eye");

  if (happy) {
    eyes.forEach(eye => {
      eye.style.height = "2px";
      eye.style.top = "35px";
    });
  } else {
    eyes.forEach(eye => {
      eye.style.height = "10px";
      eye.style.top = "30px";
    });
  }

  happy = !happy;
}
