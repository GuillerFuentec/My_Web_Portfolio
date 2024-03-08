const socialIconLinkedin = document.getElementById("social-icons-linkedin");
const socialIconGithub = document.getElementById("social-icons-github");
const socialIconContact = document.getElementById("contact-me-email");
const bioContactMe = document.getElementById("bio-contact-me");
const navContactMe = document.getElementById("nav-contact-button");
const texts = document.querySelectorAll(".project p");

socialIconsAnimation(socialIconLinkedin);
socialIconsAnimation(socialIconGithub);
socialIconsEmail(socialIconContact);
contactMe(socialIconContact);
contactMe(bioContactMe);
contactMe(navContactMe);

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

function contactMe(button) {
  button.addEventListener("click", () => {
    window.location.href =
      "mailto:copelloguillermo60@gmail.com?subject=Asunto&body=Hi Guille, i saw you web portfolio, and; i'm interesting ";
  });
}

const textLength = (text) => {
    var textContent = text.innerText;
    
    const parentClass = text.parentNode;

    if (textContent.length > 140)
    {
        text.innerHTML = `<p>${textContent.slice(
            0,
            140
          )}<span class="see-more" id="see-more">...See More</span></p>`
    };

    text.addEventListener('click', (event)=>{
        if(event.target.id === "see-more" )
        {
            text.innerHTML = `<p>${textContent}<span class="see-more" id="see-less">...See Less</span></p>`;
        }
        else if(event.target.id === "see-less")
        {
            text.innerHTML = `<p>${textContent.slice(
                0,
                140
              )}<span class="see-more" id="see-more">...See Moree</span></p>`;
        }
    });
};

texts.forEach(text => textLength(text));
