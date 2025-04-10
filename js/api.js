async function conexionLista() {
    const res = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await res.json();
    return data.slice(0, 20); // mostramos solo los primeros 20
}

async function general() {
    const digimones = await conexionLista();
    mostrarLista(digimones);
}
