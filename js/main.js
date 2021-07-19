$cadastrar = document.querySelector("#btn-cadastro")
$emailField = document.querySelector('.email-field')



$cadastrar.addEventListener('click', (e) => {
    registrarEmail($emailField.value)
})


function registrarEmail (email) {

    if(!validateEmail($emailField.value)) {
        alert('Por favor, insira um e-mail válido')
    } else {
        console.log(email)
        localStorage.setItem('email', email)
        alert('Obrigado por se cadastrar!')
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

