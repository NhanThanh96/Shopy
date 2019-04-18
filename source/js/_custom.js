$(document).ready(function() {

  $('[data-toggle="tooltip"]').tooltip(); 

  new PerfectScrollbar(".js-activities-scrollbar", {
    wheelPropagation: true
  });
  new PerfectScrollbar(".js-messages-scrollbar", {
    wheelPropagation: true
  });
  new PerfectScrollbar(".js-navbar-menu-scrollbar", {
    wheelPropagation: true
  });

  $(".js-completion-tasks-chart").each(function(){
    var dataSet =  $(this).attr("data-setdata");
    var parsedDataSet = JSON.parse(dataSet); 
    new Chart($(this), {
      type: 'bar',
      data: {
        datasets: parsedDataSet[0].datasets,
        labels: parsedDataSet[0].labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              drawOnChartArea: false
            },
            ticks: {
              fontColor: '#888c9b',
              maxRotation: 0,
              maxTicksLimit: 4
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false
            },
            ticks: {
              fontColor: '#888c9b',
              beginAtZero: true,
              stepSize: 100
            }
          }]
        }
      }
    });
  });

  $(".js-tasks-performance-chart").each(function(){
    var selector = this;
    var options = $(selector).data();

    options.barColor = options.barColor;
    options.trackColor = options.trackColor;
    options.scaleColor = options.scaleColor || 'transparent';
    options.lineWidth = options.lineWidth ? parseInt(options.lineWidth) : 8;
    options.size = options.size ? parseInt(options.size) : 120;
    options.rotate = options.rotate ? parseInt(options.rotate) : 0;
    options.trackColor = options.trackColor == 'false' || options.trackColor == '' ? false : options.trackColor;
    options.scaleColor = options.scaleColor == 'false' || options.scaleColor == '' ? false : options.scaleColor;
    $(selector).easyPieChart(options);
  });
});
