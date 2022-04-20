//function  FormularioDeContacto() {
    



//let ciudad = prompt ("Ingrese su Ciudad de localización: ");
//let provincia = prompt ("Estado o Provincia al que pertenece: ");
//let consulta = prompt ("deje su consulta: ");
//let email = prompt ("ingrese su Email: ");
//while (nombre !="ESC" || nombre != "" || nombre != null) {

    //let nombre = prompt("ingrese su Nombre: ");

   // while (nombre == "" || nombre == null) {
      //  nombre = prompt("ingrese su nombre para continuar: ");
   // }

    
let nombre = prompt("ingrese su Nombre: ");

    
 while (nombre == "" || nombre == null) {
        nombre = prompt("ingrese su nombre para continuar: ");
     if (nombre == "" || nombre == null){
            nombre = prompt("Ups! necesitamos un nombre para seguir: ");
        }
         if (nombre == "" || nombre == null) {
                nombre = prompt("¿Segurx desea llenar el formulario?");
            }
       if (nombre == "" || nombre == null) {
            nombre = prompt("última chance, ingrese su nombre: ");
        }
        if (nombre == "" || nombre == null) {
            break;
        }
       
    }
    

    /*while (nombre !="" || nombre != null) {
 let apellido = prompt("ingrese su apellido: ");
    if  (apellido == "" || apellido == null) {
    apellido = prompt("ingrese su apellido para continuar: ");
    }
    else { break;}

    }

     
         
    
 

    
 


    
   // let cp = prompt("ingrese su código postal: "); 

   // while (cp == "" ||  isNaN(cp)) {
    //cp = prompt("vuelva a ingresar su código postal");
//}
    





  
   /* if (nombre == "" || nombre == null) {
        let nombre = prompt("ingrese un nombre para continuar: ");
    }
    let  apellido = prompt ("ingrese su apellido: "); 
     
    if (apellido =="" || apellido == null) {  
        let apellido = prompt("ingrese un apellido para continuar: ");

    }

    let ciudad = prompt ("Ingrese su Ciudad de localización: ");

    if (ciudad =="" || ciudad == null) {  
        let ciudad = prompt("ingrese una ciudad para continuar: ");

    }

    let provincia = prompt ("Estado o Provincia al que pertenece: ");

    if (provincia =="" || provincia == null) {  
        let provincia = prompt("ingrese una provincia para continuar: ");

    }
    
    let cp = prompt ("ingrese su código postal: ");

     
/* acá me gustaria agregar la condicion si cp es vacio o algo que no sea un número, ingresar un dato válido numerico*/
    /*if (cp =="" || cp == null || isNaN(cp) ) {  
        let cp = prompt("ingrese una cp valido para continuar: ");

    }
    
    let consulta = prompt ("deje su consulta: ");

    if (consulta ==""  || consulta == null) {  
        let consulta = prompt("¿está seguro que no desea realizar una consulta?: 1-si 2-no.");

        if (consulta = no) {
            let consulta = prompt ("deje su consulta: ");
           

        }
        if (consulta = si)  {
            let email = prompt ("ingrese su Email: ");

        }
        

    }
    


 alert ("gracias " + nombre + " " + apellido + " su solicitud ha sido enviada, será contactado al Email ingresado.")
  
 
 break;

    
//} */

//}

