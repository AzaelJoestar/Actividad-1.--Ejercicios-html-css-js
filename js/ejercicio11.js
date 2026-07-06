document.getElementById("btnConvertir").addEventListener("click", function () {

    let c = document.getElementById("kilometros").value;

    if (c === "") {
        alert("Ingresa un valor");
        return;
    }

    if (isNaN(c)) {
        alert("Solo números");
        return;
    }

    let f = (parseFloat(c) * 0.621371);

    document.getElementById("resultado").value = f + " Millas";

});