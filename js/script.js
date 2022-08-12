// hiding navbar
let navbar = document.querySelector("#navbar")
let prevScrollPosition = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition) navbar.style.top = "0";
    else navbar.style.top = "-75px";
    console.log(navbar.style.top);
    prevScrollPosition = currentScrollPosition;
}

// responsive navbar
let btn = document.querySelector("#menu-button");
let menu = document.querySelector("#nav");
btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});

// form submission
let form = document.querySelector("#contactez-nous-form");
let status = document.querySelector("#form-status")
let name = document.querySelector("#nom")
let email = document.querySelector("#email")
let tel = document.querySelector("#tel")
let message = document.querySelector("#message")
async function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData();
    data.append("email", email.value)
    data.append("message", `Nom Complet: ${name.value} \nTelephone: ${tel.value} \nMessage: ${message.value}`)
    let response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        status.innerHTML = "Merci pour votre soumission! nous vous répondrons dans les plus brefs délais.";
        form.reset()
    } else status.innerHTML = "Oops! Un problème est survenu lors de l'envoi, merci de réessayer plus tard!";
}

form.addEventListener("submit", handleSubmit)