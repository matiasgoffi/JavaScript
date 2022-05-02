/*array creado para almacenar las consuiltas reralizadas, objeto con funcion constructora, que incluye una impresión por consola.*/
const consultas = [];
class consultante {
 constructor (nombre, apellido, ciudad, provincia, zip, email) {
    this.nombre = nombre.toLowerCase();
    this. apellido = apellido.toLowerCase();
    this.ciudad = ciudad.toLowerCase();
    this.zip = parseFloat(zip);
    this.provincia = provincia.toLowerCase();
    this.email = email;
 }
   
    saludar () {
        console.log("bienvenidx " + this.nombre + " gracias por su consulta la enviaremos al correo ingresado");
    }
  

}


const consultante1 = new consultante (
    prompt("ingrese su nombre: "), 
    prompt("ingrese su apellido:"), 
    prompt("ingrese su ciudad:"), 
    prompt("ingrese su provincia:"), 
    prompt("ingrese su codigo postal:"), 
    prompt("ingrese su email:"),   
);

consultante1.saludar();


console.log (consultas);

consultas.push (consultante1);



















     
         
    
 

    
 


   