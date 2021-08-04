
export default function validarCrearCuenta(valores) {
    let errores = {};

    // Validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio";
    }

    // Validar empresa
    if(!valores.empresa) {
        errores.empresa = "Nombre de la Empresa es obligatorio"
    }

    // Validar URL
    if(!valores.url) {
        errores.url = "La URL del producto es obligatoria "
    } else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL no valida"
    }

    // Validar descripcion
    if(!valores.descripcion) {
        errores.descripcion = "Agrega descripción del producto"
    }

    return errores
}