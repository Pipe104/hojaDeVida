function limitarDigitos(elemento, cantidad) {
    if (elemento.value.length > cantidad) {
        elemento.value = elemento.value.slice(0, cantidad);
    }
}