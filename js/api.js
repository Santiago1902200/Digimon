const TOKEN = "BQBRvpPv8gG8GtZYXAXfAx8xsq6ZWldGCIZ1WNk-79VRuz-xt3sr3ZoqRLDjZCF8IdRTbDbzxVF7aPH4l1wrlkvfK7jqo8cERU1UTSUEFelwt56ccO7tdqTgb1_q2TsmtEDJzGDl7vQjjZGLQtojO36biInc78-3UnudaKri8_xdXtk1vUIuzA6YfBZ1ASuBnoD5hjig-ul_6JPTyqYmDqarXULsfdmrWEN7z6WkgwsOkIn4iAeprz_InYIUxmZh0yUqdyC_aqWK2cPy-vaYOQX68AVv2PaI0zftGqcJJE1hEhbJc0D99UFi"; // reemplaza esto con tu token temporal de Spotify

async function conexionLista() {
    const res = await fetch('https://api.spotify.com/v1/search?q=rock&type=artist&limit=20', {
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    });

    const data = await res.json();
    return data.artists.items;
}

async function general() {
    const artistas = await conexionLista();
    mostrarLista(artistas);
}
