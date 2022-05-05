/*let h1 =  document.getElementsByClassName ("h1");
h1.innerText = "Estás usando el DOM, el portal entre 2 mundos";
console.log (h1.innerText);          

h1.innerHTML = "Estás usando el DOM, el portal entre 2 mundos";
console.log (h1.innerHTML); 



let parrafo = document.createElement("p");
parrafo.innerHTML = "<h1>por tiempo limitado!</h1>";
document.body.append(parrafo);

parrafo.remove();
*/

const servicios = [{nombre: "evento", dia: "hábil", precio: 1500},
                  {nombre: "Sesion Individual", dia: "hábil", Precio: 1500},
                  {nombre: "evento", dia: "fin de semana", precio: 2500},
                  {nombre: "Sesion Individual", dia: "fin de semana", Precio: 2500},          
                  {nombre: "evento", dia: "feriado", precio: 3500},
                  {nombre: "Sesion Individual", dia: "feriado", Precio: 3500}                       

]

for (const producto of servicios) {
 let contenedor = document.createElement ("div");
 contenedor.innerHTML = `<h3> Tipo de servicio:  ${producto.nombre} </h3>;
                        <p> dia contratado: ${producto.dia} </p>;
                         <b> $: ${producto.precio} </b>`;
                         document.body.appendChild(contenedor);

} 
                    

                        

















     
         
    
