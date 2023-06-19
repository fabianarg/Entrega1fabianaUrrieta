//ciclo condicional para desplegar un mensaje con precios dependiendo del destino elegido 

function calcularVuelo(destino){
    switch(destino.toLowerCase()){
        case "brasil":
            alert('El valor del vuelo es de 580usd');
            break;
        case "peru":
            alert('El valor del vuelo es de 490usd');
            break;
        case "venezuela":
            alert('El valor del vuelo es de 910usd');
            break;
        case "ecuador":
            alert('El valor del vuelo es de 620usd');
            break;   
        default:
            alert('No ingreso un destino valido');
            break;
    }
};

//ciclo condicional para que, si mayor a cierto valor, aplicar un descuento

function calcularTotal(valorVuelo){
    if(valorVuelo > 600){
        let descuento = valorVuelo * 0.10;
        let valorTotal = valorVuelo - descuento;
        alert(`El precio del boleto es de: ${valorTotal} con el descuento del 10%`);
    }else{
        alert(`Lo sentimos, el producto seleccionado no tiene descuento🥲`)
    }
};

//ciclo for para recorrer un rango determinado y mostrarle un mensaje al usuario 

function mostrarMensaje(cantidadBoletos) {
    for (let i = 2; i <= 10; i++) {
      if (cantidadBoletos === i) {
        alert("Acumulas millas para tu próximo viaje");
        break;
      }
    }
  };

//funcion final para ejecutar el simulador con todas las funciones

function buscarVuelo(){
    let destino = prompt('Ingrese el destino que quiere visitar: ');
        calcularVuelo(destino);
    let valorVuelo = prompt('Ingrese el monto del vuelo para aplicar cupon de descuento');
        calcularTotal(valorVuelo);
    let cantidadBoletos = parseInt(prompt("Ingrese la cantidad de boletos que desea comprar:"));
        mostrarMensaje(cantidadBoletos);
};
buscarVuelo();
