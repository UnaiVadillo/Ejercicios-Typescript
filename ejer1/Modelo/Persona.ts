class Persona{
    private nombre: string;
    private edad: number;
    private dni: string;
    private sexo: string;
    private peso:number;
    private altura: number;
    private estCivil: string;

    //CONSTRUCTOR
    constructor(nombre:string,edad:number, peso:number, altura:number)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
        this.altura= altura;
    }
    //SETTERS Y GETTERS

    setNombre(nombre:string):void{
        this.nombre = nombre;
    }
    setEdad(edad:number):void{
        this.edad = edad;
    }
    setSexo(sexo:string):void{
        this.sexo = this.comprobarSexo(sexo);
    }
    setPeso(peso:number):void{
        this.peso = peso;
    }
    setAltura(altura:number):void{
        this.altura = altura;
    }
    setEstadoCivil(estCivil:string):void {
        this.estCivil = this.comprobarEstCivil(estCivil);
    }

    getNombre():string{
        return this.nombre;
    }
    getEdad():number{
        return this.edad;
    }
    getDni():string{
        return this.dni;
    }
    getSexo():string{
        return this.sexo;
    }
    getPeso():number{
        return this.peso;
    }
    getAltura():number{
        return this.altura;
    }
    getEstadoCivil():string{
        return this.estCivil;
    }

    calcularIMC():number{
        let resultado:number;
        resultado= this.peso/(this.altura * this.altura);
        if(resultado<20){
            return -1;
        }else if(resultado<=25){
            return 0;
        }else{
            return 1;
        }
    }
    esMayorDeEdad(): boolean{
        let mayorEdad:boolean;
        if(this.edad<18){
            mayorEdad= false;
        }else{
            mayorEdad=true;
        }
        return mayorEdad;
    }
    comprobarSexo(sexo:string):string{
        if(sexo!="H" && sexo!="M"){
            sexo="H";
        }
        return sexo;
    }
    toString():string{
        return this.nombre + " " + this.edad + " " + this.dni + " " + this.sexo + " " + this.peso + " " + this.altura + " " + this.estCivil;
    }
    comprobarEstCivil(estCivil:string):string{
        if(estCivil=="casado" || estCivil=="soltero" || estCivil=="divorciado" || estCivil=="viudo"){
            return estCivil;
        }else{
            alert("Tienes que marcar un estado civil");
        }
    }
    generaDni():void{
        let numero:number;
        numero = Math.random() * (99999999- 10000000) + 10000000;
        numero=Math.floor(numero);
        let letra:string;
        let letras:string ='TRWAGMYFPDXBNJZSQVHLCKET';
        let resto:number = numero % 23;
        letra = letras.charAt(resto);
        this.dni = numero + letra;
    }
}
