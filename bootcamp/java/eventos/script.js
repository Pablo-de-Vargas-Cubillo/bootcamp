// const button$$ = document.querySelector(".cogerInput");
// console.log(button$$);

// const saludar = () => {
//   console.log("hello");
// };
// // button$$.onclick = saludar;

// const cogerInfoInput = ()=> {
//     const input$$ = document.querySelector("input")
//     console.log(input$$.value);
// }

// const buttonEscuchar$$ = document.querySelector(".escuchar")

// const cogerEvento = (event) => {
//     console.log(event.target.className);
//     event.target.className = "escuchar seleccionado"
//     // event.target.innerText="pulsado"
// }
// buttonEscuchar$$.addEventListener("click",cogerEvento)

const input$$ = document.querySelector("input")


const cogerTexto = (event) => {
    console.log(event.target.value);
    // console.log(input$$.value);
}
input$$.addEventListener("input",cogerTexto)
// input$$.oninput = cogerTexto()

