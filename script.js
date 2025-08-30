function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseFloat(document.getElementById("loanTerm").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        showError("Please enter valid numbers in all fields.");
        return;
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = monthlyPayment * totalPayments - loanAmount;

    displayResult(monthlyPayment, totalInterest);

    const chartContainer = document.getElementById("chartContainer");
    chartContainer.style.display = "block";
    loanChart.data.datasets[0].data = [loanAmount, totalInterest];
    loanChart.update();
}

function showError(message) {
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    chartContainer.style.display = "none";
    resultDiv.innerHTML = `<p class="error">${message}</p>`;
}

function displayResult(monthlyPayment, totalInterest) {
    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "block";
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <p>Monthly Payment : ${monthlyPayment.toFixed(2)}</p>
        <p>Total Interest : ${totalInterest.toFixed(2)}</p>
    `;
}

document.getElementById("calculateBtn").addEventListener("click", calculateLoan);

document.getElementById("resetBtn").addEventListener("click", function () {
    document.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    document.getElementById("resultBox").style.display = "none";
    document.getElementById("error").style.display = "none";
});