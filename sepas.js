fetch('/data.json')
.then ((resinicial) => resinicial.json())
.then((res) => {
    const sepas = res;
    const contenedor = document.querySelector('#sepas');
    sepas.forEach(sepa => {
        contenedor.innerHTML += `
    <div class="card mb-3 bg-dark text-light" style="max-width: 800px;">
    <div class="row g-0">
    <div class="col-md-4">
        <img src="${sepa.imagen}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${sepa.nombre}</h5>
        <h4 class="card-title">${sepa.sepa}</h4>
        <p class="card-text">Efectos: ${sepa.efectos}</p>
        <p class="card-text"><small class="text-muted">CARACTERISTICAS</small></p>
        </div>
    </div>
    </div>
        `
    });
    console.log(sepas)
})
.catch((e) => {
    console.log(e)
});



