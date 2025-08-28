function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds(); 

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    const horaAtual = `${horas}:${minutos}:${segundos}`;

    document.getElementById("Relogio").textContent = horaAtual;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio(); 

function atualizarFundoPorHora() {
    const agora = new Date();
    const hora = agora.getHours();
    const body = document.body;
   
   
    body.classList.remove('manha', 'tarde', 'noite', 'madrugada');
   
   
    if (hora >= 5 && hora < 12) {
        body.classList.add('manha');
    } else if (hora >= 12 && hora < 18) {
        body.classList.add('tarde');
    } else if (hora >= 18 && hora < 23) {
        body.classList.add('noite');
    } else {
        body.classList.add('madrugada');
    }
}
 
window.onload = atualizarFundoPorHora;
setInterval(atualizarFundoPorHora, 60000); 

var data = new Date();
var hora = data.getHours();
var saudacaoElement = document.getElementById("saudacao");

if (hora >= 6 && hora < 12) {
  saudacaoElement.textContent = "Bom dia!";
} else if (hora >= 12 && hora < 18) {
  saudacaoElement.textContent = "Boa tarde!";
} else {
  saudacaoElement.textContent = "Boa noite!";
}

      
    