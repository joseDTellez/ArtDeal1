// cookies.js

function handleCookie(accepted) {
    // Guardamos la elección en localStorage como string
    localStorage.setItem("cookiesAccepted", accepted ? "true" : "false");
    // Ocultamos el popup
    document.getElementById("cookiePopup").style.display = "none";
  }
  
  window.onload = () => {
    // Leemos el valor guardado
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    // Mostramos popup solo si no hay decisión guardada
    if (cookiesAccepted !== "true" && cookiesAccepted !== "false") {
      document.getElementById("cookiePopup").style.display = "flex";
    } else {
      document.getElementById("cookiePopup").style.display = "none";
    }
  };
  