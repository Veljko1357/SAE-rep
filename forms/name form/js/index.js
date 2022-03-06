var form = document.getElementById('ourForm');
form.addEventListener('submit', validateForm);

var inputSelector = document.getElementById('name')
var errorTextSelector = document.getElementById('error');



function validateForm(event) {
    event.preventDefault(); 
    console.log('Validating form...')

    var isValidated = true;

    if (inputSelector.value === "") {
        errorTextSelector.style.display = "block";
        errorTextSelector.innerText = "Name cannot be empty"
        inputSelector.style.borderColor = "red"
        var isValidated = false;
        }

    if (inputSelector.value.indexOf(' ') > -1) {     
        errorTextSelector.style.display = "block";
        errorTextSelector.innerText = "Name cannot contain any space"
        inputSelector.style.borderColor = "red"
        var isValidated = false;
        }
    if (isValidated === true) {
        form.submit();
    }

}