function validarFormulario() {
    let legend = document.getElementById('legend');
    let alert;
    let cont = 0;


    if(!error('name')){
        cont++;
    }
    
    if (!error('lastName')) {
        cont++;
    }

    if (!error('address')) {
        cont++;
    }

    if (!error('phoneNumber')) {
        cont++;
    }

    if (!error('zipCode')) {
        cont++;
    }

    if (cont>0) {
        legend.classList.add("error")
        legend.innerHTML = "Debe rellenas todos los campos";
        return false;
    } else{
        return true;
    }
}

function error(id) {

    let element = document.getElementById(id);

    if(element.value.trim() === ""){
        element.classList.add('input_error');
        return false;
    } else {
        element.classList.remove('input_error')
        return true;
    }
}