/* const button = document.querySelector('modal');

button.addEventListener('click', () => {
    console.log('you click me');
});
 */

//CURSO NINJA, LA CALLBACKFUNCTION ESTA DIRECTAMENTE DENTRO DEL ADDEVENTLISTENER DONDE ESTA EL NOMBRE DE LA FUNCION QUE DESPUES LLAMA EN EL CURSO DE CODER
/* const items = document.querySelectorAll('li');

//AHORA VAMOS A REALIZAR UN EVENTO POR ETIQUETA 
//CUANDO UN EVENTO OCURRE EN EL BROWSER DENTRO DE LA CALLBACKFUNCTION NOS DA AUTOMATICAMENTE UN PARAMENTRO E, (EVENT OBJECT) 
// EL MISMO TIENE TODA LA INFORMACION DEL EVENTO, UN OBJECTO DEL EVENTO, SELECCIONAMOS EL TARGET QUE NOS DICE QUE ELEMENTO CLICKEAMOS
//PODEMOS USAR DIRECTAMENTE (ITEM), PERO EN EL FUTURO NOS VA A SERVIR MAS EL E.TARGET
 
items.forEach(item => {
    item.addEventListener('click', e =>{
        e.target.style.textDecoration = 'line-through';
    });
}); */

//CURSO CODER
/* boton.addEventListener('click', handelClick);

function handelClick() {
    alert('dio un click');
    
} */



//DOM de experiencias recorriendo array con cards

/*     function expUsuarios(){
        const contenedor = document.querySelector('#experiencias');
    experiencias.forEach(experiencia => {
        contenedor.innerHTML += `
        <div class="card bg-dark bg-gradient text-dark text-center border border-warning border-start-0 border-top-0 mb-3 mx-3 my-3 mt-3 p-2" style="max-width: 18rem;"> 
            <div class="card-header bg-warning bg-gradient">${experiencia.nombre} - ${experiencia.edad}</div>
            <div class="card-body text-light">
                <h5 class="card-title">${experiencia.membresia}"</h5>
                <p class="card-text">"${experiencia.comentario}"</p>
            </div>
        </div>
        `
        })
    }
    expUsuarios(); */
