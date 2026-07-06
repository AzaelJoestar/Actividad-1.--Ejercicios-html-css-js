const manejarTareas = () => {
let tareas = JSON.parse(localStorage.getItem("tareas")) || []

const guardar = () => {
localStorage.setItem("tareas", JSON.stringify(tareas))
}

const agregarTarea = (texto) => {
tareas.push({ tarea: texto })
guardar()
renderizar()
}

const eliminarTarea = (index) => {
if(confirm("¿Eliminar tarea?")){
tareas.splice(index,1)
guardar()
renderizar()
}
}

const renderizar = () => {
let lista = document.getElementById("lista")
lista.innerHTML = ""

tareas.forEach((t, i) => {
let li = document.createElement("li")
li.innerHTML = t.tarea + " <button onclick='eliminar("+i+")'>Eliminar</button>"
lista.appendChild(li)
})
}

return {
agregarTarea,
eliminarTarea,
renderizar
}
}

const app = manejarTareas()

function agregar(){
let input = document.getElementById("nuevaTarea")
if(input.value === ""){
alert("Escribe algo")
return
}
app.agregarTarea(input.value)
input.value = ""
}

function eliminar(i){
app.eliminarTarea(i)
}

window.onload = () => {
app.renderizar()
}