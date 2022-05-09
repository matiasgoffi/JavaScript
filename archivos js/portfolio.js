
//creando a través del dom una etiqueta div con el elemento Card para volcar luego mi array con cada uno de los servicios ofrecidos

let div = document.getElementById ("cards");
let Card = document.createElement ("div");
Card.classList.add("card");
Card.innerHTML= `
<img src="../imagenes/evento.jpg.jpg" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Event</h5>
  <p class="card-text">Wedding of 150 people.</p>
  <a href="../paginas/presupuesto.html" class="btn btn-primary">Get a budget</a>
</div>`;
div.appendChild(Card);

//no pude aún hacer el agregado de los styles! para especificar el espacio que ocupa en la grilla.
