fetch('personas.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let sal= "";
    datos.forEach(pers => {
        sal += `<p>Nombre: ${pers.name} - Edad: ${pers.age} años</p>`;
    });
    document.getElementById("res").innerHTML = sal;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});