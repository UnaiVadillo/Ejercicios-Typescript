//JQUERY
///<reference path="../Libreria/index.d.ts" />
//CLASE
///<reference path="../Modelo/Persona.ts" />
var arrayPersonas = new Array();
$(document).ready(function () {
    $('#anadir').click(crearPersona);
    $('#finalizar').click(finalizar);
});
function crearPersona() {
    var nombre = $('#nombre').val().toString();
    var edad = Number($('#edad').val());
    var peso = Number($('#peso').val());
    var altura = Number($('#altura').val());
    var p = new Persona(nombre, edad, peso, altura);
    arrayPersonas[arrayPersonas.length] = p;
    console.log(p);
    p.setSexo(String($("input[name='sexo']:checked").val()));
    p.setEstadoCivil(String($("input[name='estCivil']:checked").val()));
    p.generaDni();
    alert(p);
}
function finalizar() {
    var msg;
    arrayPersonas.forEach(function (persona) {
        if (persona.calcularIMC() == -1) {
            msg = persona.getNombre() + " -> peso inferior al ideal";
        }
        else if (persona.calcularIMC() == 0) {
            msg = persona.getNombre() + " -> peso  ideal";
        }
        else {
            msg = persona.getNombre() + " -> sobrepeso";
        }
        if (persona.esMayorDeEdad()) {
            msg += " y mayor de edad \n";
        }
        else {
            msg += " y menor de edad \n";
        }
        msg += persona.toString();
        alert(msg);
    });
}
