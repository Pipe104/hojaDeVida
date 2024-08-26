function limitarDigitos(elemento, cantidad) {
    if (elemento.value.length > cantidad) {
        elemento.value = elemento.value.slice(0, cantidad);
    }
}

function guardarDatos() {

	const nombre = document.getElementById("nombre").value;
	const nombre1 = document.getElementById("nombre1").value;
	const nombre2 = document.getElementById("nombre2").value;
	const perfil = document.getElementById("perfil").value;
    const nacimiento = document.getElementById("nacimiento").value;
    const edad = document.getElementById("edad").value;
    const experiencia = document.getElementById("experiencia").value;
    const identificacion = document.getElementById("identificacion").value;
    const telefono = document.getElementById("telefono").value;
    const telefono1 = document.getElementById("telefono1").value;
    const telefono2 = document.getElementById("telefono2").value;
    const email = document.getElementById("email").value;
    const universidad = document.getElementById("universidad").value;
    const titulo = document.getElementById("titulo").value;
    
    
	sessionStorage.setItem("nombre", nombre);
	sessionStorage.setItem("nombre1", nombre1);
	sessionStorage.setItem("nombre2", nombre2);
	sessionStorage.setItem("perfil", perfil);
	sessionStorage.setItem("nacimiento", nacimiento);
	sessionStorage.setItem("edad", edad);
    sessionStorage.setItem("experiencia" , experiencia);
    sessionStorage.setItem("identificacion" , identificacion);
    sessionStorage.setItem("telefono" , telefono);
    sessionStorage.setItem("telefono1" , telefono1);
    sessionStorage.setItem("telefono2" , telefono2);
    sessionStorage.setItem("email" , email);
    sessionStorage.setItem("universidad" , universidad);
    sessionStorage.setItem("titulo" , titulo);

    // Obtener el valor seleccionado de los botones de radio
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    
    // Guardar en sessionStorage
    sessionStorage.setItem("sexo", sexo);
}


window.onload = function() {
    const nombre = sessionStorage.getItem("nombre");
    const nombre1 = sessionStorage.getItem("nombre1");
    const nombre2 = sessionStorage.getItem("nombre2");
    const perfil = sessionStorage.getItem("perfil");
    const nacimiento = sessionStorage.getItem("nacimiento");
    const edad = sessionStorage.getItem("edad");
    const experiencia = sessionStorage.getItem("experiencia");
    const identificacion = sessionStorage.getItem("identificacion");
    const telefono = sessionStorage.getItem("telefono");
    const telefono1 = sessionStorage.getItem("telefono1");
    const telefono2 = sessionStorage.getItem("telefono2");
    const email = sessionStorage.getItem("email");
    const universidad = sessionStorage.getItem("universidad");
    const titulo = sessionStorage.getItem("titulo");
    const sexo = sessionStorage.getItem("sexo");
    

    document.getElementById("nombre").textContent = nombre;
    document.getElementById("nombre1").textContent = nombre1;
    document.getElementById("nombre2").textContent = nombre2;
    document.getElementById("perfil").textContent = perfil;
    document.getElementById("nacimiento").textContent = nacimiento;
    document.getElementById("edad").textContent = edad;
    document.getElementById("experiencia").textContent = experiencia;
    document.getElementById("identificacion").textContent = identificacion;
    document.getElementById("telefono").textContent = telefono;
    document.getElementById("telefono1").textContent = telefono1;
    document.getElementById("telefono2").textContent = telefono2;
    document.getElementById("email").textContent = email;
    document.getElementById("universidad").textContent = universidad;
    document.getElementById("titulo").textContent = titulo;
    document.getElementById("sexo").textContent = sexo;
}

