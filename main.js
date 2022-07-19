class Membresia {
    constructor(tipo, cursos, gramos, contenido, asesoramiento){
        this.tipo = tipo;
        this.cursos = cursos;
        this.gramos = gramos;
        this.contenido = contenido;
        this.asesoramiento = asesoramiento;
    }
   
}

const membresias = [
    new Membresia ('Gratuita', 'No incluye cursos', 'No incluye gramos mensuales', 'Contenido de la web', 'No incluye asesoramiento'),
    new Membresia ('Clasica', 'Cursos basicos', '3, 9 o 15 gramos mensuales', 'Contenido de la web', 'Primer asesoramiento gratis'),
    new Membresia ('Premium', 'Todos los cursos online', '10, 20 o 30 gramos mensuales', 'Contenido de la web', 'Asesoramiento mensual')
]

class Gramos {
    constructor(cantidad, precio){
        this.cantidad = cantidad;
        this.precio = precio;
    }
    membresiaMensual (){
       return this.cantidad * this.precio;
    }
}

const gramosMensuales = [
    new Gramos (3, 1100),
    new Gramos (9, 1050),
    new Gramos (15, 950),
    new Gramos (10, 1100),
    new Gramos (20, 1000 ),
    new Gramos (30, 950)
]

const g3 = new Gramos (3, 1100);
const g9 = new Gramos (9, 1050);
const g15 = new Gramos (15, 950);
const g10 = new Gramos (10, 1100);
const g20 = new Gramos (20, 1000);
const g30 = new Gramos (30, 950);

class Usuario {
    constructor(dni, nombre){
        this.dni = dni;
        this.nombre = nombre;
    }
}

mgratuita = membresias.find((item) => item.tipo === 'Gratuita');
mclasica = membresias.find((item) => item.tipo === 'Clasica');
mpremium = membresias.find((item) => item.tipo === 'Premium');

let usuario = [];
let formulario;
let dni;
let nombre;
let tabla;

function inicializar(){
    formulario = document.getElementById("formulario");
    dni = document.getElementById("dni");
    nombre = document.getElementById("nombre");
    tabla = document.getElementById("tablaProductos");
};
inicializar();

formulario.onsubmit = (event) => {
    event.preventDefault();
    
    let usuarioNuevo = new Usuario(dni.value, nombre.value);
    usuario.push(usuarioNuevo);
    limpiarTabla();
    agregarInfoUsuario();
    formulario.reset();
    
}

function limpiarTabla() {
    while(tabla.rows.lenght > 1){
        tabla.deleteRow(1)
    }
}

function agregarInfoUsuario(){
usuario.forEach(usuario => {
    let tabla = document.querySelector(".tabla")
    let filaTabla = document.createElement("tr")

    filaTabla.innerHTML = `
    <td>${usuario.dni}</td>
    <td>${usuario.nombre}</td>
    `
    tabla.append(filaTabla)

});
}
agregarInfoUsuario();


while(dni.length >= 7){
    if(dni >= 45000000){
        console.log("Lo sentimos es menor de edad")
    } else {
        let nombre = prompt("Ingrese su nombre");
        console.log(`Hola ${nombre} le informamos a continuacion nuestras membresias:`);
        for (const objeto of membresias){
            console.log(`${objeto.tipo}: \n ${objeto.cursos} \n ${objeto.gramos} \n ${objeto.contenido} \n ${objeto.asesoramiento}`)
        };
        let membresiaElegida = Number(prompt("Ingrese el numero del tipo de membresia que desea \n1 - Premium \n2 - Clasica\n3 - Gratuita"));
            if(membresiaElegida === 3 ){
            console.log(`Usted ha seleccionado membresia ${mgratuita.tipo}: \n ${mgratuita.cursos} \n ${mgratuita.gramos} \n ${mgratuita.contenido} \n ${mgratuita.asesoramiento}`);
             dni=3; 
            } else if (membresiaElegida === 2){
                console.log(`Usted ha seleccionado membresia ${mclasica.tipo}: \n ${mclasica.cursos} \n ${mclasica.gramos} \n ${mclasica.contenido} \n ${mclasica.asesoramiento}`);
                const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 3, 9 o 15"));
                if(gramos1 === 5){
                    console.log(`Abono mensual por 3gr: $${g3.membresiaMensual()}`)
                } else if (gramos1 === 10) {
                    console.log(`Abono mensual por 9gr: $${g9.membresiaMensual()}`)
                } else {
                    console.log(`Abono mensual por 15gr: $${g15.membresiaMensual()}`)
                }
                dni=3; 
            } else if (membresiaElegida === 1){
                console.log(`Usted ha seleccionado membresia ${mpremium.tipo}: \n ${mpremium.cursos} \n ${mpremium.gramos} \n ${mpremium.contenido} \n ${mpremium.asesoramiento}`);
                const gramos1 = Number(prompt("Ingrese la cantidad de gramos que desea 10, 20 o 30"));
                if(gramos1 === 10){
                    console.log(`Abono mensual por 10gr: $${g10.membresiaMensual()}`)
                } else if (gramos1 === 20) {
                    console.log(`Abono mensual por 20gr: $${g20.membresiaMensual()}`)
                } else {
                    console.log(`Abono mensual por 30gr: $${g30.membresiaMensual()}`)
                }
                dni=3; 
            }else{
                console.log("Lo sentimos el numero ingresado es incorrecto")
                console.log("Gracias por su visita!")
                dni=3; 
            } 
    } 
    
}; 


class Usuarios {
constructor(nombre, edad, membresia, comentario){
    this.nombre = nombre;
    this.edad = edad;
    this.membresia = membresia;
    this.comentario = comentario;
    }
}

const experiencias = [];

experiencias.push(new Usuarios("Eli", "30", "Premium", 'Comentario: "100% recomendada!!"'));
experiencias.push(new Usuarios("Carlos", "45", "Clasica", 'Comentario: "La calidad es exelente y el servicio tmb."'));
experiencias.push(new Usuarios("Juan", "24", "Gratuita", 'Comentario: "La consulta gratuita fue muy buena, voy por una membresia Premium!!"'));

console.log("Te dejamos algunas experiencias de nuestro/as socios/as:");
for (const objeto of experiencias){
    console.log(`${objeto.nombre} \n ${objeto.edad} \n ${objeto.membresia} \n ${objeto.comentario}`);
};
