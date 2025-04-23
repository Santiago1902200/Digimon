async function conexionLista() {
    const res = await fetch('https://digimon-api.vercel.app/api/digimon');
    const data = await res.json();
    return data; // Ya tenemos la lista de Digimon
}

async function general() {
    const infoDigimon = await conexionLista();
    mostrarLista(infoDigimon); // Actualizado para Digimon
}
