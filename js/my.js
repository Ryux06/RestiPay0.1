// base de datos

const usuario = {
    balance: '10',
    retirado: '100',
    historial1: [
        {id: 1, fecha: '06/06/23', monto: '15$'},
        {id: 2, fecha: '06/06/23', monto: '15$'},
        {id: 1, fecha: '16/02/23', monto: '10$'}
    ]
};

const VerBalance = document.getElementById('VerBalance');
const Padre = document.getElementById('Padre');
const plantilla = `<div class="Historial-2 row" id="historial">
    <div class="col-12 px-0 py-2 d-flex justify-content-center">
        <button class="pruebaBoton" id="salir">Salir</button>
    </div>
    <div class="col-6 px-0 d-flex justify-content-center">
        <p>Fecha</p>
    </div>
    <div class="col-6 px-0 d-flex justify-content-center">
        <p>Cantidad</p>
    </div>
    </div>`;

VerBalance.addEventListener('click', ()=>{
    const balance = document.createElement('div');
    balance.innerHTML = plantilla;
    // balance.setAttribute('id', 'cajaA');
    balance.classList.add('Historial','position-fixed','p-0','d-flex','justify-content-center');
    Padre.append(balance);
    // document.body.style.overflow = 'hidden';

    const contenedorH = document.getElementById('historial')

    usuario.historial1.forEach((historial) => {
        const nuevo0 = document.createElement('div');
        const nuevo1 = document.createElement('div');

        const plantilla0 = `<p>${historial.fecha}</p>`;
        const plantilla1 = `<p>${historial.monto}</p>`;

        nuevo0.innerHTML = plantilla0;
        nuevo1.innerHTML = plantilla1;

        nuevo0.classList.add('col-6', 'd-flex', 'justify-content-center');
        nuevo1.classList.add('col-6', 'd-flex', 'justify-content-center');

        contenedorH.append(nuevo0);
        contenedorH.append(nuevo1);
    });
    const salir = document.getElementById('salir');
    salir.addEventListener('click', ()=>{
        Padre.removeChild(balance)
    });
})



