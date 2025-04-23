// Mostrar la lista de Digimones y agregar el buscador y filtros
function mostrarLista(digimones) {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Limpiar el contenido

    const seccion = document.createElement("section");
    seccion.classList.add("c-lista");

    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Digimon...";
    buscador.addEventListener("input", (evento) => buscarDigimon(evento, digimones));

    // Filtro por nivel (puedes ajustarlo si tienes más niveles específicos)
    const niveles = ["All", "Fresh", "In Training", "Rookie", "Champion", "Ultimate", "Mega"];
    let listaNiveles = "";
    for (let i = 0; i < niveles.length; i++) {
        listaNiveles += `<button onclick="filtrarPorNivel('${niveles[i]}')">${niveles[i]}</button>`;
    }
    const filtro = document.createElement("div");
    filtro.classList.add("filtro");
    filtro.innerHTML = listaNiveles;

    // Generar la lista inicial de Digimones
    seccion.innerHTML = generarLista(digimones);

    // Agregar elementos al DOM
    app.appendChild(buscador);
    app.appendChild(filtro);
    app.appendChild(seccion);
}

// Generar la lista de Digimones (HTML dinámico)
function generarLista(digimones) {
    let listaHTML = "";
    for (let i = 0; i < digimones.length; i++) {
        listaHTML += `
        <div class="c-lista-digimon digimon-${i}" onclick="mostrarDetalle('${digimones[i].name}')">
            <p>${digimones[i].name}</p>
            <img src="${digimones[i].img}" width="auto" height="60" loading="lazy" alt="${digimones[i].name}">
            <p>${digimones[i].level}</p>
        </div>`;
    }

    return listaHTML;
}

// Buscar Digimon por nombre
function buscarDigimon(evento, digimones) {
    const texto = evento.target.value.toLowerCase();
    if (texto.length >= 3) {
        const listaFiltrada = digimones.filter((digimon) => digimon.name.toLowerCase().includes(texto));
        document.querySelector(".c-lista").innerHTML = generarLista(listaFiltrada);
    }

    if (texto.length === 0) {
        document.querySelector(".c-lista").innerHTML = generarLista(digimones);
    }
}

async function filtrarPorNivel(nivel) {
    if (nivel === "All") {
        const digimones = await conexionLista(); // Vuelve a cargar todos los Digimones
        mostrarLista(digimones); // Muestra todos los Digimones
    } else {
        try {
            const digimones = await conexionLista(); // Obtén todos los Digimones
            // Filtra los Digimones por el nivel, ajustando "In Training" en lugar de "In-Training"
            const digimonesFiltrados = digimones.filter(digimon => digimon.level === nivel);
            mostrarLista(digimonesFiltrados); // Muestra los Digimones filtrados
        } catch (error) {
            console.error("Error al filtrar por nivel:", error);
            document.getElementById("app").innerHTML = `<p>Error al cargar Digimones de nivel "${nivel}".</p>`;
        }
    }
}

