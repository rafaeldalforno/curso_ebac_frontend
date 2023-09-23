const form = document.getElementById('form-number');
let formEhValido = false;
const numeroA = document.getElementById('numberA');
const numeroB = document.getElementById('numberB');

function validaNumber(numeroA, numeroB){
    console.log('A:' + numeroA);
    console.log('B:' + numeroB);
    if (numeroA < numeroB){
        formEhValido = true;
    } else{
        formEhValido = false;
    }
    return formEhValido;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `O número B= ${numeroB.value} é maior que o numero A= ${numeroA.value}. Parabéns!`;
    const mensagemError = `O número A= ${numeroA.value} é maior que o número B= ${numeroB.value}. Tente Novamente!`;

    formEhValido = validaNumber(numeroA.value, numeroB.value);
    

    if (formEhValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numeroA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        const containerMensagemError = document.querySelector('.error-message');
        containerMensagemError.innerHTML = mensagemError;
        numeroA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
})