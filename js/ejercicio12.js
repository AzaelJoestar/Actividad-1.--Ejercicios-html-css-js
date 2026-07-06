document.getElementById("btnConvertir").addEventListener("click", function () {

    let c = document.getElementById("pesos").value;

    if (c === "") {
        alert("Ingresa un valor");
        return;
    }

    if (isNaN(c)) {
        alert("Solo números");
        return;
    }

    let f = (parseFloat(c) / 17.44);

    document.getElementById("resultado").value = f + " USD";

});