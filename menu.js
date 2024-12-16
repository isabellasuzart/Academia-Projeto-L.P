document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", function () {
            if (menu.classList.contains("esconde")) {
                menu.classList.remove("esconde");
                menu.classList.add("mostra");
            } else {
                menu.classList.remove("mostra");
                menu.classList.add("esconde");
            }
        });
    } else {
        console.error("Elementos menu-toggle ou menu não encontrados.");
    }
});
