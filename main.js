let btnPlataforma = document.getElementById('plataforma');

btnPlataforma.addEventListener('click', (e) => {
  Toastify({
    text: 'SU MAIL AÚN NO ESTÁ AUTORIZADO',
    duration: 3000,
    gravity: 'top',
    position: 'left',
    style: {
      background: '#ff0000',
    },
  }).showToast();
});

class Membresia {
  constructor(tipo, cursos, gramos, contenido, asesoramiento, imagen, abono) {
    this.tipo = tipo;
    this.cursos = cursos;
    this.gramos = gramos;
    this.contenido = contenido;
    this.asesoramiento = asesoramiento;
    this.imagen = imagen;
    this.abono = abono;
  }
}

const membresias = [
  new Membresia('Gratuita', 'No incluye cursos', 'No incluye gramos mensuales', 'Contenido de la web', 'No incluye asesoramiento', '/assets/imgs/coco1.JPG', 'No requiere abono'),
  new Membresia('Clasica', 'Cursos basicos', '3, 9 o 15 gramos mensuales', 'Contenido de la web', 'Primer asesoramiento gratis', '/assets/imgs/DSC_4530.JPG', 'Abono Mensual'),
  new Membresia('Premium', 'Todos los cursos online', '10, 20 o 30 gramos mensuales', 'Contenido de la web', 'Asesoramiento mensual', '/assets/imgs/DSC_4537.JPG', 'Abono Mensual'),
];
let mgratuita = membresias.find((item) => item.tipo === 'Gratuita');
let mclasica = membresias.find((item) => item.tipo === 'Clasica');
let mpremium = membresias.find((item) => item.tipo === 'Premium');

class Gramos {
  constructor(cantidad, precio, cantidad1, precio1, cantidad2, precio2, membresia) {
    this.cantidad = cantidad;
    this.precio = precio;
    this.cantidad1 = cantidad1;
    this.precio1 = precio1;
    this.cantidad2 = cantidad2;
    this.precio2 = precio2;
    this.membresia = membresia;
  }
  membresiaMensual() {
    return this.cantidad * this.precio;
  }
}

const gramosMensuales = [new Gramos(3, 1100, 9, 1050, 15, 1000, 'Clasica'), new Gramos(10, 1100, 20, 1000, 30, 900, 'Premium')];

function mostrarMembresias() {
  const contenedor = document.querySelector('#membresias');
  membresias.forEach((membresia) => {
    contenedor.innerHTML += `
    <div class="card bg-dark bg-gradient text-light border-warning border-end-0 border-bottom-0 text-center" style="width: 18rem;">
        <img src= ${membresia.imagen} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 id="membresia1" class="card-title fw-bold">${membresia.tipo}</h5>
            <p id="incluye1" class="card-text"> ${membresia.cursos}</p>
            <p id="incluye1" class="card-text"> ${membresia.gramos}</p>
            <p id="incluye1" class="card-text"> ${membresia.contenido}</p>
            <p id="incluye1" class="card-text"> ${membresia.asesoramiento}</p>
            <button id="myBtn" type="button" class="btn btn-warning fw-bold" data-bs-toggle="modal" data-bs-target="#${membresia.tipo}">
            ${membresia.abono}
            </button>
        </div>
    </div>
        `;
  });
}
mostrarMembresias();

function gramosM() {
  const contenedor = document.querySelector('#modalMembresias');
  gramosMensuales.forEach((gramo) => {
    contenedor.innerHTML += `
        <div class="modal fade" id="${gramo.membresia}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content bg-dark">
            <div class="modal-header text-light fw-bold">
            <h5 class="modal-title text-center" id="staticBackdropLabel">Abonos Mensuales / Membresia ${gramo.membresia}</h5>
            <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body fw-bold text-center">
          <button type="button" class="btn btn-warning fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> ${gramo.cantidad}g = $${gramo.cantidad * gramo.precio} </button> <br>
            <button type="button" class="btn btn-warning mt-2 fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> ${gramo.cantidad1}g = $${
      gramo.cantidad1 * gramo.precio1
    } </button> <br>
          <button type="button" class="btn btn-warning mt-2 fw-bold fs-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> ${gramo.cantidad2}g = $${gramo.cantidad2 * gramo.precio2} </button>
            </div>
            <div class="modal-footer">
            </div>
        </div>
        </div>
        </div>
        `;
  });
}
gramosM();

let rango1 = 100;
let rango2 = 10000;
let numeroSolicitud = rango1 + Math.floor(Math.random() * rango2);
numeroSolicitud++;

function abonoM() {
  const contenedor = document.querySelector('#modalAbonoYMembresia');
  contenedor.innerHTML = `
        <div  class="modal fade bg-warning"  style="background-image: url(/assets/imgs/DSC_4526.JPG); background-attachment: local; background-size: cover; background-repeat: no-repeat;" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-dark bg-gradient text-light fw-bold">
            <h5 class="modal-title text-light" id="staticBackdropLabel">Formulario de inscripcion</h5>
            <button type="button" id="BtnRefresh" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-dark bg-gradient">
            <form  id="form">
                <h5 class="text-dark bg-warning text-center fw-bold border rounded-pill p-2">La solicitud será enviada a su mail. Donde econtrará los pasos a seguir para ser autorizado a ingresar a la plataforma.</h5>
                <div class="mb-0 mx-5 my-2">
                <label class="form-label fw-bold text-light mt-2">Número de solicitud</label>
                <input class="form-control" id="disabledInput" type="text" placeholder="${numeroSolicitud}" disabled>
                </div>
            </form>
            </div>
            <div class="modal-footer bg-dark">
            <button type="button" id="BtnCancelar" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" id="BtnEnviar" class="btn btn-warning fw-bold">Enviar Solicitud</button>
            </div>
        </div>
        </div>
    </div> 
        `;
}
abonoM();

let btnEnviar = document.querySelector('#BtnEnviar');

btnEnviar.addEventListener('click', (e) => {
  const mail = document.getElementById('exampleInputEmail1');
  Toastify({
    text: 'SOLICITUD ENVIADA',
    duration: 2000,
    gravity: 'top',
    position: 'right',
    style: {
      background: '#ffff00',
      color: '#3c3c3c',
    },
  }).showToast();
  setTimeout(() => {
    location.reload();
  }, 2000);
});

class Usuario {
  constructor(dni, nombre) {
    this.dni = dni;
    this.nombre = nombre;
  }
}

let btnLimpiar = document.getElementById('boton');

btnLimpiar.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  const usuario = document.querySelector('#usuario1');
  const dni = document.querySelector('#dniu');
  dni.innerText = 'DNI';
  usuario.innerText = 'Usuario';
  Toastify({
    text: 'DNI Y MAIL LIMPIADOS',
    duration: 1500,
    gravity: 'top',
    position: 'right',
    style: {
      background: '#ffff00',
      color: '#3c3c3c',
    },
  }).showToast();
  setTimeout(() => {
    location.reload();
  }, 1500);
});

function agregarInfoUsuario(usuarioNuevo) {
  const usuario = document.querySelector('#usuario1');
  const dni = document.querySelector('#dniu');

  const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const validarM = expReg.test(usuarioNuevo.nombre);
  usuarioNuevo.dni;
  usuarioNuevo.nombre;
  if (usuarioNuevo.dni >= 45000000 || usuarioNuevo.dni.length === 0 || usuarioNuevo.dni < 1000000 || usuarioNuevo.nombre === null || usuarioNuevo.nombre.length === 0 || validarM === false) {
    Toastify({
      text: 'DNI O MAIL INCORRECTO',
      duration: 3000,
      gravity: 'top',
      position: 'center',
      style: {
        background: '#ff0000',
      },
    }).showToast();
  } else {
    dni.innerText = usuarioNuevo.dni;
    usuario.innerText = usuarioNuevo.nombre;
    localStorage.setItem('dni', usuarioNuevo.dni);
    localStorage.setItem('nombre', usuarioNuevo.nombre);
    formualrio.parentElement.parentElement.style.display = 'none';
    Toastify({
      text: 'CONOZCA NUESTRAS SEPAS Y SELECCIONE UNA MEMBRESIA',
      duration: 2000,
      gravity: 'top',
      position: 'center',
      style: {
        background: '#ffff00',
        color: '#3c3c3c',
      },
    }).showToast();
  }
}

const formualrio = document.querySelector('#formulario');
formulario.onsubmit = (event) => {
  event.preventDefault();
  const dni = formualrio.dni.value;
  const nombre = formualrio.nombre.value;
  const usuarioNuevo = new Usuario(dni, nombre);
  formulario.reset();
  agregarInfoUsuario(usuarioNuevo);
};

if (localStorage.getItem('nombre') || localStorage.getItem('dni')) {
  const dni = localStorage.getItem('dni');
  const nombre = localStorage.getItem('nombre');
  const usuarioNuevo = new Usuario(dni, nombre);
  agregarInfoUsuario(usuarioNuevo);
  formualrio.parentElement.parentElement.style.display = 'none';
}

class UsuariosExperiencias {
  constructor(nombre, edad, membresia, comentario) {
    this.nombre = nombre;
    this.edad = edad;
    this.membresia = membresia;
    this.comentario = comentario;
  }
}

const experiencias = [
  new UsuariosExperiencias('Eli', '33', 'Premium', '100% recomendada!!'),
  new UsuariosExperiencias('Carlos', '45', 'Clásica', 'La calidad es exelente y el servicio tmb.'),
  new UsuariosExperiencias('Juan', '24', 'Gratuita', 'La consulta gratuita fue muy buena, voy por una membresia Premium!!'),
];

let exp1 = experiencias.find((item) => item.edad === '33');
let exp2 = experiencias.find((item) => item.edad === '45');
let exp3 = experiencias.find((item) => item.edad === '24');

//DOM de experiencias
function expUsuarios() {
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
        `;
}
expUsuarios();
