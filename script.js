fetch('productos.json')
.then((rpta) => rpta.json())
.then((datos) => {
    let sal = `
        <table>
            <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Disponible</th>
            <th>Detalles</th>
            </tr>
    `;
    datos.forEach(pro => {
        sal += `
            <tr>
            <td>${pro.nombre}</td>
            <td>$${pro.precio}</td>
            <td>${pro.disponible}</td>
            <td>${pro.detalles.color} - ${pro.detalles.talla}</td>
            </tr>
        `;
    });
    sal += `</table>`;
    document.getElementById("res").innerHTML = sal;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});