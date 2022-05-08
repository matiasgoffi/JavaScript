//clase servicios con función constructora con  los datos del servicio 
class servicios {
    constructor (servicio) {
  this.servicio = servicio.servicio.toLowerCase();
  this.dia = servicio.dia.toLowerCase();
  this.precio = parseInt(servicio.precio);
    }
                                                    

}
//funcion para agregar un nuevo servicio al array de precios ingresando los datos por prompt
function agregarServicio () {
    let nuevo_servicio = new servicios ({servicio:prompt("ingrese el tipo de servicio: "), dia:prompt("ingrese el dia que se encuentra disponible: "), precio:prompt("ingrese el precio: ")})
    
    precios.push (nuevo_servicio);


}

//array de objetos que almacena los servicios  

let precios = [{servicio: "evento", dia: "lunes", precio: 2500},
                    {servicio: "sesion Individual", dia: "lunes", precio: 2000},
                    { servicio: "evento", dia: "martes", precio: 2500},
                    {servicio: "sesion Individual", dia: "martes", precio: 2000},
                    {servicio: "evento", dia: "miercoles", precio: 2500},
                    {servicio: "sesion Individual", dia: "miercoles", precio: 2000},
                    {servicio: "evento", dia: "jueves", precio: 2500},
                    {servicio: "sesion Individual", dia: "jueves", precio: 2000},
                    {servicio: "evento", dia: "viernes", precio: 5000},
                    {servicio: "sesion Individual", dia: "viernes", precio: 4000},
                    {servicio: "evento", dia: "sabado", precio: 4000},
                    {servicio: "sesion Individual", dia: "sabado", precio: 4000},
                    {servicio: "evento", dia: "domingo", precio: 5000},
                    {servicio: "sesion Individual", dia: "domingo", precio: 4000},
                    {servicio: "evento", dia: "feriado", precio: 6000},
                    {servicio: "sesion Individual", dia: "feriado", precio: 4500},                                   
                
                    
                ];

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

    
    consultantes.push (nueva_consulta);


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


//simulo la compra de un servicio, cargando mis datos y muestro la compra en un alert 
solicitarConsulta();
comprarServicio();
mostrarCarrito();

solicitarConsulta();
comprarServicio();
mostrarCarrito();

//muestro por consola el largo de los arrays 
console.log (consultantes.length);
console.log (servicios_Contratados.length);


//utilizo la sentencia for of para recorrer el array de quienes consultaron y mostrar sus nombres 
for (const persona of consultantes) {
    console.log (persona.nombre);
}
























     
         
    
 

    
 