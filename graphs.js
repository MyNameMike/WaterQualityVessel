var ctx = document.getElementById("humidityChart").getContext('2d');
var humidityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humidity (Good: <50%)',
            data: [],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

var ctx = document.getElementById("airTempChart").getContext('2d');
var airTempChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Air Temp (Good: <72°F)',
            data: [],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

var ctx = document.getElementById("luxChart").getContext('2d');
var luxChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Lux (Good: <10,000)',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

var ctx = document.getElementById("turbidityChart").getContext('2d');
var turbidityChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Turbidity (Good: >4)',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

var ctx = document.getElementById("phChart").getContext('2d');
var phChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'PH (Good: 6.5 - 9.0)',
            data: [],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

var ctx = document.getElementById("waterTempChart").getContext('2d');
var waterTempChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Water Temp (Good: <17°C)',
            data: [],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}