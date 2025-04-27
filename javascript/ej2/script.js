function validarFormulario() {
    let legend = document.getElementById('legend');
    let alert = "";
    let cont = 0;

    if(!error('name')){
        cont++;
        alert += "nombre ";
    }
    
    if (!error('lastName')) {
        cont++;
        alert += "apellidos ";
    }

    if (!error('address')) {
        cont++;
        alert += "dirección ";
    }

    if (!error('phoneNumber')) {
        cont++;
        alert += "teléfono ";
    }

    if (!error('zipCode')) {
        cont++;
        alert += "cp";
    }

    if (alert != null) {
        alert = alert.replaceAll(" ", ", ");
    }

    if (cont>0) {
        legend.classList.add("error")
        legend.innerHTML = "Debe rellenar los siguientes campos: " + alert;
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