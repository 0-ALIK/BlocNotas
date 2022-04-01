const formDatos = {

    titulo: "",
    texto: ""

}

const submit = document.querySelector(".form__submit")
const title = document.querySelector(".form__input")
const text = document.querySelector(".form__textarea")
const form = document.querySelector(".form")
const noteCase = document.querySelector(".notas__case")


uploadEvents()

function uploadEvents(){

    document.addEventListener("DOMContentLoaded", resetContentForm)

    title.addEventListener("blur", validarForm)
    text.addEventListener("blur", validarForm)

    form.addEventListener("submit", getDataOfForm)  

    noteCase.addEventListener("click", eliminarNota)

}

function resetContentForm()
{

    text.value = ""
    title.value = ""
    submit.disabled = true
    submit.style.opacity = "0.5"

}

function getDataOfForm(e){

    e.preventDefault()

    addNote(title.value, text.value)

    resetContentForm()

}

function validarForm(e){

    if(e.target.value === ""){

        e.target.style.borderColor = "red"

    }
    else{

        e.target.style.borderColor = "#47cfb9"

    }


    if(title.value !== "" && text.value !== ""){

        submit.disabled = false
        submit.style.opacity = "1"

    }

}

function addNote(titleP, textP)
{

    const note = document.createElement("div")
    note.classList.add("nota")

    note.innerHTML = `
    
        <h3 class="nota__title">${titleP}</h3>
        <p class="nota__text">${textP}</p>
        <a href="#" class="btn-nota">Eliminar</a>
    
    `

    noteCase.appendChild(note)

}

function eliminarNota(e)
{

    e.preventDefault()

    if(e.target.classList.contains("btn-nota")){

        e.target.parentElement.style.transform = "translateX(100px)"
        e.target.parentElement.style.opacity = "0"

        setTimeout(() => {
            e.target.parentElement.remove()
        }, 500);

    }

}
