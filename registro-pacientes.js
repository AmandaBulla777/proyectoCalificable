// Se obtienen los campos del formulario
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const correo = document.getElementById("email")
const especialidad = document.getElementById("especialidad")
const formularioRegistro = document.getElementById("registro-pacientes-form")
// Se le da una funcion al boton submit del formulario
formularioRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    // Se crea el objeto medico para guardar los valores que ingresan en el formulario
    const paciente= {
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        telefono: telefono.value,
        correo: correo.value,
        especialidad: especialidad.value
    }
    let pacientes= []
    let localPacientes = localStorage.getItem("pacientes")
    if (localPacientes){
        pacientes= JSON.parse(localPacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    formularioRegistro.reset()
    alert("Paciente registrado con exito")
})