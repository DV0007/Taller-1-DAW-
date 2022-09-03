function guardar() {
    const precioLibros = 100;
    const precioCuadernos = 15.50;
    const precioPlumas = 2.35;
    var libros = parseInt(document.getElementById('libros').value);
    var cuadernos = parseInt(document.getElementById('cuadernos').value);
    var plumas = parseInt(document.getElementById('plumas').value);


    var totalLibros = libros * precioLibros;
    var totalCuadernos = cuadernos * precioCuadernos;
    var totalPlumas = plumas * precioPlumas;
    var total = totalLibros + totalCuadernos + totalPlumas;

    res.innerHTML = "<p>-¿Cuantos libros vendio? " + libros + "</p>";
    res.innerHTML += "<p>-¿Cuantos cuadernos vendio? " + cuadernos + "</p>";
    res.innerHTML += "<p>-¿Cuantos plumas vendio? " + plumas + "</p>";
    res.innerHTML += "<p>-La venta de libros fue de $" + totalLibros + "</p>";
    res.innerHTML += "<p>-La venta de cuadernos fue de $" + totalCuadernos + "</p>";
    res.innerHTML += "<p>-La venta de plumas fue de $" + totalPlumas + "</p>";
    res.innerHTML += "<p>-La venta total del día fue de $" + total + "</p>";
}

function reiniciar() {
    parseInt(document.getElementById('libros').value = "");
    parseInt(document.getElementById('cuadernos').value = "");
    parseInt(document.getElementById('plumas').value = "");
    res.innerHTML = "";
}