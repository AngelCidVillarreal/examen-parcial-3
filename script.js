
var pedidoForm = document.getElementById("pedidoForm"); 
const PRECIOS_ESPECIALIDAD = {
    'clasica': 80.00,
    'bbq': 100.00,
    'tocino': 120.00,
    'doble': 150.00,
    'hawaiana': 180.00
};


const PRECIOS_PAN = {
    'clasico': 0.00,
    'ajonjoli': 20.00,
    'integral': 20.00,
    'brioche': 50.00
};

const PRECIO_ADICIONAL = 5.00;
const COSTO_DOMICILIO = 30.00;

function calcularBaguette() { 
    var subtotal = 0;


    var especialidad = pedidoForm.especialidad.value;
    var cantidad = parseInt(pedidoForm.cantidad.value) || 1;
    var esDomicilio = pedidoForm.domicilio.checked;

    if (isNaN(cantidad) || cantidad < 1) {
        alert("Indique una cantidad válida de baguettes.");
        return;
    }

    subtotal += PRECIOS_ESPECIALIDAD[especialidad] || 0; 
    
    var tipoPanSeleccionado = pedidoForm.querySelector('input[name="tipoPan"]:checked');
    
    if (tipoPanSeleccionado) {

        subtotal += PRECIOS_PAN[tipoPanSeleccionado.value] || 0;
    } else {

        subtotal += PRECIOS_PAN['clasico'];
    }
    var ingredientes = pedidoForm.querySelectorAll('.checkbox-list input[type="checkbox"]');
    var contadorAdicionales = 0;
    
    ingredientes.forEach(checkbox => {
        if (checkbox.checked) {
            contadorAdicionales++;
        }
    });


    subtotal += contadorAdicionales * PRECIO_ADICIONAL; 

   
    var costoTotalBaguettes = subtotal * cantidad;
    var totalConDomicilio = costoTotalBaguettes;

    if (esDomicilio) {
        totalConDomicilio += COSTO_DOMICILIO;
    }

    document.getElementById("total");



pedidoForm.addEventListener('change', calcularBaguette);
pedidoForm.addEventListener('input', calcularBaguette);

calcularBaguette();