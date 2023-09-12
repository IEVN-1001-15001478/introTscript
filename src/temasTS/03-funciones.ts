//funciones

function sumar(a:number, b:number):number{
    return a+b;
}

//sumar();
const resultado=sumar(4,6);

console.log(resultado);

function multiplicar(n1:number, otronumero:number, base:number=3):number{
    let tem=n1*base;
    return tem;
}

console.log(multiplicar(3,5));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascotas:Mascota, x:number):void{

    mascotas.edad+=x;
    console.log(mascotas);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ' , this.edad);
    },
}
calcular(nuevaMascota,3);