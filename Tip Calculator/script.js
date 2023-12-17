const btnEl = document.getElementById("btn");
const billInput = document.getElementById("billy");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const minus = (tipValue/100) * billValue;
    const total = + billValue + minus;

    totalSpan.innerHTML = total;
}

btnEl.addEventListener("click", calculateTotal);

