const btnContratar = document.querySelector("button.button-contratar")

const spanMonto = document.querySelector("span.label-monto")
const spanDestino = document.querySelector("span.label-destino")
const spanTasa = document.querySelector("span.label-intereses") 
const spanTiempo = document.querySelector("span.label-plazo")
const spanCuota = document.querySelector("span.label-cuota")
const spanTotalDevolver = document.querySelector("span.label-total")
const divMensajeFinal = document.querySelector("div#panelMensaje")

function recuperarDeLS() {
    const datosDelPrestamo = JSON.parse(localStorage.getItem("datosDelPrestamo"))

    spanMonto.textContent = "$ " + datosDelPrestamo.monto.toLocaleString("es-AR")
    spanDestino.textContent = datosDelPrestamo.destino
    spanTasa.textContent = ((datosDelPrestamo.interes - 1) * 100).toFixed(2)
    spanTiempo.textContent = datosDelPrestamo.meses
    spanCuota.textContent = "$ " + (datosDelPrestamo.cuota.toFixed(2)).toLocaleString("es-AR")
    spanTotalDevolver.textContent = (datosDelPrestamo.cuota / 12).toLocaleString("es-AR")
}

btnContratar.addEventListener("click", ()=> {
    divMensajeFinal.classList.add("transition-div-show")
    localStorage.removeItem("datosDelPrestamo")
    btnContratar.setAttribute("disabled", "true")
})

recuperarDeLS()