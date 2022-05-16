//array con los servicios ofrecidos organizados en cards

let portfolio = [ 
  {id: 1, servicio:"Event up to 150 people", imagen:"/imagenes/casamiento.jpg", descripcion:"wedding coverage." }, 
  {id: 2, servicio: "Event up to 50 people", imagen:"/imagenes/eventoLaboral.jpg", descripcion:"A work Party."},
  {id: 3, servicio: "Event without limit of people", imagen:"/imagenes/conciertoMusical.jpg", descripcion:"Movistar arena concert coverage."},
  {id: 4, servicio: "Basic - Individual Session", imagen:"/imagenes/portfolioLaboral.jpg", descripcion:"Christopher´s personal CV."},
  {id: 5, servicio: "Book - Individual Session", imagen:"/imagenes/fiestade15.jpg", descripcion:"Lucy´s 15th birthday."},
  {id: 6, servicio: "Street - Individual Session", imagen:"/imagenes/urbana.jpg", descripcion:"Joe´s Urban photo."},  
];


//funcion para buscar el servicio por id 
function buscarServicio (id) {
  let portfolio = traerPortfolioLS();
  return portfolio.find (x => x.id == id); 

}

//funcion para agregar al carrito

function agregaralCarrito (id) {
  let servicio = buscarServicio(id);
  let servicios_carrito = traerPortfolioCarrito();
  servicios_carrito.push(servicio);
  localStorage.setItem ("carrito", JSON.stringify(servicios_carrito) );
}


function traerPortfolioCarrito() {
  if (localStorage.getItem("carrito")) {
  return JSON.parse (localStorage.getItem ("carrito"));
}
   return [];
}

//funcion para elminar carrito 
function eliminarCarrito() {
  localStorage.removeItem("carrito");
}



//funcion para guardar datos del local storage
function guardarPortfolioLS (portfolio) {
  localStorage.setItem ("portfolio", JSON.stringify(portfolio));
}

function traerPortfolioLS () {
  return JSON.parse(localStorage.getItem("portfolio")); 
}

//creando a través del dom una etiqueta div con el elemento Card para cada uno de mis servicios, con un evento onclick para agregar al carrito de comprar.
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


}


guardarPortfolioLS(portfolio);
crearTarjetaDeServicio(); 

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);
