fetch('empleados.json')
.then((rpta) => rpta.json())
.then((datos) => {
    let sal = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha de nacimiento</th>
                <th>Puesto</th>
                <th>Departamento</th>
                <th>Número</th>
            </tr>
    `;
    datos.forEach(emp => {
        sal += `
            <tr>
                <td>${emp.nombre}</td>
                <td>${emp.apellido}</td>
                <td>${emp.fecha_nacimiento}</td>
                <td>${emp.puesto}</td>
                <td>${emp.departamento}</td>
                <td>${emp._numero}</td>
            </tr>
        `;
    });
    sal += `</table>`;
    document.getElementById("res").innerHTML = sal;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});