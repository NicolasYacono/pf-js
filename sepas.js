fetch('/data.json')
  .then((resinicial) => resinicial.json())
  .then((res) => {
    const sepas = res;
    const contenedor = document.querySelector('#sepas');
    sepas.forEach((sepa) => {
      contenedor.innerHTML += `
        <div class="card text-bg-dark mb-5">
        <img src="${sepa.imagen}" class="card-img" alt="...">
        <div class="card-img-overlay text-light">
          <p class="card-text">Efectos: ${sepa.efectos}</p>
          <h5 class="card-title">${sepa.nombre}</h5>
          <h4 class="card-title">${sepa.sepa}</h4>
        </div>
      </div>
        `;
    });
    console.log(sepas);
  })
  .catch((e) => {
    console.log(e);
  });

let btnPlataforma = document.getElementById('plataforma');

btnPlataforma.addEventListener('click', (e) => {
  Toastify({
    text: 'SU MAIL AÚN NO ESTA AUTORIZADO',
    duration: 3000,
    gravity: 'top',
    position: 'left',
    style: {
      background: '#ff0000',
    },
  }).showToast();
});
