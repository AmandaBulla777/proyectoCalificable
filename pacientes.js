function mostrarPacientes() {
    let pacientes= []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes= JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(medico => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePaciente = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaTelefono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        

        celdaNombrePaciente.textContent = medico.nombre
        celdaApellido.textContent = medico.apellido
        celdaNumeroCedula.textContent = medico.cedula
        celdaEspecialidad.textContent = medico.especialidad
        celdaTelefono.textContent= medico.telefono
        celdaCorreo.textContent = medico.correo
    });
}

mostrarPacientes()