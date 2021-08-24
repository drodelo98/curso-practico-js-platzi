
let listaCupones = [
    {nombreCupon: "cupon1", descuento: 0.1 , descuentoP: "10%"},
    {nombreCupon: "cupon2", descuento: 0.2 , descuentoP: "20%"},
    {nombreCupon: "cupon3", descuento: 0.3 , descuentoP: "30%"},
    {nombreCupon: "cupon4", descuento: 0.4 , descuentoP: "40%"},
    {nombreCupon: "cupon5", descuento: 0.5 , descuentoP: "50%"},
]

function aplicarCupon() {
    const inputP = document.getElementById("price");
    const valueP = inputP.value;

    const inputC = document.getElementById("cupon");
    const valueC = inputC.value;

    for(let coupon of listaCupones){
        if (coupon.nombreCupon == valueC){
            const descuento = (1-coupon.descuento);
            const precioFinal = valueP*descuento;
            const ahorro = precioFinal - valueP;
            
            const resultPrice = document.getElementById("resultPrice");
            resultPrice.innerText = ("Se aplicó el cupón " + coupon.nombreCupon + "con un descuento de " + coupon.descuentoP + " ahorras " + ahorro + " y terminas pagando " + precioFinal);
        }
}
}