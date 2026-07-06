let estudiantes = [];

document.getElementById("btnAgregar").addEventListener("click", function () {

    let nombre = document.getElementById("nombre").value;
    let calificacion = document.getElementById("calificacion").value;

    if (nombre === "" || calificacion === "") {
        alert("Completa los datos");
        return;
    }

    if (isNaN(calificacion)) {
        alert("La calificación debe ser número");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: parseFloat(calificacion)
    };

    estudiantes.push(estudiante);

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
});

document.getElementById("btnCalcular").addEventListener("click", function () {

    if (estudiantes.length === 0) {
        alert("Agrega estudiantes primero");
        return;
    }

    let suma = estudiantes.reduce(function (acc, e) {
        return acc + e.calificacion;
    }, 0);

    let promedio = suma / estudiantes.length;

    let max = Math.max(...estudiantes.map(e => e.calificacion));
    let min = Math.min(...estudiantes.map(e => e.calificacion));

    let mayor = estudiantes.find(e => e.calificacion === max);
    let menor = estudiantes.find(e => e.calificacion === min);

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("mayor").value = mayor.nombre;
    document.getElementById("menor").value = menor.nombre;

});