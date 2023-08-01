






/*var total=0;

function sumador(valor,tipo){
  var div=document.getElementById("div")
  var li= document.createElement("li")
  li.innerHTML=tipo+" $"+valor
  li.className="list-group-item"
  div.appendChild(li)
  total=total+valor
  var li2=document.getElementById("li2")
  li2.innerHTML="El precio final es: $"+total
  
}

}*/



function colores() {
  var color = document.getElementById("tema").value

  var bostwatch = document.getElementById("boostwatch-theme")
  bostwatch.href = "/css/" + color + ".css"
}


var articulo = []
var description = []
var precio = []
function cantidadcard() {
  var cantidad = document.getElementById("cant-card").value
  var producto = document.getElementById("producto").value

  var body = document.getElementById("cuerpo")
  var falsodiv = document.getElementById("gutter")
  body.removeChild(falsodiv)


  switch (producto) {
    case "Motos":
      articulo = ["SOFTAIL™ STANDARD", "STREET BOB™ 114", "SPORT GLIDE™", "FAT BOB™ 114", "LOW RIDER™ S", "LOW RIDER™ ST"];
      description = ["La SOFTAIL™ STANDARD ofrece una experiencia de conducción excepcional, combinando la potencia de su motor V-Twin con una maniobrabilidad precisa y un rendimiento suave en la carretera..", "  Su estilo bobber clásico y potencia Milwaukee-Eight® 114 crean una experiencia de conducción única. ¡Aventuras inolvidables sobre dos ruedas te esperan!.", "Esta motocicleta se destaca por su combinación única de características de touring y cruiser, lo que la hace una opción versátil para amantes de la carretera.", "La Fat Bob® 114 cuenta con un estilo agresivo y audaz, un rendimiento y una maniobrabilidad alucinantes, acabados de calidad y el impresionante par de torsión del motor Milwaukee-Eight®", "Una cruiser para pilotos que buscan extremos, con un concepto largo y bajo, y asiento monoplaza.", "La Harley-Davidson Low Rider ST es una nueva variante de la familia Softail que se caracteriza no sólo por el brutal motor Milwaukee-Eight 117 sino por unas características que la hacen más sport-tourer.  "]; break;
      precio = []; break;
    case "Camionetas":
      articulo = ["Nueva Maverick", "Nueva Territory", "Bronco Sport", "Nueva Kuga Híbrida", "Ranger", "Ranger Raptor"];
      description = ["", "", "", "", "", ""]; break;
      precio = []; break;

    case "Autos":
      articulo = ["PEUGEOT 208", "SUV PEUGEOT 2008", "SUV PEUGEOT 3008", "Yaris Hatchback 2024", "Corolla 2023 2.0 XLI CVT", "Etios Sedán 2024"];
      description = ["", "", "", "", "", ""]; break;
      precio = []; break;
  }


  //primer div del gutter
  var cuerpo = document.getElementById("cuerpo")
  var gutter = document.createElement("div")
  gutter.id = "gutter"
  gutter.className = "container px-4 text-center equal"
  cuerpo.appendChild(gutter)

  //row del gutter
  var gutter = document.getElementById("gutter")
  var row = document.createElement("div")
  row.id = "row"
  row.className = "row gx-5 "
  gutter.appendChild(row)



  for (var i = 0; i < cantidad; i++) {
    //columna del gutter
    var row = document.getElementById("row")
    var col = document.createElement("div")
    col.id = "col" + i
    col.className = "col-4 mx-auto"
    col.innerHTML = ""
    row.appendChild(col)


    //card
    var col = document.getElementById("col" + i)
    var card = document.createElement("div")
    card.id = "card" + i
    card.className = "card"
    card.innerHTML = ""
    col.appendChild(card)

    //imagen del card
    var card = document.getElementById("card" + i)
    var img = document.createElement("img")
    img.src = "/img/" + producto + i + ".jpg"
    img.className = "card-img-top imagen"
    card.appendChild(img)

    //cuerpo card
    var cardbody = document.createElement("div")
    cardbody.id = "cardbody" + i
    cardbody.className = "card-body cardcolor cardcolor1"
    card.appendChild(cardbody)

    // titulo del card
    var cuerpocard = document.getElementById("cardbody" + i)
    var title = document.createElement("h5")
    title.className = "card-title"
    title.textContent = articulo[i]
    cuerpocard.appendChild(title)

    //detalles
    var details = document.createElement("p")
    details.className = "card-text"
    details.textContent = description[i]
    cuerpocard.appendChild(details)

    //boton
    var columna = document.getElementById("col")
    var button = document.createElement("a")
    button.className = "btn btn-primary"
    button.id="vermas"+i
    button.textContent = "Ver más"
    /*button.addEventListener("click", function(){
      lista(i);
    });
    cuerpocard.appendChild(button)*/


    



  }
}




function lista() {
  var articulo=["SOFTAIL™ STANDARD", "STREET BOB™ 114", "SPORT GLIDE™", "FAT BOB™ 114", "LOW RIDER™ S", "LOW RIDER™ ST","Nueva Maverick", "Nueva Territory", "Bronco Sport", "Nueva Kuga Híbrida", "Ranger", "Ranger Raptor","PEUGEOT 208", "SUV PEUGEOT 2008", "SUV PEUGEOT 3008", "Yaris Hatchback 2024", "Corolla 2023 2.0 XLI CVT", "Etios Sedán 2024"]
  var precios = [100,200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]


  for(var i=0; i<articulo.length;i++){
    var tabla= document.getElementById("tablebody")
    var tr=document.createElement("tr")
    tr.id="tr"+i
    tabla.appendChild(tr)


    var num = document.getElementById("tr"+i)
    var th=document.createElement("th")
    th.scope="row"
    th.textContent=i+1
    num.appendChild(th)


    var name = document.getElementById("tr"+i)
    var td = document.createElement("td")
    td.textContent=articulo[i]
    name.appendChild(td)


    var precio = document.getElementById("tr"+i)
    var td1=document.createElement("td")
    td1.textContent="$"+precios[i]
    precio.appendChild(td1)
   
    }}
    lista()



