function mostrarFavoritos() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const contenedor = document.createElement("section");
    contenedor.classList.add("c-lista", "c-lista-favoritos"); // AÑADIR CLASE

    contenedor.innerHTML = generarLista(favoritos); // Usa la misma función para generar tarjetas
    app.appendChild(contenedor);
}
