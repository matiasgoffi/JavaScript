//array con los servicios ofrecidos organizados en cards

let portfolio = [ 
  {id: 1, servicio:"Event up to 150 people", imagen:"../imagenes/casamiento.jpg", descripcion:"wedding coverage." }, 
  {id: 2, servicio: "Event up to 50 people", imagen:"../imagenes/eventoLaboral.jpg", descripcion:"A work Party."},
  {id: 3, servicio: "Event without limit of people", imagen:"../imagenes/conciertoMusical.jpg", descripcion:"Movistar arena concert coverage."},
  {id: 4, servicio: "Basic - Individual Session", imagen:"../imagenes/portfolioLaboral.jpg", descripcion:"Christopher´s personal CV."},
  {id: 5, servicio: "Book - Individual Session", imagen:"../imagenes/fiestade15.jpg", descripcion:"Lucy´s 15th birthday."},
  {id: 6, servicio: "Street - Individual Session", imagen:"../imagenes/urbana.jpg", descripcion:"Joe´s Urban photo."},  
];

//funcion para guardar mi portfolio en la local storage como string
function guardarPortfolioLS () {
  localStorage.setItem ("portfolio", JSON.stringify(portfolio));
}


//funcion para traer el portfolio guardado en LS como JSON(objeto)

function traerPortfolioLS () {
  return JSON.parse (localStorage.getItem("portfolio")); 
}


//creando a través del dom una etiqueta div con el elemento Card para cada uno de mis servicios, con un evento onclick para agregar al carrito de contrataciones.
function crearTarjetaDeServicio() {

let portfolio1 = traerPortfolioLS();

for (const servicio of portfolio1) {
let div = document.getElementById ("container");

let Card = document.createElement ("div");
Card.classList.add("card", "text-white", "bg-dark","col-sm-12", "col-md-6", "col-lg-4");
Card.innerHTML= `
<img src="${servicio.imagen}" class="card-img-top  imagenPortfolio" alt="...">
<div class="card-body">
  <h5 class="card-title">${servicio.servicio}</h5>
  <p class="card-text">${servicio.descripcion}</p>
  <a href="#" id="btnHire" class="btn btn-primary" onclick="agregaralCarrito(${servicio.id});">Hire Service</a>
</div>`;
div.appendChild(Card);
};
};

//array vacio destinado a mi carrito de contrataciones

const carrito = [];


//funcion para agregar al carrito

function agregaralCarrito (id) {
  let servicio = buscarServicio(id);
  let servicios_carrito = traerservicioscarrito();
  let servicioencontrado = 
  if ( servicioencontrado = carrito.prototype.includes(servicio.id)) {
      
  };
  
  servicios_carrito.push(servicio);
  localStorage.setItem ("carrito", JSON.stringify(servicios_carrito) );
}

//funcion para buscar el servicio por id 
function buscarServicio (id) {
  let portfolio = traerPortfolioLS();
  return portfolio.find (x => x.id == id); 

}
function traerservicioscarrito() {
  if (localStorage.getItem("carrito")) {
  return JSON.parse (localStorage.getItem ("carrito"));
}
   return [];
}

//funcion para vaciar carrito 
function vaciarcarrito() {
localStorage.removeItem("carrito");
}

//funcion para eliminar un servicio del carrito





/* function actualizarCarrito(){
  let servicios_carrito = traerPortfolioCarrito();
  let contenido = `<button type="button" class="btn btn-primary position-relative">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
  </svg>
    <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
      ${servicios_carrito.lenght}
      <span class="visually-hidden">carrito de compras</span>
    </span>
  </button>`;
  let  = document.getElementById("carrito");
  let  = document.createElement ("div");

}
*/


guardarPortfolioLS();
crearTarjetaDeServicio();






