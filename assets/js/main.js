const valor = document.querySelector("#amount");
const periodo = document.querySelector("#period");
const juros = document.querySelector("#taxa");

const go = document.querySelector(".calcular");
const clear = document.getElementById("clear");

const parcela = document.querySelector(".valor-parcela");
const totalValue = document.querySelector(".valor-total");

const preResult = document.querySelector(".pre-resultado");
const posResult = document.querySelector(".pos-resultado");



var intervalID = window.setInterval(addLimeStyleClass, 10);
var intervalID2 = window.setInterval(addRadioLimeBorder, 10);

go.addEventListener("click", () => {
    validateForm();
    if(valor.value === "" || periodo.value === "" || juros.value === ""){
        return
    } else {
        let meses = (+periodo.value) * 12;
        let total = getTotalValue();
        let parcelaReal = total / meses;

        preResult.style.display = "none";
        posResult.style.display = "flex";

        parcela.innerHTML = `R&#36; ${parcelaReal.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
        totalValue.innerHTML = `R&#36; ${total.toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    }

});

function validateForm(){
    let array = [valor, periodo, juros];
    let required = document.getElementsByClassName("required");
    for(let i = 0; i < array.length; i++){
        if(array[i].value === ''){
            array[i].style.borderColor = "hsl(4, 69%, 50%)";
            required[i].style.display = "block";
            changeRedClass(array[i]);
        } else {
            array[i].style.borderColor = "hsl(200, 26%, 54%)";
            required[i].style.display = "none";
            changeBlueClass(array[i]);
        }
    }
}

// green border on input radio buttons

function addRadioLimeBorder(){
    const r1 = document.getElementById("imovel"),
          r2 = document.getElementById("auto"),
          r1In = document.getElementById("casa-input"),
          r2In = document.getElementById("auto-input");

    let array = [r1, r2];
    let inpArray = [r1In, r2In];

    for(let i = 0; i < array.length; i++){
        if(array[i].checked)
            inpArray[i].style.borderColor = "hsl(61, 70%, 52%)";
        else
            inpArray[i].style.borderColor = "hsl(200, 26%, 54%)";
    }
}

//lime style to hover inputs

function addLimeStyleClass() {
    if(document.activeElement === valor){
        document.getElementById("amount-symbol").classList.add("lime-style");
    } else {
        document.getElementById("amount-symbol").classList.remove("lime-style");
    }

    if(document.activeElement === periodo){
        document.getElementById("years").classList.add("lime-style");
    } else {
        document.getElementById("years").classList.remove("lime-style");
    }
    
    if(document.activeElement === juros){
        document.getElementById("percent").classList.add("lime-style");
    } else {
        document.getElementById("percent").classList.remove("lime-style");
    }
}

function getTotalValue() {
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
    

function changeBlueClass(element){
    if(element === valor){
        document.getElementById("amount-symbol").classList.add("color-blue");
        document.getElementById("amount-symbol").classList.remove("color-red");
    } else if(element === periodo){
        document.getElementById("years").classList.add("color-blue");
        document.getElementById("years").classList.remove("color-red");
    } else if(element === juros){
        document.getElementById("percent").classList.add("color-blue");
        document.getElementById("percent").classList.remove("color-red");
    }
}

function changeRedClass(element){
    if(element === valor){
        document.getElementById("amount-symbol").classList.add("color-red");
        document.getElementById("amount-symbol").classList.remove("color-blue");
    } else if(element === periodo){
        document.getElementById("years").classList.add("color-red");
        document.getElementById("years").classList.remove("color-blue");
    } else if(element === juros){
        document.getElementById("percent").classList.add("color-red");
        document.getElementById("percent").classList.remove("color-blue");
    }
}






