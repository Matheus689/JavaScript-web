function verificarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    
    if (palpite === numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    } else {
        document.getElementById("resultado").innerHTML = "Tente novamente!";
    }
}

function verificarBissexto() {
    const ano = parseInt(document.getElementById("ano").value);
    const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    
    document.getElementById("resultado").innerHTML = bissexto ? 
        "O ano é bissexto!" : "O ano não é bissexto!";
}

function calcularMedia() {
    const notas = [
        parseFloat(document.getElementById("nota1").value),
        parseFloat(document.getElementById("nota2").value),
        parseFloat(document.getElementById("nota3").value),
        parseFloat(document.getElementById("nota4").value)
    ];
    
    const media = notas.reduce((a, b) => a + b) / 4;
    
    let resultado = "";
    if (media >= 7) {
        resultado = "Aprovado!";
    } else if (media >= 5) {
        resultado = "Recuperação";
    } else {
        resultado = "Reprovado";
    }
    
    document.getElementById("resultado").innerHTML = 
        `Média: ${media.toFixed(1)} - ${resultado}`;
}

function calcularGorjeta() {
    const valor = parseFloat(document.getElementById("valor").value);
    const satisfacao = document.getElementById("satisfacao").value;
    
    const porcentagens = {
        bom: 0.1,
        otimo: 0.15,
        excelente: 0.2
    };
    
    const gorjeta = valor * porcentagens[satisfacao];
    const total = valor + gorjeta;
    
    document.getElementById("resultado").innerHTML = 
        `Gorjeta: R$ ${gorjeta.toFixed(2)}<br>Total: R$ ${total.toFixed(2)}`;
}

function mostrarSaudacao() {
    const hora = new Date().getHours();
    let saudacao = "";
    
    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }
    
    document.getElementById("resultado").innerHTML = saudacao;
}