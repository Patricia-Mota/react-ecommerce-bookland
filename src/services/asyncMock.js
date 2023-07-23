const libros = [
    {
        id: 1,
        nombre: "¿Por qué dormimos?",
        categoria: "Ciencia",
        autor: "Matthew Walker",
        precio: 360,
        imagen: "/img/Libros/por-que-dormimos.jpeg",
    },
    {
        id: 2,
        nombre: "Hábitos atómicos",
        categoria: "Autodesarrollo",
        autor: "James Clear",
        precio: 299,
        imagen: "/img/Header/atomic-habits-img-2.png",
    },
    {
        id: 3,
        nombre: "El diseño de las cosas cotidianas",
        categoria: "Diseño",
        autor: "Donald A. Norman",
        precio: 625,
        imagen: "/img/Libros/the-design-of-everyday-things.jpeg",
    },
    {
        id: 4,
        nombre: "Una chica como ella",
        categoria: "Novela",
        autor: "Marc Levy",
        precio: 200,
        imagen: "/img/Libros/una-chica-como-ella.jpeg",
    },
    {
        id: 5,
        nombre: "Un bárbaro en París",
        categoria: "Novela",
        autor: "Mario Vargas Llosa",
        precio: 350,
        imagen: "/img/Libros/un-barbaro-en-paris.jpeg",
    },
    {
        id: 6,
        nombre: "Tres meses",
        categoria: "Novela",
        autor: "Joana Marcús",
        precio: 370,
        imagen: "/img/Libros/tres-meses.png",
    },
]

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(libros)
        }, 200)
    })
}

export function getLibroData(id) {
    return new Promise((resolve, reject) => {
        const productRequested = libros.find((item) => item.id === Number(id))

        setTimeout(() => {
            resolve(productRequested)
        }, 200)
    })
}

export function getCategoryData(categoryURL) {
    return new Promise((resolve, reject) => {
        const categoryRequested = libros.filter((item) => {
            return item.categoria.toLowerCase() === categoryURL.toLowerCase()
        })

        setTimeout(() => {
            resolve(categoryRequested)
        }, 200)
    })
}

export default getData
