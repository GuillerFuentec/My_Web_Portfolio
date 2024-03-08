// socials
const socialButtons = document.querySelectorAll(".animated")

// // Mail
const socialIconContact = document.getElementById("contact-me-email");


// some animations for cath atention on my social media icons
socialButtons.forEach( button => socialIconsAnimation(button));

// Mail button animation
socialIconsEmail(socialIconContact);


function socialIconsAnimation(button) {
  var keyframes = [
    { transform: "rotate(0deg) translate(2px, 1px)" },
    { transform: "rotate(35deg) translate(-2px, -2px)" },
    { transform: "rotate(-35deg) translate(3px, 7px)" },
    { transform: "rotate(35deg) translate(-4px, -2px)" },
    { transform: "rotate(-35deg) translate(3px, 5px)" },
    { transform: "rotate(35deg) translate(-2px, -2px)" },
    { transform: "rotate(-75deg) translate(3px, 4px)" },
    { transform: "rotate(0deg) translate(-2px, -2px)" },
  ];
  
  var options = {
    duration: 1600,
    iterations: Infinity,
  };
  
  var animacion;
  
  button.addEventListener("mouseover", () => {
    animacion = button.animate(keyframes, options);
  });
  
  button.addEventListener("mouseout", () => {
    animacion.cancel();
  });
}


function socialIconsEmail(button) {
  var keyframes = [
    { transform: "rotate(0deg) translate(0px, 0px)" },
    { transform: "rotate(10deg) translate(-0.1px, -0.2px)" },
    { transform: "rotate(5deg) translate(0.3px, 0.4px)" },
    { transform: "rotate(0deg) translate(-0.8px, -0.7px)" },
    { transform: "rotate(0deg) translate(0px, 0px)" },
  ];
  
  var options = {
    duration: 1200,
    iterations: Infinity,
  };
  
  button.animate(keyframes, options);
}
