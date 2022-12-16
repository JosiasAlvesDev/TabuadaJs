function tabuada(){
    let num = document.getElementById('txtn');  //Pegando o numero informado pelo usuario 
    let tab = document.getElementById('seltab');

    //Validando se o usuario informou algum número
    if (num.value.length == 0) {
        window.alert("Por Favor, Informe um número para gerar a tabuada!")
    }else{
        let n = Number(num.value);  //Fazendo a conversao de String pra numer;
        let c = 1  //Contador
        tab.innerHTML = ``   //Limpando minha tela para apresentar minha tabuada ao usuario
        //While para fazer a tabuada
        while (c <= 10) {
            let item = document.createElement('option')  //Jogando meu elementos dentro do meu select 
            item.text = `${n} x ${c} = ${n * c}`        //Gerando a tabuada
            item.value = `tab${c}`   //Ajuda o usuário a saber qual item está selecionado
            tab.appendChild(item)
            c++
        }
    }
    
}