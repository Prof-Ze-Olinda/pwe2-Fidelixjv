let nome = prompt('idade', 18);

let mensagem = (idade < 18) ? 'oi, bebe' :
    (idade < 18) ? 'oi' :
    (idade < 100) ? 'ola' :
    'voce ainda esta por aqui?!' ;

alert(mensagem);