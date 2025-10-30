// When the form is submitted, validate
document.getElementById('vacation-form').onsubmit = () => 
{    
    clearErrors();

    // Flag variable to determine if form data is valid
    let isValid = true;

    // Validate destination
    let destination = document.getElementById('destination').value.trim();
    if(destination === "none") {
        document.getElementById('err-des').style.display = "inline";
        isValid = false;
    }

    // Validate number of travelers
    let travelnum = document.getElementById('travelnum').value.trim();
    if(travelnum <= 0) {
        document.getElementById('err-num').style.display = "inline";
        isValid = false;
    }

    // Return isValid flag
    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}