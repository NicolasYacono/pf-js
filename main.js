//Membresias objeto
class Membresia {
    constructor(tipo, cursos, gramos, contenido, asesoramiento, imagen){
        this.tipo = tipo;
        this.cursos = cursos;
        this.gramos = gramos;
        this.contenido = contenido;
        this.asesoramiento = asesoramiento;
        this.imagen = imagen;
    }
   
}
//Array objetos con membresias
const membresias = [
    new Membresia ('Gratuita', 'No incluye cursos', 'No incluye gramos mensuales', 'Contenido de la web', 'No incluye asesoramiento', '/assets/imgs/coco1.JPG'),
    new Membresia ('Clasica', 'Cursos basicos', '3, 9 o 15 gramos mensuales', 'Contenido de la web', 'Primer asesoramiento gratis', '/assets/imgs/DSC_4530.JPG'),
    new Membresia ('Premium', 'Todos los cursos online', '10, 20 o 30 gramos mensuales', 'Contenido de la web', 'Asesoramiento mensual',  '/assets/imgs/DSC_4537.JPG')
]

// Membresias filtradas por metodo find para separarlas
let mgratuita = membresias.find((item) => item.tipo === 'Gratuita');
let mclasica = membresias.find((item) => item.tipo === 'Clasica');
let mpremium = membresias.find((item) => item.tipo === 'Premium');

//Objeto Gramos
class Gramos {
    constructor(cantidad, precio, membresia){
        this.cantidad = cantidad;
        this.precio = precio;
        this.membresia = membresia;
    }
    membresiaMensual (){
       return this.cantidad * this.precio;
    }
}

//Array objetos Gramos
const gramosMensuales = [
    new Gramos (3, 1100, 'Clasica'),
    new Gramos (9, 1050),
    new Gramos (15, 950),
    new Gramos (10, 1100, 'Premium'),
    new Gramos (20, 1000),
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



//DOM de membresias 

function mostrarMembresias (){
    const contenedor = document.querySelector('#membresias');
    membresias.forEach(membresia => {
        contenedor.innerHTML += `
    <div class="card bg-dark bg-gradient text-light border-light border-end-0 border-bottom-0 text-center" style="width: 18rem;">
        <img src= ${membresia.imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 id="membresia1" class="card-title fw-bold">${membresia.tipo}</h5>
            <p id="incluye1" class="card-text"> ${membresia.cursos}</p>
            <p id="incluye1" class="card-text"> ${membresia.gramos}</p>
            <p id="incluye1" class="card-text"> ${membresia.contenido}</p>
            <p id="incluye1" class="card-text"> ${membresia.asesoramiento}</p>
            <button id="myBtn" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#${membresia.tipo}">
            Abono mensual
            </button>
        </div>
    </div>
        `
    });
}
mostrarMembresias();




function gramosM (){
    const contenedor = document.querySelector('#modalMembresias');
    gramosMensuales.forEach(gramo => {
        contenedor.innerHTML += `
        <div class="modal fade" id="${gramo.membresia}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Gramos Mensuales / Membresia ${gramo.membresia}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
           ${gramo.cantidad} gramos = ${gramo.cantidad * gramo.precio} <br>
           ${gramo.cantidad} gramos = ${gramo.cantidad * gramo.precio} <br>
           ${gramo.cantidad} gramos = ${gramo.cantidad * gramo.precio}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Obtener membresia</button>
          </div>
        </div>
        </div>
      </div>
        `
    })
    
}
gramosM();

//Objeto Usuario modal
class Usuario {
    constructor(dni, nombre){
        this.dni = dni;
        this.nombre = nombre;
    }
}


//Agrego info que pone el usuario
function agregarInfoUsuario(usuarioNuevo){
    const usuario = document.querySelector('#usuario1');
    const dni = document.querySelector('#dniu');
    
    usuarioNuevo.dni;
    usuarioNuevo.nombre;
    if (usuarioNuevo.dni >= 45000000 || usuarioNuevo.nombre === null){
        Toastify ({
            text: 'DNI O USUARIO INCORRECTO',
            duration: 3000,
            gravity: "top",
            position: "center",
            style: {
                background: "#ff0000",
            }
        }).showToast();
    } else {
        dni.innerText = usuarioNuevo.dni;
        usuario.innerText = usuarioNuevo.nombre;
        localStorage.setItem('dni', usuarioNuevo.dni);
        localStorage.setItem('nombre', usuarioNuevo.nombre);
        formualrio.parentElement.parentElement.style.display = 'none'; 
    }
}

//Obtengo formulario
const formualrio = document.querySelector('#formulario');


//Agrego evento al formulario
formulario.onsubmit = (event) => {
    event.preventDefault();
    const dni = formualrio.dni.value;
    const nombre = formualrio.nombre.value;
    

    // Creo objeto con info del usuario
    const usuarioNuevo = new Usuario(dni, nombre);

    formulario.reset();
    
    //Llamo a la funcion con el objeto nuevo
    agregarInfoUsuario(usuarioNuevo);
    
}


if(localStorage.getItem('nombre') || localStorage.getItem('dni')){
    
    const dni = localStorage.getItem('dni');
    const nombre = localStorage.getItem('nombre');

    const usuarioNuevo = new Usuario (dni, nombre);

    agregarInfoUsuario(usuarioNuevo);

    formualrio.parentElement.parentElement.style.display = 'none'; 

} 




//Class Experiencias
class UsuariosExperiencias {
    constructor(nombre, edad, membresia, comentario){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
        this.comentario = comentario;
        }
    }
    
    //Array con objetos, Experiencias
    const experiencias = [
        new UsuariosExperiencias("Eli", "33", "Premium", "100% recomendada!!"),
        new UsuariosExperiencias ("Carlos", "45", "Clasica", "La calidad es exelente y el servicio tmb."),
        new UsuariosExperiencias ("Juan", "24", "Gratuita", "La consulta gratuita fue muy buena, voy por una membresia Premium!!"),
    ];
    
    let exp1 = experiencias.find((item) => item.edad === '33');
    let exp2 = experiencias.find((item) => item.edad === '45');
    let exp3 = experiencias.find((item) => item.edad === '24');

    //DOM de experiencias 
    function expUsuarios(){
        const contenedor = document.querySelector('#carouselExampleSlidesOnly');
        contenedor.innerHTML += `
        <div class="carousel-inner text-center mt-2 border border-warning bg-dark bg-gradient p-3">
                <div class="carousel-item active">
                    <h4 class="text-light">${exp1.nombre} - ${exp1.edad} años</h4>
                    <div class="text-light">
                        <h5>Membresia: ${exp1.membresia}</h5>
                        <h5>"${exp1.comentario}"</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <h4 class="text-light">${exp2.nombre} - ${exp2.edad} años</h4>
                    <div class="text-light">
                        <h5>Membresia: ${exp2.membresia}</h5>
                        <h5>"${exp2.comentario}"</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <h4 class="text-light">${exp3.nombre} - ${exp3.edad} años</h4>
                    <div class="text-light">
                        <h5> Membresia: ${exp3.membresia}</h5>
                        <h5>"${exp3.comentario}"</h5>
                    </div>
                </div>
        </div>
        `
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

