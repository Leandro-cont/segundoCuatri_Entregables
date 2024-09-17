const apiURL = 'https://api.openf1.org/v1/drivers';

async function obtenerPilotos() {
    const respuesta = await fetch(apiURL);
    const data = await respuesta.json();

    const pilotos = data;
    const contenedorPilotos = document.getElementById('pilotos');
    
    // Arreglo para almacenar nombres de pilotos procesados, esto evita que se repitan los pilotos al consumir la Api
    const pilotosProcesados = [];

    pilotos.forEach(piloto => {
        // Se verificar si el piloto ya fue agregado, si no lo fue se lo agrega
        if (!pilotosProcesados.includes(piloto.full_name)) {

            pilotosProcesados.push(piloto.full_name);

            // Creo la tarjeta card para cada piloto
            const card = document.createElement('div');
            card.classList.add('card');

            // Agrego la imagen del piloto
            const img = document.createElement('img');
            img.src = piloto.headshot_url || 'https://via.placeholder.com/100'; 
            img.alt = `Foto de ${piloto.full_name}`;

            // Agrego el nombre completo del piloto
            const nombre = document.createElement('h2');
            nombre.textContent = piloto.full_name || 'Nombre no disponible';

            // Agrego el número de vehículo
            const numeroVehiculo = document.createElement('p');
            numeroVehiculo.textContent = `Número de vehículo: ${piloto.driver_number || 'No disponible'}`;

            // Agrego el nombre de la escudería
            const escuderia = document.createElement('p');
            escuderia.textContent = `Escudería: ${piloto.team_name || 'No disponible'}`;

            // Añado los elementos creados a la tarjeta
            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(numeroVehiculo);
            card.appendChild(escuderia);

            // Añado la tarjeta al contenedor de pilotos
            contenedorPilotos.appendChild(card);
        }
    });
}

obtenerPilotos();
