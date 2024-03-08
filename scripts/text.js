
const texts = document.querySelectorAll(".project p");

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