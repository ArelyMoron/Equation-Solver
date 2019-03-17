// Elaborado por Arely M

function result_onClick() // funcion que se llama cuando se de click al boton
{
    var a = parseFloat(document.getElementById("num1").value); // obtengo el valor del cuadro de texto con el id num1
    var b = parseFloat(document.getElementById("num2").value); //obtengo el valor del cuadro de texto con el id num2
    var c = parseFloat(document.getElementById("num3").value); //obtengo el valor del cuadro de texto con el id num3

    var result = document.getElementById("result"); // obtengo el elemento con el id result

    if (a != 0) 
    {
        var e = 2.0 * a;
        console.log(e.toString()); // ver el resultado por la consola del navegador
        var d = (Math.pow(b, 2) - 4.0 * a * c);
        if (d > 0) 
        {
            var x1 = (- b + Math.sqrt(d)) / e;
            var x2 = (- b - Math.sqrt(d)) / e;
            result.innerHTML = "x1 = " + x1.toFixed(2).toString() + "<br> x2 = " + x2.toFixed(2).toString(); // pongo texto como html en el elemento
        }

        if (d == 0) 
        {
            var x1 = (-b + Math.sqrt(d)) / e;
            result.innerHTML = "x1 = " + x1.toString();
        }

        if (d < 0) 
        {
            result.innerHTML = "La ecuacion no tiene ua solucion real";
        }
    }
}