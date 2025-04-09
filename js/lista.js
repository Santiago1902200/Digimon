function mostrarLista(artistas) {
    const app = document.getElementById("app");
    app.innerHTML = "Lista de Artistas";

    let contenido = "";
    for (let i = 0; i < artistas.length; i++) {
        const artista = artistas[i];
        const imagen = artista.images[0] ? artista.images[0].url : "default.jpg"; // por si no tiene imagen

        contenido += `
            <div class="c-lista-artista" onclick="mostrarDetalle('${artista.id}')">
                <img src="${imagen}" width="auto" height="60" loading="lazy" alt="${artista.name}">
                <p>${artista.name}</p>
            </div>`;
    }
    app.innerHTML = contenido;
}
