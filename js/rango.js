async function mostrarRango() {
    const app = document.getElementById("app");
    
    // Obtener todos los digimones
    const respuesta = await fetch('https://digimon-api.vercel.app/api/digimon');
    const digimones = await respuesta.json();
    
    // Seleccionar uno aleatorio
    const randomIndex = Math.floor(Math.random() * digimones.length);
    const digimon = digimones[randomIndex];
    const nivelCorrecto = digimon.level.trim().toLowerCase();

    // Lista de rangos posibles (según la API)
    const niveles = ["Fresh", "In Training", "Rookie", "Champion", "Ultimate", "Mega", "Armor"];
    
    // Generar botones con opciones
    let opcionesHTML = "";
    niveles.forEach(nivel => {
        opcionesHTML += `
            <button onclick="verificarRango('${nivelCorrecto}', '${nivel.toLowerCase()}')" class="rango-opcion">
                ${nivel}
            </button>
        `;
    });

    // Mostrar Digimon y botones de opciones
    app.innerHTML = `
        <div class="rango-seccion">
            <h2>¿Qué rango tiene este Digimon?</h2>
            <p><strong>${digimon.name}</strong></p>
            <img src="${digimon.img}" alt="${digimon.name}" />
            <div class="rango-opciones">${opcionesHTML}</div>
            <p id="resultado-rango" class="rango-resultado"></p>
        </div>
    `;
}

// Verificar la respuesta del usuario
function verificarRango(rangoCorrecto, elegido) {
    const resultado = document.getElementById("resultado-rango");
    if (rangoCorrecto === elegido) {
        resultado.textContent = "✅ ¡Correcto!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = `❌ Incorrecto. El rango correcto era: ${rangoCorrecto.charAt(0).toUpperCase() + rangoCorrecto.slice(1)}`;
        resultado.style.color = "red";
    }
}
