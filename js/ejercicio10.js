document.getElementById("btnConvertir").addEventListener("click", function () {

    let c = document.getElementById("celsius").value;

    if (c === "") {
        alert("Ingresa un valor");
        return;
    }

    if (isNaN(c)) {
        alert("Solo números");
        return;
    }

    let f = (parseFloat(c) * 9/5) + 32;

    document.getElementById("resultado").value = f + " °F";

});