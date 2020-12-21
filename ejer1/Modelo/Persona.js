var Persona = /** @class */ (function () {
    //CONSTRUCTOR
    function Persona(nombre, edad, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura = altura;
    }
    //SETTERS Y GETTERS
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = this.comprobarSexo(sexo);
    };
    Persona.prototype.setPeso = function (peso) {
        this.peso = peso;
    };
    Persona.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Persona.prototype.setEstadoCivil = function (estCivil) {
        this.estCivil = this.comprobarEstCivil(estCivil);
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.getPeso = function () {
        return this.peso;
    };
    Persona.prototype.getAltura = function () {
        return this.altura;
    };
    Persona.prototype.getEstadoCivil = function () {
        return this.estCivil;
    };
    Persona.prototype.calcularIMC = function () {
        var resultado;
        resultado = this.peso / (this.altura * this.altura);
        if (resultado < 20) {
            return -1;
        }
        else if (resultado <= 25) {
            return 0;
        }
        else {
            return 1;
        }
    };
    Persona.prototype.esMayorDeEdad = function () {
        var mayorEdad;
        if (this.edad < 18) {
            mayorEdad = false;
        }
        else {
            mayorEdad = true;
        }
        return mayorEdad;
    };
    Persona.prototype.comprobarSexo = function (sexo) {
        if (sexo != "H" && sexo != "M") {
            sexo = "H";
        }
        return sexo;
    };
    Persona.prototype.toString = function () {
        return this.nombre + " " + this.edad + " " + this.dni + " " + this.sexo + " " + this.peso + " " + this.altura + " " + this.estCivil;
    };
    Persona.prototype.comprobarEstCivil = function (estCivil) {
        if (estCivil == "casado" || estCivil == "soltero" || estCivil == "divorciado" || estCivil == "viudo") {
            return estCivil;
        }
        else {
            alert("Tienes que marcar un estado civil");
        }
    };
    Persona.prototype.generaDni = function () {
        var numero;
        numero = Math.random() * (99999999 - 10000000) + 10000000;
        numero = Math.floor(numero);
        var letra;
        var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
        var resto = numero % 23;
        letra = letras.charAt(resto);
        this.dni = numero + letra;
    };
    return Persona;
}());
