var misNumeros = JSON.parse(localStorage.getItem("misNumeros")) || [];

function mostrarAleatorio(digimones) {
    const app = document.getElementById("app");
    let aleatorioHTML = '<section class="c-aleatorio c-lista">';

    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * digimones.length);  // Selecciona un índice aleatorio
        const digimon = digimones[randomIndex];

        // Validación para evitar duplicados: ahora usamos el nombre o ID del Digimon
        let repetido = false;
        for (let x = 0; x < misNumeros.length; x++) {
            if (misNumeros[x] === digimon.name) {  // Usamos el nombre como clave única
                repetido = true;
                break;
            }
        }

        if (!repetido) {
            misNumeros.push(digimon.name);  // Guardamos el nombre en el localStorage
            localStorage.setItem("misNumeros", JSON.stringify(misNumeros));
        }

        // Mostrar los Digimones aleatorios
        aleatorioHTML += `
        <div class="c-lista-digimon c-un_aleatorio">
            <p>${digimon.name}</p>
            <img src="${digimon.img}" alt="${digimon.name}" width="60" height="60">
        </div>`;
    }

    aleatorioHTML += "</section>";
    app.innerHTML = aleatorioHTML;
}
