$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const novaTarefa = $('#tarefa-cadastro').val();

        const novaLinha = $('<li></li>');

        $(`<a>${novaTarefa}</a>`).appendTo(novaLinha);
        $(novaLinha).appendTo('ul');
        $('#tarefa-cadastro').val('');


        // Adicionar uma classe ao item que for clicado
        $('a').click(function(){
            $(this).addClass('item-clicado');
        })
    })
})