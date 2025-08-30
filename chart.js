const ctx = document.getElementById("loanChart").getContext("2d");
let loanChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Total loan amount paid", "Total interest paid"],
        datasets: [{
            data: [0, 0],
            backgroundColor: ["#0d6efd", "#fff44f"],
            hoverOffset: 2,
            borderRadius: 6,
            hoverBorderWidth: 3,
            hoverBorderColor: ["#66b2ff", "#ffd700"]
        }]
    }
});