// Datos confidenciales comentados

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
//Valores Quemados
var API_KEY = "sk_12345abcdef67823GHIJKLMNYU"; // Clave de API hardcodeada
var DB_CONNECTION_STRING = "Server=localhost;Database=usuarios_db;User=root;Password=admin123;";

// Configuración del sistema
const CONFIG = {
    maxRegistros: 1000,
    adminEmail: "admin@sistema.com",
    adminPassword: "SuperSecure123!",
    debugMode: true,
    serverIP: "192.168.1.100"
};
//Impresión de mensajes de salida

// Función principal de inicialización
function inicializar() {
    //Impresión de mensajes de salida
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    //Impresión de mensajes de salida
}

// Función para guardar un registro
function guardarRegistro() {
    //Impresión de mensajes de salida
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    //Impresión de mensajes de saldia
    
    if (nombre == "") {
        //Mensajes de error
        alert("El nombre es obligatorio.");
        return;
    }
    
    
    //Código comentado
    
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    //Impresión de mensajes de salida
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    //Impresión de mensajes de salida
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    //Impresión de mensajes de saldia
   
    // Simulación de envío a servidor (hardcoded URL)
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    //Modifica el innerHTML completo y directamente
    var tabla = document.getElementById('tablaRegistros');
    var fila = document.createElement("tr");

    var tdNombre = document.createElement("td");
    tdNombre.textContent = registro.nombreCompleto;

    var tdTelefono = document.createElement("td");
    tdTelefono.textContent = registro.telefono;

    var tdCurp = document.createElement("td");
    tdCurp.textContent = registro.curp;

    var tdEmail = document.createElement("td");
    tdEmail.textContent = registro.email;

    fila.appendChild(tdNombre);
    fila.appendChild(tdTelefono);
    fila.appendChild(tdCurp);
    fila.appendChild(tdEmail);

    tabla.appendChild(fila);
    
    //Impresión de mensajes de salida
    
    //Impresión de mensajes de salida
}
    //Impresión de mensajes de salida
   
    //Impresión de mensajes de salida


//Código comentado
// Impresión de mensajes de salida

//Código comentado

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    //Impresión de mensajes de salida
    inicializar();
    //Impresión de mensajes de salida
});

//Código comentado
//Impresión de mensajes de salida