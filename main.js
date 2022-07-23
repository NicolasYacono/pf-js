//Membresias objeto
class Membresia {
    constructor(tipo, cursos, gramos, contenido, asesoramiento){
        this.tipo = tipo;
        this.cursos = cursos;
        this.gramos = gramos;
        this.contenido = contenido;
        this.asesoramiento = asesoramiento;
    }
   
}
//Array objetos con membresias
const membresias = [
    new Membresia ('Gratuita', 'No incluye cursos', 'No incluye gramos mensuales', 'Contenido de la web', 'No incluye asesoramiento'),
    new Membresia ('Clasica', 'Cursos basicos', '3, 9 o 15 gramos mensuales', 'Contenido de la web', 'Primer asesoramiento gratis'),
    new Membresia ('Premium', 'Todos los cursos online', '10, 20 o 30 gramos mensuales', 'Contenido de la web', 'Asesoramiento mensual')
]

// Membresias filtradas por metodo find para separarlas
let mgratuita = membresias.find((item) => item.tipo === 'Gratuita');
let mclasica = membresias.find((item) => item.tipo === 'Clasica');
let mpremium = membresias.find((item) => item.tipo === 'Premium');

//Objeto Gramos
class Gramos {
    constructor(cantidad, precio){
        this.cantidad = cantidad;
        this.precio = precio;
    }
    membresiaMensual (){
       return this.cantidad * this.precio;
    }
}

//Array objetos Gramos
const gramosMensuales = [
    new Gramos (3, 1100),
    new Gramos (9, 1050),
    new Gramos (15, 950),
    new Gramos (10, 1100),
    new Gramos (20, 1000 ),
    new Gramos (30, 950)
]

//Variables con los importes de las membresias segun gramos basados en gramosMensuaales
const g3 = new Gramos (3, 1100);
const g9 = new Gramos (9, 1050);
const g15 = new Gramos (15, 950);
const g10 = new Gramos (10, 1100);
const g20 = new Gramos (20, 1000);
const g30 = new Gramos (30, 950);



//ARRAY NAV - DOM
let nav = ["Cursos", "Sepas", "Contenido", "Asesoramiento"];

let cnav = `<a>${nav[0]}</a>`;
document.querySelector('#cursosNav').innerHTML = cnav;

let snav = `<a>${nav[1]}</a>`;
document.querySelector('#sepasNav').innerHTML = snav;

let conav = `<a>${nav[2]}</a>`;
document.querySelector('#contenidoNav').innerHTML = conav;

let anav = `<a>${nav[3]}</a>`;
document.querySelector('#asesoramientoNav').innerHTML = anav;



//DOM de membresias en las Cards
function membresiasCards(){
    let gratuitaM = `<h5>${mgratuita.tipo}</h5>`;
document.querySelector('#membresia1').innerHTML = gratuitaM;
let gratuitaMi = `<li>${mgratuita.cursos}</li>
            <li>${mgratuita.gramos}</li>
            <li>${mgratuita.contenido}</li>
            <li>${mgratuita.asesoramiento}</li>`;
document.querySelector('#incluye1').innerHTML = gratuitaMi;

let clasicaM = `<h5>${mclasica.tipo}</h5>`;
document.querySelector('#membresia2').innerHTML = clasicaM;
let clasicaMi = `<li>${mclasica.cursos}</li>
            <li>${mclasica.gramos}</li>
            <li>${mclasica.contenido}</li>
            <li>${mclasica.asesoramiento}</li>`;
document.querySelector('#incluye2').innerHTML = clasicaMi;

let premiumM = `<h5>${mpremium.tipo}</h5>`;
document.querySelector('#membresia3').innerHTML = premiumM;
let premiumMi = `<li>${mpremium.cursos}</li>
            <li>${mpremium.gramos}</li>
            <li>${mpremium.contenido}</li>
            <li>${mpremium.asesoramiento}</li>`;
document.querySelector('#incluye3').innerHTML = premiumMi;
}
membresiasCards();


let usuario = [];

let formulario;
let dni;
let nombre;
let usuario1;
let dniu;



//Objeto Usuario modal
class Usuario {
    constructor(dni, nombre){
        this.dni = dni;
        this.nombre = nombre;
    }
}

function inicializar(){
    formulario = document.getElementById("formulario");
    dni = document.getElementById("dni");
    nombre = document.getElementById("nombre");
};
inicializar();

//RESOLVER
function agregarInfoUsuario(){
   
}
agregarInfoUsuario();

formulario.onsubmit = (event) => {
    event.preventDefault();
    let usuarioNuevo = new Usuario(dni.value, nombre.value);
    usuario.push(usuarioNuevo);
    console.log(usuarioNuevo)
    agregarInfoUsuario();
    formulario.reset();
    
}

class UsuariosExperiencias {
    constructor(nombre, edad, membresia, comentario){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
        this.comentario = comentario;
        }
    }
    
    const experiencias = [];
    
    experiencias.push(new UsuariosExperiencias("Eli", "30", "Premium", 'Comentario: "100% recomendada!!"'));
    experiencias.push(new UsuariosExperiencias("Carlos", "45", "Clasica", 'Comentario: "La calidad es exelente y el servicio tmb."'));
    experiencias.push(new UsuariosExperiencias("Juan", "24", "Gratuita", 'Comentario: "La consulta gratuita fue muy buena, voy por una membresia Premium!!"'));
    
    
    
    function expUsuarios(){
    
    }
    expUsuarios();
    

/* while(dni.length >= 7){
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
 */

