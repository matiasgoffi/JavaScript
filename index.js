let nombre = 0;
let apellido = 0;
let ciudad = 0;
let provincia = 0;
let zip = 0;
let email = 0;
let respuesta = 0; 
let preciodelservicio = 0;





function servicioContratado() {
    servicio = prompt("seleccioná la opcion deseada: a-(eventos) / b-(sesionindividual)");

    if (servicio == "a") {
        servicio = 10000;
    }
    else if (servicio == "b") {
        servicio = 5000;
    } 

    dia = prompt ("seleccioná el dia: a-(lunes) / b-(martes) / c-(miercoles) / d-(jueves)/ e-(viernes) / f-(sabado) / g-(domingo)");
    
    if (dia =="a" || dia == "b" || dia == "c" || dia == "d") {
        dia = 1;
    }
    else if (dia == "e" || dia == "f" || dia == "g") {
        dia = 2;

    }
    if ( dia !="a" || dia !="b" || dia !="c" || dia !="e" || dia !="f" || dia !="g") {
        dia = prompt ("seleccione entre (a-b-c-d-e-f- o g) para seguir: a-(lunes) / b-(martes) / c-(miercoles) / d-(jueves)/ e-(viernes) / f-(sabado) / g-(domingo)");
    }
    preciodelservicio = servicio * dia;

}


function datosPersona() {
            
       nombre = prompt("ingrese su Nombre: ");
        
       while (nombre == "" || nombre == null){
        nombre = prompt("ingrese su nombre para continuar: ");
       }
       
        
        apellido = prompt("ingrese su apellido: ");
        ciudad = prompt ("Ingrese su Ciudad de localización: ");
        provincia = prompt ("Estado o Provincia al que pertenece: ");
        
        
        zip = prompt("ingrese su código postal: ");
        
        while (zip == "" ||  isNaN(zip) || zip == null){
        zip = prompt("ingrese su código postal: ");
        }
        
      email = prompt ("ingrese su correo electrónico: "); 

        while (email == "" || email == null) {
        email = prompt("ingrese su email para continuar: ");
        }

       }

       function mostrar(){

       respuesta = alert("bienvenidx " + " " + nombre + " " + apellido + " " + "el presupuesto solicitado es de: $" + preciodelservicio + ",enviamos su consulta al email ingresado");

       }
    
   
datosPersona();      
servicioContratado();  
mostrar();

   

     
      









     
         
    
 

    
 


   