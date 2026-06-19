fetch("./Productos.csv")
    .then(response => response.text())
    .then(data => {

        const lineas = data.split("\n");
        const catalogo = document.getElementById("catalogo");

        let contador = 1;

        for (let i = 1; i < lineas.length; i++) {

            if (lineas[i].trim() === "") continue;

            const datos = lineas[i].split(";");

            const categoria = datos[0].trim();
            const foto = datos[1].trim();
            const precio = datos[2].trim();

            if (categoria !== "Collares") continue;

            catalogo.innerHTML += `
                <div class="producto">
                    <img src="Productos/Collares/${foto}" alt="Collar ${contador}">
                    <h3>Collar ${contador}</h3>
                    <p class="precio">$${precio}</p>

                    <button onclick="comprar('Collar ${contador}','${precio}')">
                        Lo Quiero
                    </button>
                </div>
            `;

            contador++;
        }

    })
    .catch(error => {
        console.error(error);
        alert("Error leyendo Productos.csv");
    });

function comprar(producto, precio) {

    const mensaje =
        "Hola, deseo comprar:%0A%0A" +
        producto +
        "%0A%0APrecio: $" +
        precio;

    const url =
        "https://wa.me/593985543827?text=" +
        mensaje;

    window.open(url, "_blank");
}
