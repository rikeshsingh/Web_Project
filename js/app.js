/*
*
* @description
*
*/
const TRAFFIC = document.getElementById("graph--traffic");
const DTRAFFIC = document.getElementById("graph--dtraffic");
const USER = document.getElementById("graph--user");

let trafficChart = new Chart(TRAFFIC, {
  type: "line",
  data: {
    labels: ["9-15","16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(116, 119, 190, 0.4)",
      borderColor: "rgba(116, 119, 190, 1)",
      borderWidth: 2,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(116, 119, 190, 1)",
      pointBackgroundColor: "white",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(116, 119, 190, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 15,
      data: [0,500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          offsetGridLines: true
        },
        ticks: {
          beginAtZero: true,
          stepSize: 500,
          suggestedMax: 2500
        }
      }],
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
});

let dtrafficChart = new Chart(DTRAFFIC, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [50, 75, 175, 100, 200, 175, 75],
      backgroundColor: "rgba(116, 119, 190, 1)",
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          offsetGridLines: true
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50,
          suggestedMax: 250
        }
      }]
    },
    legend: {
      display: false
    }
  }
});

let userChart = new Chart(USER, {
  type: "doughnut",
  data: {
    labels: ["Desktop", "Tablet", "Mobile"],
    datasets: [{
      label: "My Strength",
      backgroundColor: ["#7477BE", "#81C98F", "#74B1BF"],
      data: [50, 20, 30]
    }]
  }
});
