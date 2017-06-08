var datos ='[{ "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" }]' ;

var objeto = JSON.parse(datos);

console.log(objeto);

var paises = [];


var seccion = document.getElementsByTagName("section")[0];

var tabla = document.createElement("table");
var cabecera = document.createElement("thead");
var cuerpo = document.createElement("tbody");
var pie = document.createElement("tfoot");

tabla.appendChild(cabecera);
tabla.appendChild(cuerpo);
tabla.appendChild(pie);

seccion.appendChild(tabla);
		cabecera.innerHTML = "<tr><th>Name</th><th>City</th><th>Country</th></tr>";
		
		cuerpo.setAttribute("id","objeto");

     for( i=0; i<objeto.length; i++)
     {
             

                    var filas = document.getElementById("objeto");
                    var fila = document.createElement("tr");
                    var col1 = document.createElement("td");
                    var col2 = document.createElement("td");
                    var col3 = document.createElement("td");
                    
                    col1.innerHTML=objeto[i].Name;
                    col2.innerHTML=objeto[i].City;
                    col3.innerHTML=objeto[i].Country;
                    fila.appendChild(col1);
                    fila.appendChild(col2);
                    fila.appendChild(col3);
                    filas.appendChild(fila);          
             
     }