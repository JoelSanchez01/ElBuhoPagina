const TramitesArreglo = [
    {
        id:1,
        nombre:"Consulta E Impresión Del Curp",
        costo:"Gratuito",
        documentos:["No se requiere ningún documento, sin embargo es importante que tengas a la mano los datos de tu documento probatorio de identidad"],
        opciones: ["En Linea"],  
        link: "https://www.gob.mx/curp/",
        
    
    },
    {
        id:2,
        nombre:"Expedición de la copia certificada del acta de nacimiento en línea",
        costo:"$97.00 mxn",
        documentos:["Para tramitar tu copia certificada del acta de nacimiento en línea no es necesario ningún documento, sin embargo, debes contar con los siguientes datos", "Clave Única de Registro de Población (CURP)", "Nombre completo","Fecha de nacimiento", "Entidad de registro","Sexo", "Datos de filiación (nombre completo de madre, padre o persona que te registro)", "Para pago en línea, tarjeta de crédito o débito", "Para pago referenciado, contar con impresora para imprimir el formato de pago"],
        opciones: ["En Linea", "Presencial"],
        link: "https://www.gob.mx/ActaNacimiento/",
        
    },
    {
        id:3,
        nombre:"Expedición de cédula profesional electrónica",
        costo:"$1,508.00 mxn",
        documentos:["Solicitud firmada con e.firma la cual contendrá tu nombre, lugar y fecha de nacimiento, así como la nacionalidad, Clave Única de Registro de Población (CURP), nombre o denominación de la institución que le otorgó el título profesional, y fecha de emisión", "Archivo electrónico que contenga (según corresponda) título profesional, diploma de especialidad o grado académico, el cual previamente tu institución educativa debió registrar ante la Dirección General de Profesiones", "Pago en línea, mediante tarjeta de crédito o débito"],
        opciones: ["En Linea", "Presencial"],
        link: "https://msirepve.sep.gob.mx/validacionelectronica/publico/startCedulaElectronica!startWizard.action",
    },
    {
        id:4,
        nombre:"Pasaporte Ordinario Para Personas Mayores De Edad de 6 años",
        costo:"$2,000.00 mxn",
        documentos:["Copia certificada del acta de nacimiento expedida por la oficina del Registro Civil mexicano", "Credencial para votar del Instituto Nacional Electoral (INE/IFE)", "Entregar comprobante del pago de derechos", "Copia certificada del acta de matrimonio expedida por la oficina del Registro Civil mexicano","Copia simple de la Clave Única de Registro Población (CURP), certificada por el Registro Civil"],
        opciones: ["Presencial",],
        link: null,
    },
    {
        id:5,
        nombre:"Duplicado De Cedula Profesional",
        costo:"$433.00 mxn",
        documentos:["Solicitud firmada (e.firma) la cual contendrá tu nombre, lugar y fecha de nacimiento, así como nacionalidad y Clave Única de Registro de Población (CURP)", "Pago en línea, mediante tarjeta de crédito o débito   "],
        opciones: ["En Linea",],
        link: "https://www.gob.mx/cedulaprofesional",
    }

]

export default TramitesArreglo;