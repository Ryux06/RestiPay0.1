// base de datos

const usuario = {
    link: 'https://ryux06.github.io/RestiPay0.1/inicio.html',
    balance: '0.13',
    retirado: '45.00',
    Hbalance: [
        {id: 1, fecha: '06/06/23', monto: '0,5$'},
        {id: 2, fecha: '06/06/23', monto: '0.3$'},
        {id: 2, fecha: '06/06/23', monto: '0.3$'},
        {id: 3, fecha: '16/02/23', monto: '0.2$'}
    ],
    Retiros: [
        {id: 1, fecha: '31/07/23', monto: '10$'},
        {id: 2, fecha: '31/07/23', monto: '15$'},
        {id: 2, fecha: '31/07/23', monto: '15$'},
        {id: 3, fecha: '31/07/23', monto: '10$'}
    ]
};

document.getElementById('texto-balance').innerHTML = `$${usuario.balance}`;
document.getElementById('texto-retiro').innerHTML = `$${usuario.retirado}`;

const VerBalance = document.getElementById('Ver-Balance');
const VerRetiros = document.getElementById('Ver-Retiros');
const CajaPadre = document.getElementById('Padre');
const plantilla = `<div class="Historial-2 row" id="historial">
                    <div class="col-12 px-0 py-2 d-flex justify-content-center">
                        <button class="Boton-Balance-Salir mt-4" id="salir">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle Xsalir" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                    </div>
                    <div class="col-6 px-0 d-flex justify-content-center">
                        <p class="Beige">Fecha</p>
                    </div>
                    <div class="col-6 px-0 d-flex justify-content-center">
                        <p class="Beige">Cantidad</p>
                    </div>
                   </div>`;

VerBalance.addEventListener('click' ,()=>{

    const Balance = document.createElement('div');
    Balance.innerHTML = plantilla;
    Balance.classList.add('Historial','position-fixed','p-0','d-flex','justify-content-center') ;
    // Balance.setAttribute('id', 'Caja-Balance');
    CajaPadre.append(Balance);

    const cajaHistorial = document.getElementById('historial');

    usuario.Hbalance.forEach((historial) => {
        const nuevo0 = document.createElement('div');
        const nuevo1 = document.createElement('div');

        const plantilla0 = `<p class="Blanco">${historial.fecha}</p>`;
        const plantilla1 = `<p class="Blanco">${historial.monto}</p>`;

        nuevo0.innerHTML = plantilla0;
        nuevo1.innerHTML = plantilla1;

        nuevo0.classList.add('col-6', 'd-flex', 'justify-content-center');
        nuevo1.classList.add('col-6', 'd-flex', 'justify-content-center');

        cajaHistorial.append(nuevo0);
        cajaHistorial.append(nuevo1);
    });
    const salir = document.getElementById('salir');
    salir.addEventListener('click', ()=>{
        Padre.removeChild(Balance);
    });
})

VerRetiros.addEventListener('click', ()=>{
    const Balance = document.createElement('div');
    Balance.innerHTML = plantilla;
    Balance.classList.add('Historial','position-fixed','p-0','d-flex','justify-content-center') ;
    // Balance.setAttribute('id', 'Caja-Balance');
    CajaPadre.append(Balance);

    const cajaHistorial = document.getElementById('historial');

    usuario.Retiros.forEach((historial) => {
        const nuevo0 = document.createElement('div');
        const nuevo1 = document.createElement('div');

        const plantilla0 = `<p class="Blanco">${historial.fecha}</p>`;
        const plantilla1 = `<p class="Blanco">${historial.monto}</p>`;

        nuevo0.innerHTML = plantilla0;
        nuevo1.innerHTML = plantilla1;

        nuevo0.classList.add('col-6', 'd-flex', 'justify-content-center');
        nuevo1.classList.add('col-6', 'd-flex', 'justify-content-center');

        cajaHistorial.append(nuevo0);
        cajaHistorial.append(nuevo1);
    });
    const salir = document.getElementById('salir');
    salir.addEventListener('click', ()=>{
        Padre.removeChild(Balance);
    });
});

// BOTON DE REFERIDOS

const VerLink = document.getElementById('Ver-Link');

VerLink.addEventListener('click', ()=>{
    const contenedorReferido = document.createElement('div');
    const plantillaRef = `<div class="caja-referido row" id="referido">
                            <div class="col-12 px-0 py-2 d-flex justify-content-center">
                                <button class="Boton-Balance-Salir mt-4" id="salirR">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle Xsalir" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="col-12 px-0 d-flex justify-content-center">
                                <p class="Blanco Letras1 px-3 text-center">Link: ${usuario.link}</p>
                            </div>
                         </div>`;

    contenedorReferido.innerHTML = plantillaRef;
    contenedorReferido.classList.add('Historial','position-fixed','p-0','d-flex','justify-content-center');
    Padre.append(contenedorReferido);

    const salirR = document.getElementById('salirR');
    salirR.addEventListener('click', ()=> {
        Padre.removeChild(contenedorReferido);
    })
})