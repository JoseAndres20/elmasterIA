// Obtener referencias al botón y al contador
const likeButton = document.getElementById("likeButton");
const likeDisplay = document.getElementById("likeCount");

// Obtener el valor guardado en localStorage o iniciar en 0
let likeCount = localStorage.getItem("likeCount") ? parseInt(localStorage.getItem("likeCount")) : 0;
likeDisplay.textContent = likeCount; // Mostrar el contador al cargar

// Evento para aumentar el contador y guardarlo
likeButton.addEventListener("click", function () {
    likeCount++;  // Incrementar contador
    likeDisplay.textContent = likeCount;  // Actualizar en la interfaz
    localStorage.setItem("likeCount", likeCount);  // Guardar en localStorage

    // Agregar animación al botón
    likeButton.classList.add("liked");
    setTimeout(() => {
        likeButton.classList.remove("liked");
    }, 300);
});
