import moment from 'moment';

export const saludar = function(nombre) {
    return "Hola ", nombre;
}

export const hora = function() {
    return moment().format();
}

