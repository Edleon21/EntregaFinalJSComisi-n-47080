/* creando objetos para apartado de servicios con el objetivo de crear despues un filtro para encontrar los servicios que buscan los usuarios */

const servicios = [
    {
        titulo: "PLANEACIÓN FISCAL",
        descripcion: "La optimización de recursos representa, en el ámbito empresarial, una necesidad para poder ser competitivos; y una de las…",
        imagen:"../assets/imagenes/planeacionfiscal.webp"
    },
    {
        titulo: "LITIGIO FISCAL Y ADMINISTRATIVO",
        descripcion: "Nuestra área de especialización es el litigio fiscal y administrativo. Defendemos a los contribuyentes en contra de los actos...",
        imagen:"../assets/imagenes/litigiofiscal.jpg"
      },
      {
        titulo: "AMPAROS",
        descripcion: "El amparo es un medio de control constitucional con el que cuentan los ciudadanos para combatir las decisiones de…",
        imagen:"../assets/imagenes/amparos.jpeg"
      },
      {
        titulo: "AUDITORIA",
        descripcion: "Confianza, independencia y precisión que crean valor para su empresa. La toma adecuada de decisiones empresariales depende de contar…",
        imagen:"../assets/imagenes/auditoria.jpg"
      },
      {
        titulo: "DERECHO CORPORATIVO",
        descripcion: "buscamos brindar un asesoramiento integral en derecho corporativo combinando nuestras ramas de expertis como lo es",
        imagen:"../assets/imagenes/DerechoCorporativo.jpg"
      },
      {
        titulo: "DEVOLUCIONES",
        descripcion: "A través del presente servicio les hacemos conocer los diferentes procedimientos para obtener las devoluciones que deriva de las…",
        imagen:"../assets/imagenes/devoluciones.jpg"
      },
      {
        titulo: "DERECHO LABORAL",
        descripcion: "Brindamos un asesoramiento integral en derecho laboral, combinando nuestras ramas de expertis como lo es el derecho fiscal.",
        imagen:"../assets/imagenes/derechoLaboral.jpg"
      },
      {
        titulo: "DERECHO MERCANTIL",
        descripcion: "En el mundo actual de los negocios, debido a las problemáticas que puedan surgir entre diferentes comerciantes o sociedades…",
        imagen:"../assets/imagenes/derechoMercantil.jpg"
      },
      {
        titulo: "ASESORÍA EN GENERAL",
        descripcion: "¿Cuándo es necesario requerir los servicios de consultoría de un despacho de abogados? Aquí podrás encontrar la respuesta.",
        imagen:"../assets/imagenes/servicios-asesori-general.jpg"
      },
];

const serviciosList = document.getElementById("servicios-list");

function agregarServicios() {
    servicios.forEach(servicio => {
        const li = document.createElement('li'); 
        li.innerHTML = `
        <div class="items">
          <h2 class="items-text01">${servicio.titulo}</h2>
          <hr class="linea02">
          <h3 class="items-text02">${servicio.descripcion}</h3>
          <img class="img-servicios" src="${servicio.imagen}" alt="${servicio.titulo}">
        </div>
      `;

      serviciosList.appendChild(li);
    });
}

agregarServicios();