function mostrarInformacion() {
    // Obtener el contenedor principal donde se mostrará la información
    const app = document.getElementById("app");
    
    // Contenido informativo sobre Digimon
    const informacionHTML = `
        <div class="info-seccion">
            <h2>¿Qué es Digimon?</h2>
            <p>
                Digimon (abreviatura de Digital Monsters) es una franquicia multimedia creada por Akiyoshi Hongo, 
                que incluye anime, videojuegos, películas, cartas y más. La historia de Digimon sigue a un grupo de niños 
                que se embarcan en aventuras en un mundo digital poblado por criaturas conocidas como Digimon.
            </p>
            <h3>Características principales de Digimon:</h3>
            <ul>
                <li><strong>Digivolución:</strong> Los Digimon pueden evolucionar a formas más poderosas mediante un proceso llamado "Digivolución".</li>
                <li><strong>Compañeros:</strong> Los Digimon son compañeros de los niños llamados "Digidestined".</li>
                <li><strong>Mundos Digitales:</strong> Los Digimon habitan en mundos virtuales llamados "mundos digitales".</li>
            </ul>
            <p>Para más información sobre Digimon, explora nuestras opciones en la página.</p>
        </div>
    `;

    // Inyectar el contenido en el main
    app.innerHTML = informacionHTML;
}
