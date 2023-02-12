/*
// 3-a) Pida al usuario su nombre y muestre un mensaje de bienvenida.

let nombre = prompt('Ingrese su nombre')
    alert('Bienvenido ' + nombre);

// 3-b) Pida al usuario dos números y muestre su suma.

let primerNumero = 0, segundoNumero,total;

primerNumero = parseInt(prompt("ingrsa primer numero para sumar"));

segundoNumero = parseInt(prompt("ingresa segundo numero de suma"));

function suma (primerNumero,segundoNumero){
    total = primerNumero + segundoNumero
    console.log("el resultado de la suma es: ", total)
} 
console.log(suma(primerNumero,segundoNumero))

-----------------------------------------------------------------------------------  
3-e)

let numero1 = prompt('Ingrese un primer numero');
let numero2 = prompt('Ingrese un segundo numero');
let numero3 = prompt('Ingrese un tercer numero');

    if(numero1>numero2 && numero1>numero3 && numero2>numero3){
        document.write(numero1 , numero2 , numero3);
    }
    
        else if(numero1>numero2 && numero1>numero3 && numero3>numero2){
            document.write(numero1 , numero3 , numero2)
        }

    if(numero2>numero1 && numero2>numero3 && numero1>numero3){
            document.write(numero2 ,numero1, numero3);
    }
        
        else if(numero2>numero1 && numero2>numero3 && numero3>numero1){
                document.write(numero2 ,numero3 ,numero1)
        }

    if(numero3>numero1 && numero3>numero2 && numero1>numero2){
            document.write(numero3 ,numero1 ,numero2);
    }
        
        else if(numero3>numero1 && numero3>numero2 && numero2>numero1){
            document.write(numero3 ,numero2 ,numero1)
        }

-----------------------------------------------------------------------------------       
f) Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / (Altura (en metros) al cuadrado).
Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"
Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal"
Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso"
Si el número esmayor a 30 mostrá la leyenda "Obesidad"

imc = peso / pow(altura / 100,2);
imc = round(imc * 100) / 100;

var txt1, txt2, imc;

txt1 = parseInt(prompt("indica tu peso"));
txt2 = parseInt(prompt("indica tu altura"));

imc = (txt2 / ((txt1/100)*(txt1/100))).toFixed(2)

if (imc < 18.5) {
    console.log("bajo peso");
} else if(imc >= 18.6 && imc <= 24.99) {
    grado = "peso normal";
} else if(imc >= 25 && imc <= 29.99) {
    grado = "Delgadez aceptable.";
}else if(imc >= 18.5 && imc <= 24.99) {
    grado = "Normal.";
} else if(imc >= 25 && imc <= 29.99) {
    grado = "Preobeso.";
} else if(imc >= 30) {
    grado = "Obeso";
} 

-----------------------------------------------------------------------------------
5)
a) Ingresá un vector llamado dias, en donde se carguen los días lunes a domingo.
b) Mostrá uno por uno los días de la semana. 
c) Cuando sea Sabado o Domingo, deberá mostrarse la leyenda "Fin de semana!"
let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

for (let i=0; i<dias.length; i++) {
    if(dias[i] === "sabado"){
        console.log(dias[i] + " ¡Es finde!")
    }
    else if(dias[i] === "domingo"){
        console.log(dias[i] + " ¡Es finde!")
    }
    else{console.log(dias[i])}
}

-----------------------------------------------------------------------------------
6) Vamos al supermercado. Crea un vector llamado carrito.
a) Con un prompt ingresá un artículo, Con un segundo prompt el costo unitario y con un tercer prompt el monto por unidad.
b) En el carrito solo ingresarás los artículos.
c) En una variable irás sumando el valor de cada artículo que irás acumulando (monto por unidad * cantidad de unidades).
d) La carga finalizará con un articulo con nombre 0 (cero).
e) Finalmente mostrarás una factura con el siguiente formato:
************************************
FACTURA A - Número XXXXXXX-XXXXXXX-X
Ítems:
- Manteca
- Cafe
- Limones

Total a facturar: $3500.00
************************************

let carrito = []
let articulos; 
let costoUn;
let cantidad; 
let precioTotal = 0


do{
    alert('Bienvenido')
    articulos = prompt("ingresa un articulo");
    carrito.push(articulos);
    costoUn = parseInt(prompt("ingresar precio"));
    cantidad = parseInt(prompt("ingresar cantidad"));
    precioTotal = precioTotal + (parseInt(costoUn)*parseInt(cantidad))
    alert(carrito);
    alert(precioTotal);
    agrego = confirm('Agregar más articulos?');
}while(agrego === true)

console.log("*****************************");
console.log('FACTURA A - Número XXXXXXX-XXXXXXX-X')
console.log("ITEMS");

for(let i = 0; i < carrito.length; i++){
    console.log(" - " + carrito[i])
}

console.log("Total a facturar: $" + precioTotal)
console.log("*****************************");

-----------------------------------------------------------------------------------
7) Modifica el punto anterior para que, antes de finalizar la carga pregunte si queremos editar. Si responde "SI" entonces.
a) Que indique con un número el ítem que quiere modificar. 
b) Se reemplazara el nombre del artículo pero no la cantidad y el costo. 
c) Una vez finalizado el reemplazo se preguntará si quiere seguir modificando. En caso afirmativo pasaremos al 
punto (a) y sino se mostrará el punto (6 - e)

let carrito = []
let articulos; 
let precio;
let unidades;
let costoTotal = 0;
let numeroItem = carrito

let ingreso = prompt("desea ingresar un articulo? si - no");

do{
        articulos = prompt("ingresa tu articulo");
        console.log(articulos);
        carrito.push(articulos)
        console.log(carrito);
        precio = parseInt(prompt("ingresa precio"));
        unidades = parseInt(prompt("ingresa unidades"));
        costoTotal = costoTotal + (parseInt(precio) * parseInt(unidades))
        ingreso = prompt("desea seguir ingresando");

    }while(ingreso !== "no"){
        consulta = prompt("desea editar algun articulo? presiona 0")
        console.log(`lista de articulos: ${carrito}`)
        if(consulta === "0"){
            for (let i = 0; numeroItem < carrito.length; i++) {
                  numeroItem = carrito.splice(prompt("acanumero"),1);
                }
            }
        }

    console.log("xxxxxxxxxxxxxxxx");
    console.log("ITEMS");

    for(let i = 0; i < carrito.length; i++){
        console.log(" - " + carrito[i])
    }
    console.log("Total a facturar: $"+ costoTotal)
    console.log("xxxxxxxxxxxxxxxxx")


*/





