console.log("Hola mundo")
console.error("El DNI viene vacío")
console.warn("Cuidado el DNI tiene que ser un string")

//alert("Hola mundo")


function cambiarFormato(){
    let elemento = document.getElementById("titulo")
    elemento.id                                                                                                             
     = "hola"
    console.log(elemento)
}


//Crear dos input tipo text, un boton y otro tipo text
//al dar clic en el botón en el tercer text aparecerá la suma de los dos primeros


let n1 = document.getElementById("num1")
let n2 = document.getElementById("num2")
console.log(n1)
console.log(n2)

function suma(){
    if (n1.value == "" || n2.value == "") {
        if (n1.value == "") {
            n1.className = "error"
            n1.placeholder = "Rellene este elemento"
        }
        if (n2.value == "") {
            n2.className = "error"
            n2.placeholder = "Rellene este elemento"
        }
    }else{
        n1.className = ""
        n2.className = ""
        let resultadoSuma = document.getElementById("resultadoSuma")
        console.log(suma)
        resultadoSuma.value = parseInt(n1.value) + parseInt(n2.value)
    }
}

function compararNumeros(){
    if (n1.value == "" || n2.value == "") {
        if (n1.value == "") {
            n1.className = "error"
            n1.placeholder = "Rellene este elemento"
        }
        if (n2.value == "") {
            n2.className = "error"
            n2.placeholder = "Rellene este elemento"
        }
    }else{
        n1.className = ""
        n2.className = ""
        if (parseInt(n1.value)==parseInt(n2.value) ) {
            console.log("Los números son iguales")
        }else{
            console.log("Los números no coinciden")
        }
    }
}


//Crear una clase error donde el borde es rojo
//las letras del label en rojo y si el elemento al sumar está vacío
//lo pondrá en clase error, si no hará la función que sea