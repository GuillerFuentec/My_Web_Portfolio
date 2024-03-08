const viewProject = document.querySelectorAll(".view-project");

function buttonAnimation(button) {
  var keyframes = [

  ];

  button.addEventListener("mouseover", () => {
    button.style.width = "90%";
    button.style.transition = 'width 0.3s ease-in-out';
    button.style.color = "white";
  });
  button.addEventListener("mouseout", () => {
    button.style.width = "80%";
    button.style.transition = 'width 0.3s ease-in-out';
    button.style.color = "#f5f36e";
  });
}

viewProject.forEach((button) => buttonAnimation(button));
