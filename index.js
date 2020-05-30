var player = 1
var posicao1 = []
var posicao2 = []
function marcar(linha, coluna) {
    if(player == 1) {
        document.getElementById(`p${linha}${coluna}`).innerHTML = "O";
        document.getElementById(`p${linha}${coluna}`).style.color = "#3065AC";
        //document.getElementById(`p${linha}${coluna}`).value = 1;
        // document.getElementById(`p${linha}${coluna}`).style.pointerEvents = 'auto';
        player++
        //posicao1 = linha.toString() + coluna.toString();
        
        posicao1.push(linha.toString() + coluna.toString())
        console.log(posicao1)
    } else if (player == 2){
        document.getElementById(`p${linha}${coluna}`).innerHTML = "X";
        document.getElementById(`p${linha}${coluna}`).style.color = "#C23B22";
        player--
        //posicao2 = linha.toString() + coluna.toString();
        posicao2.push(linha.toString() + coluna.toString())
        console.log(posicao2)
    }
    vitoria(player)
}

function resetar() {
    var player = 1
    var posicao1 = []
    var posicao2 = []
    document.getElementById().innerHTML = "";
}

function vitoria() {
    if (posicao1.indexOf("11") != -1 && posicao1.indexOf("12") != -1 && posicao1.indexOf("13") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("21") != -1 && posicao1.indexOf("22") != -1 && posicao1.indexOf("23") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("31") != -1 && posicao1.indexOf("32") != -1 && posicao1.indexOf("33") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("11") != -1 && posicao1.indexOf("21") != -1 && posicao1.indexOf("31") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("12") != -1 && posicao1.indexOf("22") != -1 && posicao1.indexOf("32") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("13") != -1 && posicao1.indexOf("23") != -1 && posicao1.indexOf("33") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("11") != -1 && posicao1.indexOf("22") != -1 && posicao1.indexOf("33") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao1.indexOf("13") != -1 && posicao1.indexOf("22") != -1 && posicao1.indexOf("31") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 1 venceu!"
    } else if (posicao2.indexOf("11") != -1 && posicao2.indexOf("12") != -1 && posicao2.indexOf("13") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("21") != -1 && posicao2.indexOf("22") != -1 && posicao2.indexOf("23") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("31") != -1 && posicao2.indexOf("32") != -1 && posicao2.indexOf("33") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("11") != -1 && posicao2.indexOf("21") != -1 && posicao2.indexOf("31") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("12") != -1 && posicao2.indexOf("22") != -1 && posicao2.indexOf("32") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("13") != -1 && posicao2.indexOf("23") != -1 && posicao2.indexOf("33") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("11") != -1 && posicao2.indexOf("22") != -1 && posicao2.indexOf("33") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else if (posicao2.indexOf("13") != -1 && posicao2.indexOf("22") != -1 && posicao2.indexOf("31") != -1) {
        document.querySelector("#ganhou").innerHTML = "Player 2 venceu!"
    } else {

    }
}





