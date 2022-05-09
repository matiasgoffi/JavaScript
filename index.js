

//clase servicios con función constructora con  los datos del servicio 
class servicios {
    constructor (servicio) {
  this.servicio = servicio.servicio.toLowerCase();
  this.dia = servicio.dia.toLowerCase();
  this.precio = parseInt(servicio.precio);
    }
                                                    

}




//array de objetos que almacena los servicios  
const servicios = [{nombre: "evento", dia: "hábil", precio: 1500},
{nombre: "Sesion Individual", dia: "hábil", Precio: 1500},
{nombre: "evento", dia: "fin de semana", precio: 2500},
{nombre: "Sesion Individual", dia: "fin de semana", Precio: 2500},          
{nombre: "evento", dia: "feriado", precio: 3500},
{nombre: "Sesion Individual", dia: "feriado", Precio: 3500}]; 

//funcion para agregar un nuevo servicio al array de precios ingresando los datos por prompt
function agregarServicio () {
    let nuevo_servicio = new servicios ({servicio:prompt("ingrese el tipo de servicio: "), dia:prompt("ingrese el dia que se encuentra disponible: "), precio:prompt("ingrese el precio: ")})
    
    precios.push (nuevo_servicio);

//crear elemento con el array servicios, ya incluyendo el contenido del codigo en una card de bootstrap, que tengo volcada en la pagina portfolio.html
for (const producto of servicios) {
 let card = document.createElement ("div");
 card.innerHTML = ` <div class="container">
 <div class="row">
   <div class="col-sm-4">
<div class="card" style="width: 18rem;">
 <img src="..." class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">Card title</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
</div>
</div>
</div>
</div>`;
                         document.body.appendChild(contenedor);

} 
}                   

//clase con función constructora que rehune los datos necesarios de un posible consultante (persona)

 class consultante {
    constructor (persona) {
        this.nombre = persona.nombre.toLowerCase();
        this. apellido = persona.apellido.toLowerCase();
        this.pais = persona.pais.toLowerCase();
        this.zip = parseFloat(persona.zip);
       this.email = persona.email;
    }
}

//funcion que me permite solicitar una consulta, ingresando datos por prompt 
function solicitarConsulta () {
    let nueva_consulta = new consultante ({nombre:prompt("ingrese su nombre: "), apellido:prompt("ingrese su apellido:"), 
    pais: prompt("ingrese su pais de origen:"), zip:prompt("ingrese su codigo postal:"),  email:prompt("ingrese su email:")});
}

//array para guardar las consultas, lo veo últil para utilizar en el proceso más adelante 
let consultantes = [];
 
                          
//funcion para mostrar los servicios y poder seleccionar el que sea desea comprar 
function mostrarServicios() {
    let salida = "";
    let i = 1;
 
    for (let servicio of precios) {
        salida += i + " - Tipo de servicio: " + servicio.servicio + " - dia: " + servicio.dia + " - precio: $" + servicio.precio + "\n";
        i++;
}

    return (salida);

}

//función para comprar uno o más servicios, mostrarlos por consola y  agregarlos a un carrito de compras

function comprarServicio () {
    let salir = "";

    while (salir != "ESC"){
    let lista_servicios = mostrarServicios();
    let servicio_seleccionado = parseInt(prompt("ingrese el numero del servicio que desea contratar: \n\n" + lista_servicios))
    let servicio = precios[servicio_seleccionado - 1];
    console.log(servicio);
     agregarAlCarrito(servicio);
     console.log("se agregó el servicio al carrito.")
     salir = (prompt("desea contratar otro servicio?: (escriba ESC para salir)")).toUpperCase();



    }
}




//función que agrega la compra efectuada en "comprarServicio () a un carrito de compras." 

function agregarAlCarrito(servicio) {
    let nuevo_serviciocontratado = new servicios (servicio);
    servicios_Contratados.push (nuevo_serviciocontratado);
    }


//array que almacena las contrataciones que se han efetuado. 

 let servicios_Contratados = [];
 


//función para mostrar, a través de un alert, el listado con la compra y el total a pagar 


function mostrarCarrito (){
    let salida = "servicios contratados: \n\n";
    let total_pagar = 0;

for (let servicio of servicios_Contratados) {
    salida += "Nombre: " + servicio.servicio + " Precio: $" + servicio.precio + "\n";
    total_pagar += parseFloat (servicio.precio);
}

salida += "total a pagar: $" + total_pagar;
alert(salida);
    
}







