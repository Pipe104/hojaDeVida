function limitarDigitos(elemento, cantidad) {
    if (elemento.value.length > cantidad) {
        elemento.value = elemento.value.slice(0, cantidad);
    }
}

function guardarDatos() {

	const nombre = document.getElementById("nombre").value;
	const nombre1 = document.getElementById("nombre1").value;
	const nombre2 = document.getElementById("nombre2").value;
	const nombre3 = document.getElementById("nombre3").value;
	const nombre4 = document.getElementById("nombre4").value;
	const perfil = document.getElementById("perfil").value;
    const nacimiento = document.getElementById("nacimiento").value;
    const edad = document.getElementById("edad").value;
    const experiencia = document.getElementById("experiencia").value;
    const identificacion = document.getElementById("identificacion").value;
    const telefono = document.getElementById("telefono").value;
    const telefono1 = document.getElementById("telefono1").value;
    const telefono2 = document.getElementById("telefono2").value;
    const telefono3 = document.getElementById("telefono3").value;
    const telefono4 = document.getElementById("telefono4").value;
    const email = document.getElementById("email").value;
    const universidad = document.getElementById("universidad").value;
    const titulo = document.getElementById("titulo").value;
    const fechaUniversidad = document.getElementById("fechaUniversidad").value;
    const fechaLibreta = document.getElementById("fechaLibreta").value;
    const primaria = document.getElementById("primaria").value;
    const fechaPrimaria = document.getElementById("fechaPrimaria").value;
    const secundaria = document.getElementById("secundaria").value;
    const fechaSecundaria = document.getElementById("fechaSecundaria").value;
    
	sessionStorage.setItem("nombre", nombre);
	sessionStorage.setItem("nombre1", nombre1);
	sessionStorage.setItem("nombre2", nombre2);
	sessionStorage.setItem("nombre3", nombre3);
	sessionStorage.setItem("nombre4", nombre4);
	sessionStorage.setItem("perfil", perfil);
	sessionStorage.setItem("nacimiento", nacimiento);
	sessionStorage.setItem("edad", edad);
    sessionStorage.setItem("experiencia" , experiencia);
    sessionStorage.setItem("identificacion" , identificacion);
    sessionStorage.setItem("telefono" , telefono);
    sessionStorage.setItem("telefono1" , telefono1);
    sessionStorage.setItem("telefono2" , telefono2);
    sessionStorage.setItem("telefono3" , telefono3);
    sessionStorage.setItem("telefono4" , telefono4);
    sessionStorage.setItem("email" , email);
    sessionStorage.setItem("universidad" , universidad);
    sessionStorage.setItem("titulo" , titulo);
    sessionStorage.setItem("fechaUniversidad", fechaUniversidad);
    sessionStorage.setItem("fechaLibreta", fechaLibreta);
    sessionStorage.setItem("primaria", primaria);
    sessionStorage.setItem("fechaPrimaria", fechaPrimaria);
    sessionStorage.setItem("secundaria", secundaria);
    sessionStorage.setItem("fechaSecundaria", fechaSecundaria);

    // Obtener el valor seleccionado de los botones de radio
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const libreta = document.querySelector('input[name="libreta"]:checked').value;
    
    // Guardar en sessionStorage
    sessionStorage.setItem("sexo", sexo);
    sessionStorage.setItem("libreta", libreta);
}


window.onload = function() {
    const nombre = sessionStorage.getItem("nombre");
    const nombre1 = sessionStorage.getItem("nombre1");
    const nombre2 = sessionStorage.getItem("nombre2");
    const nombre3 = sessionStorage.getItem("nombre3");
    const nombre4 = sessionStorage.getItem("nombre4");
    const perfil = sessionStorage.getItem("perfil");
    const nacimiento = sessionStorage.getItem("nacimiento");
    const edad = sessionStorage.getItem("edad");
    const experiencia = sessionStorage.getItem("experiencia");
    const identificacion = sessionStorage.getItem("identificacion");
    const telefono = sessionStorage.getItem("telefono");
    const telefono1 = sessionStorage.getItem("telefono1");
    const telefono2 = sessionStorage.getItem("telefono2");
    const telefono3 = sessionStorage.getItem("telefono3");
    const telefono4 = sessionStorage.getItem("telefono4");
    const email = sessionStorage.getItem("email");
    const universidad = sessionStorage.getItem("universidad");
    const titulo = sessionStorage.getItem("titulo");
    const fechaUniversidad = sessionStorage.getItem("fechaUniversidad");
    const sexo = sessionStorage.getItem("sexo");
    const libreta = sessionStorage.getItem("libreta");
    const fechaLibreta = sessionStorage.getItem("fechaLibreta");
    const primaria = sessionStorage.getItem("primaria");
    const fechaPrimaria = sessionStorage.getItem("fechaPrimaria");
    const secundaria = sessionStorage.getItem("secundaria");
    const fechaSecundaria = sessionStorage.getItem("fechaSecundaria");

    document.getElementById("nombre").textContent = nombre;
    document.getElementById("nombre1").textContent = nombre1;
    document.getElementById("nombre2").textContent = nombre2;
    document.getElementById("nombre3").textContent = nombre3;
    document.getElementById("nombre4").textContent = nombre4;
    document.getElementById("perfil").textContent = perfil;
    document.getElementById("nacimiento").textContent = nacimiento;
    document.getElementById("edad").textContent = edad;
    document.getElementById("experiencia").textContent = experiencia;
    document.getElementById("identificacion").textContent = identificacion;
    document.getElementById("telefono").textContent = telefono;
    document.getElementById("telefono1").textContent = telefono1;
    document.getElementById("telefono2").textContent = telefono2;
    document.getElementById("telefono3").textContent = telefono3;
    document.getElementById("telefono4").textContent = telefono4;
    document.getElementById("email").textContent = email;
    document.getElementById("universidad").textContent = universidad;
    document.getElementById("titulo").textContent = titulo;
    document.getElementById("fechaUniversidad").textContent = fechaUniversidad;
    document.getElementById("sexo").textContent = sexo;
    document.getElementById("libreta").textContent = libreta;
    document.getElementById("fechaLibreta").textContent = fechaLibreta;
    document.getElementById("primaria").textContent = primaria;
    document.getElementById("fechaPrimaria").textContent = fechaPrimaria;
    document.getElementById("secundaria").textContent = secundaria;
    document.getElementById("fechaSecundaria").textContent = fechaSecundaria;

    // Mostrar imagen basada en el sexo
    const imagenSexo = document.getElementById("imagenSexo");
    if (sexo === "Femenino") {
        imagenSexo.src = "imagenes/icono_mujer.png"; // Cambia esto a la ruta real de la imagen
    } else if (sexo === "Masculino") {
        imagenSexo.src = "imagenes/icono_hombre.png"; // Cambia esto a la ruta real de la imagen
    } else if (sexo === "Otro") {
        imagenSexo.src = "imagenes/otro.png"; // Cambia esto a la ruta real de la imagen
    }
}