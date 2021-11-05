const conte_foto = document.getElementById("conte_foto")
const foto = document.getElementById("foto")

conte_foto.addEventListener("click", (e) => {
    foto.src = "perritos.jpeg"
})

/* function foto_cambio () {
    setTimeout(() => {
        foto.src = "perritos.jpeg"
        setTimeout(() => {
            foto.src = "baby_dog.jpg"
        }, 3000);
    }, 3000);
}

foto_cambio() */