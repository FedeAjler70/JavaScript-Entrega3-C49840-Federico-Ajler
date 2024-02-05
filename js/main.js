const arrayTipoSeguro = [{id: 1, descripcion: 'Seguro de Hogar 🏠', interes: 1.0498},
                       {id: 2, descripcion: 'Seguro Automotor 🚘', interes: 1.0387},
                       {id: 3, descripcion: 'Seguro Motocicletas 🛵', interes: 1.02671},
                       {id: 4, descripcion: 'Seguro Embarcaciones 🚤', interes: 1.0815},]

const inputMonto = document.querySelector("input#montoPrestamo")
const inputPlazo = document.querySelector("input#tiempoPago")
const selectTipoSeguro = document.querySelector("select")
const btnCalcular = document.querySelector("button.button-calcular")
const divMensaje = document.querySelector("div#panelMensaje")

function cargarTipoSeguro() {
    if (arrayTipoSeguro.length > 0) {
        arrayTipoSeguro.forEach((destino)=> {
            selectTipoSeguro.innerHTML += `<option>${destino.descripcion}</option>`
        })
    }
}

function retornarIntereses(descripcion) {
    let destino = arrayTipoSeguro.find((destino)=> destino.descripcion === descripcion)
    return destino.interes
}

function guardarEnLS(monto, meses, interes, cuota, destino) {
    const datosDelPrestamo = {
        monto: monto,
        meses: meses,
        interes: interes,
        cuota: cuota,
        destino: destino
    }

    localStorage.setItem("datosDelPrestamo", JSON.stringify(datosDelPrestamo))
}

function cotizarSeguro() {
    let monto = parseInt(inputMonto.value)
    let plazo = parseInt(inputPlazo.value)
    let interes = retornarIntereses(selectTipoSeguro.value)
    const prestamo = new Prestamo(monto, interes, plazo)
    let cuotaMensual = prestamo.calcularCuota()

    guardarEnLS(monto, plazo, interes, cuotaMensual, selectTipoSeguro.value)
    location.href = "cotizacion.html"
}

btnCalcular.addEventListener("click", ()=> cotizarSeguro())

cargarTipoSeguro()