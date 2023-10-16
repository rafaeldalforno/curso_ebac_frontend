$(document).ready(function(){    
    $('#telefone').mask('(00) 0 0000-0000', {placeholder: '(00) 0 0000-0000'});

    $('#cpf').mask('000.000.000-00', {placeholder: '000.000.000-00'});

    $('#cep').mask('00000-000', {placeholder: '00000-000'});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },

            email: {
                required: true,
                email: true
            },

            telefone: {
                required: true
            },

            cpf: {
                required: true
            },

            endereco: {
                required: true
            },

            cep: {
                required: true
            }
        },

        messages: {
            nome: 'Por favor, insira o seu nome completo!',
            email: 'Por favor, insira seu e-mail!',
            telefone: 'Por favor, insira seu telefone!',
            cpf: 'Por favor, insira seu CPF!',
            endereco: 'Por favor, insira seu endereco completo!',
            cep: 'Por favor, insira seu CEP!'
        }
    })
})