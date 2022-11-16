const calcularsubtotal = ()=> {
    const cantidad = document.querySelector('#Cantidad')
    const precio = document.querySelector('#precio')
    let subtotal = document.querySelector('#Subtotal')

    subtotal.value = cantidad.value*precio.value
}

const cantidad = document.querySelector('#Cantidad')
cantidad.addEventListener('keypres', calcularsubtotal)
cantidad.addEventListener('keyup', calcularsubtotal)
cantidad.addEventListener('keydown', calcularsubtotal)


const registrarPedido= () => {
    const cantidad = document.querySelector('#Cantidad')
    const precios = document.querySelector('#precio')
    if(cantidad.value.length == 0 || precios.value.length == 0){
        document.getElementById('respuesta').innerHTML='La cantidad o precio no pueden ser 0'
    }else{
        document.getElementById('respuesta').innerHTML='Registro existo'
    }
}


const btnRegistrar = document.querySelector('#btnRegistrar')
btnRegistrar.addEventListener('click',registrarPedido)