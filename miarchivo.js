// al momento de abrir aparece un recuadro que te hace aceptar:
setTimeout(()=>{
  if(sessionStorage.getItem("alerta")){
      console.log("no alerta, ya se ha mostrado");
  }else{
      let alerta = []
      let aviso = JSON.stringify(alerta)
      sessionStorage.setItem("alerta", aviso)
      
      Swal.fire('Hay que aceptar esto para acceder a un descuento increible')
  }
},2500)

//ejecuta descuento segun porcentaje//


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
   
    // arrays //

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min ;

}

function ordenar() {

    let array = [];

    for (i = 0; i < 5 ; i++){

        array.push(getRandomInt(1, 20));

    }

    console.log('array no oderdenado');


    console.log(array);

    array.sort(function (a,b) {

        return a - b

    })

    console.log('array oderdenado');


    console.log(array);
}

ordenar() 

//interactuar con html//

const items = document.getElementById('items')

const tarjetas = document.getElementById('tarjetas').content

const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    datosUsuarios();
})

const datosUsuarios = async () => {
    try {

        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        const datos = await res.json()

        usuarios(datos)

    } catch (error) {

        console.log(error);

    }
}

const usuarios = datos => {
    datos.forEach(
        usuario => {
            tarjetas.querySelector('h5').textContent = usuario.name
            tarjetas.querySelector('p').textContent = usuario.company.catchPhrase
            tarjetas.querySelector('.enlace').dataset.id = usuario.id

            const clone = tarjetas.cloneNode(true)
            fragment.appendChild(clone)
        }
    )
    items.appendChild(fragment)
} 

//incorporando eventos//

window.addEventListener = () => {
            let div = document.querySelector('#formulario');
            div.style.visibility = 'hidden';
            let boton = document.querySelector('#mostrar');
            boton.addEventListener('click', function (e) {
                if(div.style.visibility === 'hidden'){
                    div.style.visibility = 'visible';
                }else{
                    div.style.visibility = 'hidden';
                }
            });
        } 

        //Aplicando JQuery//

jQuery.fn.ctrlEnter = function (botones, funcion) {  
  var texto   = jQuery(this);  
 botones = jQuery(botones);  
}; 
        
function realizaAccion(e) {  
  fn.call(texto, e);  
} 

texto.bind("keydown", function (e) {  
    if (e.keyCode === 13 && e.ctrlKey) {  
      realizaAccion(e);  
      e.preventDefault();  
    }  
  });  
  botones.bind("click", realizaAccion);

  jQuery("#msg").ctrlEnter("#botonEnviar", function () {  
    jQuery("<p class='parrafos'></p>").append(this.val().replace(/\n/g, "<br />")).prependTo(document.body);  
    this.val("");  
  });  

  //FETCH  EN EL PROYECTO

  function sendData () {
    
    // Obtener datos
    var data = new FormData();
    data.append("name", document.getElementById("name").value);
    data.append("email", document.getElementById("email").value);
   
    // init fetch
    fetch("2-dummy.php", {
      method: "POST",
      body: data
    })
   
    // devuelve rta del servidor en forma de texto
    .then((result) => {
      if (result.status != 200) { throw new Error("Bad Server Response"); }
      return result.text();
    })
   
    // rta servidor
    .then((response) => {
      console.log(response);
    })
   
    // manejo de errores (opcional)
    .catch((error) => { console.log(error); });
   
    // previene submit 
    return false;  }

    // Variables
const baseDeDatos = [
  {
      id: 1,
      nombre: 'Patata',
      precio: 1,
      imagen: 'patata.jpg'
  },
  {
      id: 2,
      nombre: 'Cebolla',
      precio: 1.2,
      imagen: 'cebolla.jpg'
  },
  {
      id: 3,
      nombre: 'Calabacin',
      precio: 2.1,
      imagen: 'calabacin.jpg'
  },
  {
      id: 4,
      nombre: 'Fresas',
      precio: 0.6,
      imagen: 'fresas.jpg'
  }

];

let carrito = [];
const divisa = '€';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
* Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
*/
function renderizarProductos() {
  baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${info.precio}${divisa}`;
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = '+';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
  });
}

/**
* Evento para añadir un producto al carrito de la compra
*/
function anyadirProductoAlCarrito(evento) {
  // Anyadimos el Nodo a nuestro carrito
  carrito.push(evento.target.getAttribute('marcador'))
  // Actualizamos el carrito 
  renderizarCarrito();

}

/**
* Dibuja todos los productos guardados en el carrito
*/
function renderizarCarrito() {
  // Vaciamos todo el html
  DOMcarrito.textContent = '';
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
  });
  // Renderizamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

/**
* Evento para borrar un elemento del carrito
*/
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = evento.target.dataset.item;
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
  });
  // volvemos a renderizar
  renderizarCarrito();
}

/**
* Calcula el precio total teniendo en cuenta los productos repetidos
*/
function calcularTotal() {
  // Recorremos el array del carrito 
  return carrito.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
  }, 0).toFixed(2);
}

/**
* Varia el carrito y vuelve a dibujarlo
*/
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();

