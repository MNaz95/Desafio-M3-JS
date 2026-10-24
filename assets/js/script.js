

const propiedadesVenta = [
    {
        nombre: "Casa en el centro",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Casa céntrica con tres habitaciones, ambientes amplios y excelente ubicación, cerca de comercios y servicios.",
        ubicacion: "Santiago",
        habitaciones: 3,
        costo: 1500,
        pets: false,
        smoke: false
    },
    {
       nombre: "Casa de playa",
        src: "https://imgs.search.brave.com/4wTZCSQjwczSX4r0To_Gpnx5hJUIkCOmd4E51dUejBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/MDk3Lzk1MS9zbWFs/bC9hLXNlcmVuZS1i/ZWFjaGZyb250LWhv/dXNlLXNpdHMtcGVh/Y2VmdWxseS1ieS10/aGUtdHVycXVvaXNl/LXdhdmVzLXBob3Rv/LmpwZWc",
        descripcion: "Hermosa casa de dos habitaciones, ideal para descansar, con espacios luminosos y un ambiente tranquilo.",
        ubicacion: "La Banda",
        habitaciones: 2,
        costo: 3000,
        pets: true,
        smoke: true
    },
    {
       nombre: "Casa en la sierra",
        src: "https://imgs.search.brave.com/ulXY8X8ZiHTxqOzPX0a_aiwIJuoET5NEa-p0NmnnO-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdh/ci56b25hcHJvcGNk/bi5jb20vYXZpc29z/LzEvMDAvNTkvMDIv/NDgvMzMvMzYweDI2/Ni8yMDUwNTAxOTg1/LmpwZz9pc0ZpcnN0/SW1hZ2U9dHJ1ZQ",
        descripcion: "Acogedora casa de dos habitaciones, rodeada de naturaleza, ideal para quienes buscan tranquilidad y hermosos paisajes.",
        ubicacion: "La Banda",
        habitaciones: 2,
        costo: 1500,
        pets: true,
        smoke: false
    },
    {
       nombre: "Casa del cerro",
        src: "https://imgs.search.brave.com/qRB25RyrjPykAC8VEHBdK2vgPf4ALbnuJHH9CKUqUeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcnF1/aW5lLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wMy9h/cnF1aW5lX2xlb25h/cmRvX2NhcmRvc29f/YXJxdWl0ZWN0b3Nf/Y2FzYV9jZXJyb3Nf/dml2aWVuZGFfMS5q/cGc",
        descripcion: "Amplia casa de cinco habitaciones, con diseño moderno, espacios cómodos y vistas panorámicas al paisaje.",
        ubicacion: "La Banda",
        habitaciones: 5,
        costo: 4000,
        pets: false,
        smoke: true
    }

]

const propiedadesAlquiler = [ {
       nombre: "Casa con jardín",
       src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
       descripcion: "Casa familiar con jardín, patio y espacios amplios.",
       ubicacion: "La Banda, Santiago del Estero",
       habitaciones: 4,
       costo: 4000,
       pets: true,
       smoke: false
    },

    {
     nombre: "Condominio moderno",
     src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a",
     descripcion: "Condominio ubicado en una zona residencial tranquila.",
     ubicacion: "Córdoba",
     habitaciones: 2,
     costo: 2500,
     pets: false,
     smoke: false
    },
    
    {
       nombre: "Departamento con vista al mar",
       src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09",
       descripcion: "Departamento amplio con vista al mar y balcón privado.",
       ubicacion: "Mar del Plata",
       habitaciones: 3,
       costo: 3500,
       pets: true,
       smoke: true
    },

    {
      nombre: "Departamento céntrico",
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      descripcion: "Departamento cómodo y luminoso, cerca de comercios y transporte público.",
      ubicacion: "Santiago del Estero",
      habitaciones: 2,
      costo: 2000,
      pets: true,
      smoke: false
    }
]


const contenedorVenta = document.querySelector("#propiedades-venta")
if (contenedorVenta) {
    contenedorVenta.innerHTML = ""
}

const contenedorAlquiler = document.querySelector("#propiedades-alquiler")
if (contenedorAlquiler) {
    contenedorAlquiler.innerHTML = ""
}




const paginaActual = window.location.pathname
const esInicio = paginaActual.endsWith("index.html") || paginaActual.endsWith("/")
let contadorVenta = 0
let contadorAlquiler = 0

if (contenedorVenta) {
for (let propiedad of propiedadesVenta) {
    let mensajeSmoke = ""
    let colorSmoke = ""

    if (propiedad.smoke === true) {
        mensajeSmoke = "Permitido fumar"
        colorSmoke = "text-success"
    } else {
        mensajeSmoke = "No se permite fumar"
        colorSmoke = "text-danger"
    }

    let mensajePets = ""
    let colorPets = ""

if (propiedad.pets === true) {
    mensajePets = "Mascotas permitidas"
    colorPets = "text-success"
} else {
    mensajePets = "No se permiten mascotas"
    colorPets = "text-danger"
}
    contenedorVenta.innerHTML += `
     <div class="col-md-4 mb-4">
    <div class="card">
        <img
            src="${propiedad.src}"
            class="card-img-top"
            alt="Imagen de ${propiedad.nombre}"
        >
       <div class="card-body">
    <h5 class="card-title">${propiedad.nombre}</h5>
    <p class="card-text">${propiedad.descripcion}</p>
    <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        
    </p>

<p class="${colorSmoke}">${mensajeSmoke}</p>
<p class="${colorPets}">${mensajePets}</p>

    <p>
    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
</p>
<p>
    <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
</p>
</div>
    </div>
</div>
`

contadorVenta++


if (esInicio && contadorVenta === 3) {
    break
}
}

}

if (contenedorAlquiler) {
    for (let propiedad of propiedadesAlquiler) {
        let mensajeSmoke = ""
let colorSmoke = ""

if (propiedad.smoke === true) {
    mensajeSmoke = "Permitido fumar"
    colorSmoke = "text-success"
} else {
    mensajeSmoke = "No se permite fumar"
    colorSmoke = "text-danger"
}
let mensajePets = ""
let colorPets = ""

if (propiedad.pets === true) {
    mensajePets = "Mascotas permitidas"
    colorPets = "text-success"
} else {
    mensajePets = "No se permiten mascotas"
    colorPets = "text-danger"
}
     contenedorAlquiler.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen de ${propiedad.nombre}">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>
                <p class="${colorSmoke}">${mensajeSmoke}</p>
                <p class="${colorPets}">${mensajePets}</p>
                
                <p>
    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
</p>
<p>
    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
</p>
<p>
    <i class="fas fa-dollar-sign"></i> ${propiedad.costo}
</p>
            </div>
        </div>
    </div>
`
contadorAlquiler++
if (esInicio && contadorAlquiler === 3) {
    break
}

    }
}