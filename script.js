\const ctx = document.getElementById('skillChart');

new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
      'Python', 'SQL', 'Stata', 'Excel',
      'Visualization', 'Econometrics', 'Research'
    ],
    datasets: [{
      label: 'Skill Level',
      data: [85, 80, 75, 90, 85, 88, 92],
      backgroundColor: 'rgba(56, 189, 248, 0.2)',
      borderColor: '#38bdf8',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: { stepSize: 20 }
      }
    }
  }
});
