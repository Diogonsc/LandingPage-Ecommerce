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

function setColor(e) {
    var target = e.target,
        count = +target.dataset.count;
  
     target.style.color = count === 1 ? "#ff0000" : '#000000';
     target.dataset.count = count === 1 ? 0 : 1;

}


