// Mail
const socialMailContact = document.querySelectorAll(".email");
// const bioContactMe = document.getElementById("bio-contact-me");
// const navContactMe = document.getElementById("nav-contact-button");

// Mail
// contactMe(socialMailContact);
// contactMe(bioContactMe);
// contactMe(navContactMe);

socialMailContact.forEach(button => contactMe(button));

function contactMe(button) {
    button.addEventListener("click", () => {
      window.location.href =
        "mailto:copelloguillermo60@gmail.com?subject=Asunto&body=Hi Guille, i saw you web portfolio, and; i'm interesting ";
    });
};