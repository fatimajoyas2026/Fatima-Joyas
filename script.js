let productos = [];

fetch("Productos.csv")
.then(response => response.text())
.then(data => {

```
const lineas = data.split("\n");

for(let i = 1; i < lineas.length; i++){

    if(lineas[i].trim() === "") continue;

    const [categoria,foto,precio] =
    lineas[i].split(";");

    productos.push({
        categoria: categoria.trim(),
        foto: foto.trim(),
        precio: precio.trim()
    });

}
```

});

function mostrarCategoria(categoriaSeleccionada){

```
const catalogo =
document.getElementById("catalogo");

catalogo.innerHTML = "";

let contador = 1;

productos.forEach(producto => {

    if(producto.categoria === categoriaSeleccionada){

        catalogo.innerHTML += `

        <div class="producto">

            <img src="Productos/${producto.categoria}/${producto.foto}">

            <h3>${categoriaSeleccionada.slice(0,-1)} ${contador}</h3>

            <p class="precio">$${producto.precio}</p>

            <button onclick="comprar('${categoriaSeleccionada} ${contador}','${producto.precio}')">
                Lo Quiero
            </button>

        </div>

        `;

        contador++;

    }

});
```

}

function comprar(producto,precio){

```
let mensaje =
```

`Hola, deseo comprar:

Producto: ${producto}
Precio: $${precio}`;

```
let url =
```

`https://wa.me/593985543827?text=${encodeURIComponent(mensaje)}`;

```
window.open(url,"_blank");
```

}
