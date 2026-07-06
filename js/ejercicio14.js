document.getElementById("btnCalcular").addEventListener("click", function () {

    let texto = document.getElementById("numeros").value;

    if (texto === "") {
        alert("Ingresa números");
        return;
    }

    let arreglo = texto.split(",");

    let numeros = arreglo.map(function (n) {
        return parseFloat(n.trim());
    });

    for (let i = 0; i < numeros.length; i++) {
        if (isNaN(numeros[i])) {
            alert("Verifica los datos");
            return;
        }
    }

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    let suma = numeros.reduce(function (acc, valor) {
        return acc + valor;
    }, 0);

    let promedio = suma / numeros.length;

    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio.toFixed(2);

});