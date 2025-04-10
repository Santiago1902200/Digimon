function mostrarLista(digimones) {
    const app = document.getElementById("app");
    app.innerHTML = "Lista de Digimon";

    let contenido = "";
    for (let i = 0; i < digimones.length; i++) {
        const digi = digimones[i];
        contenido += `
            <div class="c-lista-digimon" onclick="mostrarDetalle('${digi.name}')">
                <img src="${digi.img}" width="auto" height="60" loading="lazy" alt="${digi.name}">
                <p>${digi.name}</p>
            </div>`;
    }
    app.innerHTML = contenido;
}

