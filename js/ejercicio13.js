document.getElementById("btnConvertir").addEventListener("click", function () {

    let c = document.getElementById("edad").value;

    if (c === "") {
        alert("Ingresa su edad");
        return;
    }

    if (isNaN(c)) {
        alert("Solo números");
        return;
    }

    if (c>=18){
    document.getElementById("resultado").value ="Puede votar";
    }
    else{
    document.getElementById("resultado").value ="No puede votar"}
});