let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const toggleFavorito = (id, nombre, img) => {
    const esFavorito = favoritos.some(d => d.name === nombre);

    if (esFavorito) {
        favoritos = favoritos.filter(d => d.name !== nombre);
        document.getElementById(`corazon-${id}`).textContent = '🤍';
    } else {
        favoritos.push({ name: nombre, img });
        document.getElementById(`corazon-${id}`).textContent = '❤️';
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const actualizarIconoFavorito = (id) => {
    const corazonIcono = document.getElementById(`corazon-${id}`);
    if (!corazonIcono) return;

    if (favoritos.some(d => d.name === id)) {
        corazonIcono.textContent = '❤️';
    } else {
        corazonIcono.textContent = '🤍';
    }
};

async function mostrarDetalle(nombre) {
    const res = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`);
    const data = await res.json();
    const digimon = data[0]; // Viene como un array con un solo objeto

    const app = document.getElementById("app");
    const esFavorito = favoritos.some(d => d.name === digimon.name);

    const detalle = `
    <section class="c-detalle">
        <img src="${digimon.img}" alt="${digimon.name}" height="120">
        <h2>${digimon.name}</h2>
        <p>Nivel: ${digimon.level}</p>

        <button id="favorito-btn-${digimon.name}" onclick="toggleFavorito('${digimon.name}', '${digimon.name}', '${digimon.img}')">
            <span id="corazon-${digimon.name}" class="corazon">${esFavorito ? '❤️' : '🤍'}</span> Favorito
        </button>
    </section>
    `;

    app.innerHTML = detalle;
    actualizarIconoFavorito(digimon.name);
}
