const pantalla =document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",()=> {
    const botonApretando = boton.textContent;

    pantalla.textContent += botonApretando;

        if (pantalla.texcontent === "0")
            pantalla.textContent += botonApretando


    })
})
