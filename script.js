function mostrarVideo() {
    let miraculous = document.getElementById("miraculous");
    let videoContainer = document.getElementById("video-container");
    let video = document.getElementById("luckyCharmVideo");
    let invitacion = document.getElementById("invitacion");

    // 🔥 Verificar si los elementos existen en el DOM
    if (!miraculous || !videoContainer || !video || !invitacion) {
        console.error("❌ ERROR: Algunos elementos no fueron encontrados en el DOM.");
        return;
    }

    // 🔥 Ocultar el Miraculous cerrado
    miraculous.style.display = "none";

    // 🔥 Mostrar el contenedor del video y reproducirlo
    videoContainer.style.display = "flex";
    video.play().catch(error => console.error("Error al reproducir el video:", error));

    // 🔥 Cuando el video termine, ocultar el video y mostrar la invitación
    video.onended = function () {
        console.log("✅ Video terminado. Mostrando la invitación...");
        videoContainer.style.display = "none"; // Ocultar video
        invitacion.style.display = "block"; // Mostrar invitación
    };
}
// 🔥 Función para mostrar el mensaje secreto
function mostrarEasterEgg() {
    alert("Ningún Miguel fue obligado a hacer esta página x'd");
}

