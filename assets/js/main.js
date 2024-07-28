const valor = document.querySelector("#amount");
const periodo = document.querySelector("#period");
const juros = document.querySelector("#taxa");

const go = document.querySelector(".calcular");
const parcela = document.querySelector(".valor-parcela");
const totalValue = document.querySelector(".valor-total");

const preResult = document.querySelector(".pre-resultado");
const posResult = document.querySelector(".pos-resultado");

const clear = document.getElementById("clear");

var intervalID = window.setInterval(addLimeStyleClass, 10);

clear.addEventListener("click", () => {
    if(posResult.style.display = "flex"){
        preResult.style.display = "block";
        posResult.style.display = "none";
    }        
});

go.addEventListener("click", () => {
    let meses = (+periodo.value) * 12;
    let total = getTotalValue();
    let parcelaReal = total / meses;

    preResult.style.display = "none";
    posResult.style.display = "flex";

    parcela.innerHTML = `R&#36; ${parcelaReal.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    totalValue.innerHTML = `R&#36; ${total.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;

});


function addLimeStyleClass() {
    if(document.activeElement === valor){
        document.getElementById("amount-symbol").classList.add("lime-style");
    } else {
        document.getElementById("amount-symbol").classList.remove("lime-style");
    }
}

function getTotalValue() {
    if(periodo.value === ''|| valor.value === '' || juros.value === ''){
        return -1;
    } else {
        let meses = (+periodo.value) * 12;
        let parcelaLivre = (+valor.value) / meses;
        let taxaMes = (+juros.value) / 12;

        let total = 0;
        let parcelaReal = parcelaLivre;
        for(i = 1; i <= meses; i++){
            parcelaReal += parcelaReal * (taxaMes/100);
            total += parcelaReal;
        }
        return total;
    }
    
}





