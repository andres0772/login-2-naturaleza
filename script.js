document.addEventListener("DOMContentLoaded", () => {
    const logregBox = document.querySelector(".logreg-box");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

    if (logregBox && loginLink && registerLink) {
        registerLink.addEventListener("click", (e) => {
            e.preventDefault();
            logregBox.classList.add("active");
        });

        loginLink.addEventListener("click", (e) => {
            e.preventDefault();
            logregBox.classList.remove("active");
        });
    } else {
        console.warn("Advertencia: No se encontraron los elementos para la funcionalidad de login/registro.");
    }
});
