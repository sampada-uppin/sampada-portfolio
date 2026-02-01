// Skills Radar
new Chart(document.getElementById("skillsChart"), {
  type: "radar",
  data: {
    labels: ["Python","SQL","Stata","Excel","Viz","Econ","Research"],
    datasets: [{
      label: "Skill Level",
      data: [85,80,78,90,88,92,95],
      backgroundColor: "rgba(56,189,248,0.2)",
      borderColor: "#38bdf8"
    }]
  }
});

// Dashboard Charts
new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["2019","2020","2021","2022","2023"],
    datasets: [{
      label: "Unemployment Rate",
      data: [5.3,7.9,6.1,4.8,3.9]
    }]
  }
});

new Chart(document.getElementById("chart2"), {
  type: "line",
  data: {
    labels: ["Q1","Q2","Q3","Q4"],
    datasets: [{
      label: "GDP Growth",
      data: [3.2,2.8,4.1,5.0]
    }]
  }
});

new Chart(document.getElementById("chart3"), {
  type: "doughnut",
  data: {
    labels: ["Python","Stata","SQL","Excel"],
    datasets: [{
      data: [40,25,20,15]
    }]
  }
});
