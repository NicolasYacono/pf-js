//Membresias objeto
class Membresia {
    constructor(tipo, cursos, gramos, contenido, asesoramiento, imagen, abono){
        this.tipo = tipo;
        this.cursos = cursos;
        this.gramos = gramos;
        this.contenido = contenido;
        this.asesoramiento = asesoramiento;
        this.imagen = imagen;
        this.abono = abono;
    }
   
}
//Array objetos con membresias
const membresias = [
    new Membresia ('Gratuita', 'No incluye cursos', 'No incluye gramos mensuales', 'Contenido de la web', 'No incluye asesoramiento', '/assets/imgs/coco1.JPG', 'No requiere abono'),
    new Membresia ('Clasica', 'Cursos basicos', '3, 9 o 15 gramos mensuales', 'Contenido de la web', 'Primer asesoramiento gratis', '/assets/imgs/DSC_4530.JPG', 'Abono Mensual'),
    new Membresia ('Premium', 'Todos los cursos online', '10, 20 o 30 gramos mensuales', 'Contenido de la web', 'Asesoramiento mensual',  '/assets/imgs/DSC_4537.JPG', 'Abono Mensual')
]

// Membresias filtradas por metodo find para separarlas
let mgratuita = membresias.find((item) => item.tipo === 'Gratuita');
let mclasica = membresias.find((item) => item.tipo === 'Clasica');
let mpremium = membresias.find((item) => item.tipo === 'Premium');

//Objeto Gramos
class Gramos {
    constructor(cantidad, precio, cantidad1, precio1, cantidad2, precio2, membresia){
        this.cantidad = cantidad;
        this.precio = precio;
        this.cantidad1 = cantidad1;
        this.precio1 = precio1;
        this.cantidad2 = cantidad2;
        this.precio2 = precio2;
        this.membresia = membresia;
    }
    membresiaMensual (){
       return this.cantidad * this.precio;
    }
}

//Array objetos Gramos
const gramosMensuales = [
    new Gramos (3, 1100, 9, 1050, 15, 1000, 'Clasica'),
    new Gramos (10, 1100, 20, 1000, 30, 900, 'Premium'),
]

let clasicaM = gramosMensuales.find((item) => item.membresia === 'Clasica')
let premiumM = gramosMensuales.find((item) => item.membresia === 'Premium')
let arrayP = [];
arrayP.push(clasicaM);
console.log(clasicaM);
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
            ${membresia.abono}
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
        <div class="modal-content bg-dark">
          <div class="modal-header text-light fw-bold">
            <h5 class="modal-title text-center" id="staticBackdropLabel">Abonos Mensuales / Membresia ${gramo.membresia}</h5>
            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body fw-bold text-center">
          <button id="botonGramosMensuales" type="button" class="btn btn-warning fw-bold fs-5"> ${gramo.cantidad}g = $${gramo.cantidad * gramo.precio} </button> <br>
          <button id="botonGramosMensuales" type="button" class="btn btn-warning mt-2 fw-bold fs-5"> ${gramo.cantidad1}g = $${gramo.cantidad1 * gramo.precio1} </button> <br>
          <button id="botonGramosMensuales" type="button" class="btn btn-warning mt-2 fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> ${gramo.cantidad2}g = $${gramo.cantidad2 * gramo.precio2} </button>
          </div>
          <div class="modal-footer">
          </div>
        </div>
        </div>
      </div>
        `
    })
    
}
gramosM();



function abonoM (){
    const contenedor = document.querySelector('#modalAbonoYMembresia');
    gramosMensuales.forEach(gramo => {
        contenedor.innerHTML += `
        <div class="mb-0 mx-5 my-2">
        <label class="form-label fw-bold text-light">Membresia</label>
        <input class="form-control" id="disabledInput" type="text" placeholder="${gramo.membresia}" disabled>
      </div>
      <div class="mb-0 mx-5 my-2">
        <label class="form-label fw-bold text-light">Gramos y abono mensual</label>
        <input class="form-control" id="disabledInput" type="text" placeholder="${gramo.precio}" disabled>
      </div>
        `
    })
}
abonoM();

/* let btnGramos = document.querySelector('#botonGramosMensuales1')

btnGramos.addEventListener('click', e =>{
const contenedor = document.querySelector('#modalAbonoYMembresia');
arrayP.forEach (gramo => {
    contenedor.innerHTML = `
    <div class="mb-0 mx-5 my-2">
    <label class="form-label fw-bold text-light">Membresia</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="${gramo.membresia}" disabled>
  </div>
  <div class="mb-0 mx-5 my-2">
    <label class="form-label fw-bold text-light">Gramos y abono mensual</label>
    <input class="form-control" id="disabledInput" type="text" placeholder="${gramo.precio}" disabled>
  </div>
    `
})
}) */



//Objeto Usuario modal
class Usuario {
    constructor(dni, nombre){
        this.dni = dni;
        this.nombre = nombre;
    }
}

let btnLimpiar = document.getElementById('boton');

btnLimpiar.addEventListener('click', e => {
    e.preventDefault();
    localStorage.clear();
    const usuario = document.querySelector('#usuario1');
    const dni = document.querySelector('#dniu');
    dni.innerText = 'DNI';
    usuario.innerText = 'Usuario';
    Toastify ({
        text: 'DNI Y USUARIO LIMPIADOS',
        duration: 1500,
        gravity: "top",
        position: "right",
        style: {
            background: "#ffff00",
            color: "#3c3c3c",
        }
    }).showToast();
    setTimeout(() => {
        location. reload();
    }, 1500)

});

//Agrego info que pone el usuario
function agregarInfoUsuario(usuarioNuevo){
    const usuario = document.querySelector('#usuario1');
    const dni = document.querySelector('#dniu');
    
    usuarioNuevo.dni;
    usuarioNuevo.nombre;
    if (usuarioNuevo.dni >= 45000000 || usuarioNuevo.dni.length === 0 ||usuarioNuevo.dni.length > 1000000  || usuarioNuevo.nombre === null || usuarioNuevo.nombre.length === 0 ){
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

