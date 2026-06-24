fetch('inventario.json')
.then((rpta) => rpta.json())
.then((datos) => {
    let sal = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Fecha de ingreso</th>
                <th>Stock</th>
                <th>Código</th>
                <th>Categoría</th>
            </tr>
    `;
    datos.forEach(inv => {
        sal += `
            <tr>
                <td>${inv.nombre}</td>
                <td>$${inv.precio}</td>
                <td>${inv.fecha_ingreso}</td>
                <td>${inv.stock}</td>
                <td>${inv._codigo}</td>
                <td>${inv._categoria}</td>
            </tr>
        `;
    });
    sal += `</table>`;
    document.getElementById("res").innerHTML = sal;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});