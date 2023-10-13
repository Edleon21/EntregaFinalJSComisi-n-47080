/* Crear un algoritmo creando un ciclo aplicado a pagina de publicaciones 
y noticias para despues traer estas noticias desde una api */

const img_pub = ["../assets/imagenes/Kcmuv_Servicios-02-700.webp", "../assets/imagenes/credito-bancario-o-infonavit.webp", "../assets/imagenes/impi.webp","../assets/imagenes/transportistas-anotando-datos-frente-a-un-camion.webp"]
const title_pub = ["IMSS INFONAVIT", "CREDITOS", "IMPI","Transporte e Hidrocarburos"]
const desc_pub = ["Nueva Autoridad Respecto a el Cumplimiento Normativo la Dirección de Registro de Prestadoras de Servicios Especializados (REPSE)", "¿Debo presentar mi declaración anual como persona física? Excepciones a la obligación de presentar tu declaración anual para Persona Física en 2023", "Marcas, avisos o nombres comerciales concedidos en el año 2020 deben declarar su uso durante 2023","Nuevas Prorrogas que establece el SAT en el cumplimiento de Obligaciones ¿Afectan o benefician a los empresarios de los Sectores de Transporte e Hidrocarburos?"]
const time_pub = ["5", "15", "30","40"]

const inputBusqueda = document.getElementById("busqueda");
const botonBuscar = document.getElementById("boton-buscar");
const box = document.getElementById("container-pub");

for (let i = 0; i<img_pub.length; i++) {
    const nuevo = document.createElement('div')
    nuevo.classList.add('box')

    const img = document.createElement('img')
    img.src = img_pub[i]

    const title = document.createElement('h2')
    title.textContent = title_pub[i]
    nuevo.classList.add('edit-text01')

    const desc = document.createElement('p')
    desc.textContent = desc_pub[i]
    nuevo.classList.add('edit-text02')
    
    const time = document.createElement('p')
    time.textContent = "Last time " + time_pub[i] + " min"
    nuevo.classList.add('edit-text03')

    nuevo.appendChild(img)
    nuevo.appendChild(title)
    nuevo.appendChild(desc)
    nuevo.appendChild(time)
    box.appendChild(nuevo)
}




//Agregando un evento al mi boton de busqueda
botonBuscar.addEventListener('click', buscarPublicaciones);
inputBusqueda.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      buscarPublicaciones()
    }});

function buscarPublicaciones(){
    const query = inputBusqueda.value.toLowerCase();

    // filtrar publicaciones con filter
    const resultados = Array.from(box.querySelectorAll('.box'));
    resultados.filter(result => {
        const titulo = result.querySelector('.edit-text02 h2').textContent.toLowerCase();
        const descripcion = result.querySelector('.edit-text02 p').textContent.toLowerCase();
        const mostrar = titulo.includes(query) || descripcion.includes(query);
        result.style.display = mostrar ? "block" : "none";
    });
}

// para restablecer las publicaciones cuando estas se borran en el campo de busqueda

inputBusqueda.addEventListener('input', function() {
    if (inputBusqueda.value === "") {
        const resultados = box.querySelectorAll('.box');
        resultados.forEach(result => {
            result.style.display = "block";
        });
    }
});