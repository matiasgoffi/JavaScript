

class servicios {
    constructor(servicio){
        this.servicio = servicio.servicio.toLowerCase();
        this.dia = servicio.dia.toLowerCase();
        this.precio = parseInt(servicio.precio);
    }
                                                    

}
/*funcion para agregar un nuevo servicio*/
function agregarServicio () {
    let nuevo_servicio = new servicios ({servicio:prompt("ingrese el tipo de servicio: "), dia:prompt("ingrese el dia que se encuentra disponible: "), precio:prompt("ingrese el precio: ")})
    
    precios.push (nuevo_servicio);


}

/*array que almacena los servicios */

const precios = [{servicio: "evento", dia: "lunes", precio: 2500},
                    {servicio: "sesionIndividual", dia: "lunes", precio: 2000},
                    { servicio: "evento", dia: "martes", precio: 2500},
                    {servicio: "sesionIndividual", dia: "martes", precio: 2000},
                    {servicio: "evento", dia: "miercoles", precio: 2500},
                    {servicio: "sesionIndividual", dia: "miercoles", precio: 2000},
                    {servicio: "evento", dia: "jueves", precio: 2500},
                    {servicio: "sesionIndividual", dia: "jueves", precio: 2000},
                    {servicio: "evento", dia: "viernes", precio: 5000},
                    {servicio: "sesionIndividual", dia: "viernes", precio: 4000},
                    {servicio: "evento", dia: "sabado", precio: 5000},
                    {servicio: "sesionIndividual", dia: "sabado", precio: 4000},
                    {servicio: "evento", dia: "domingo", precio: 5000},
                    {servicio: "sesionIndividual", dia: "domingo", precio: 4000},
                    {servicio: "evento", dia: "feriado", precio: 6000},
                    {servicio: "sesionIndividual", dia: "feriado", precio: 4500},                                   
                
                    
                ]

                

 class consultante {
    constructor (persona) {
        this.nombre = persona.nombre.toLowerCase();
        this. apellido = persona.apellido.toLowerCase();
        this.ciudad = persona.ciudad.toLowerCase();
        this.zip = parseFloat(persona.zip);
         this.provincia = persona.provincia.toLowerCase();
         this.email = persona.email;
    }
}

function solicitarConsulta () {
    let nueva_consulta = new consultante ({nombre:prompt("ingrese su nombre: "), apellido:prompt("ingrese su apellido:"), ciudad:prompt("ingrese su ciudad:"), 
    provincia: prompt("ingrese su provincia:"), zip:prompt("ingrese su codigo postal:"),  email:prompt("ingrese su email:")});

    
    consultantes.push (nueva_consulta);


}

/*array para guardar las consultas */
const consultantes = [];
 
                          

function mostrarServicios() {
    let salida = "";
    let i = 1;
 
    for (let servicio of precios) {
        salida += i + " - Tipo de servicio: " + servicio.servicio + " - dia: " + servicio.dia + " - precio: $" + servicio.precio + "\n";
        i++;
}

    return (salida);

}


function comprarServicio () {
    let salir = "";

    while (salir != "ESC" || salir != "esc" || salir !="" || salir != null){
    let lista_servicios = mostrarServicios();
    let servicio_seleccionado = parseInt(prompt("ingrese el numero del servicio que desea contratar: \n\n" + lista_servicios))
    let servicio = precios[servicio_seleccionado - 1];
    console.log(servicio);
     agregarAlCarrito(servicio);
     console.log("se agregó el servicio al carrito.")
     salir = (prompt("desea contratar otro servicio?: (ESC para salir)")).toUpperCase();
    }
  }

 const serviciosContratados = [];

  function agregarAlCarrito(servicio) {
    let nuevo_serviciocontratado = new servicios (servicio);
    serviciosContratados.push (nuevo_serviciocontratado);
    

}

function mostrarCarrito (){
    let salida = "servicios contratados: \n\n";
    let total_pagar = 0;

for (let servicio of serviciosContratados) {
    salida += "Nombre: " + servicio.servicio + " Precio: " + servicio.precio + "\n";
    total_pagar += parseFloat (servicio.precio.replace(".", "").replace(".", ""))
}

salida += "total a pagar: " + total_pagar.format(2 ,3 , '.', ',');
alert(salida);
    console.log ("se listaron los servicios contratados");
}


Number.prototype.format = function (x, n, s,c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ',')); 
};



comprarServicio();
mostrarCarrito(); 



























     
         
    
 

    
 


   