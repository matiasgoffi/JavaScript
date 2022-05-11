let portfolio = [ 
  {id: 1, servicio:"Event up to 150 people", imagen:"/imagenes/casamiento.jpg", descripcion:"wedding coverage." }, 
  {id: 2, servicio: "Event up to 50 people", imagen:"/imagenes/eventoLaboral.jpg", descripcion:"A work Party."},
  {id: 3, servicio: "Event without limit of people", imagen:"/imagenes/conciertoMusical.jpg", descripcion:"Movistar arena concert coverage."},
  {id: 4, servicio: "Basic - Individual Session", imagen:"/imagenes/portfolioLaboral.jpg", descripcion:"Christopher´s personal CV."},
  {id: 5, servicio: "Book - Individual Session", imagen:"/imagenes/fiestade15.jpg", descripcion:"Lucy´s 15th birthday."},
  {id: 6, servicio: "Street - Individual Session", imagen:"/imagenes/urbana.jpg", descripcion:"Joe´s Urban photo."},  
];



//creando a través del dom una etiqueta div con el elemento Card para volcar luego mi array con cada uno de los servicios ofrecidos

let div = document.getElementById ("container");
portfolio.forEach((servicio) => {
  let Card = document.createElement ("div");
Card.classList.add("card", "text-white", "bg-dark","col-sm-12", "col-md-6", "col-lg-4");
Card.innerHTML= `
<img src="${servicio.imagen}" class="card-img-top  imagenPortfolio" alt="...">
<div class="card-body">
  <h5 class="card-title">${servicio.servicio}</h5>
  <p class="card-text">${servicio.descripcion}</p>
  <a href="#" id="btnHire" class="btn btn-primary">Hire Service</a>
</div>`;
div.appendChild(Card);


});

//creo carrito donde almaceno los servicios contratados

let ServiciosContratados = [];



let botonHire = document.getElementById ("btnHire");

botonHire.onclick = () =>{
  ServiciosContratados.push();
  console.log (ServiciosContratados.length);
  alert("servicio contratado!");
}

 



