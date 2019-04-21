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


  function barChart(element){
    $(element).each(function(){
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
  }


  $(window).on('load', function () { 
    barChart(".js-completion-tasks-chart");
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
    // $(selector).easyPieChart({
    //   barColor : 
    // });
  });

  var achievementCanvas = $('#js-achievement-chart')[0].getContext('2d');
  var achievementDataSet =  $('#js-achievement-chart').attr("data-setdata");
  var parsedAchievementDataSet = JSON.parse(achievementDataSet);
  var achievementChart = new Chart(achievementCanvas, {
    type: 'bar',
    data: parsedAchievementDataSet[0],
    options: {
      tooltips: {
        mode: 'index',
        intersect: true
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: true,
            drawBorder: false,
            drawOnChartArea: false,
            fontStyle: 400
          },
          ticks: {
            fontColor: '#888c9b',
          }
        }],
        yAxes: [{
          gridLines: {
            display: true,
            borderDash: [8, 4],
            fontStyle: 400
          },
          ticks: {
            stepSize: 20,
            fontColor: '#888c9b',
          }
        }]
      }
    }
  });
  // button sidebar toggle
  function resizeHandler() {
    var win = $(this); 
    var sidebarCollapseWidth = "-240px";
      if (win.width() < 769) {
        $('.overlay').on('click', function(){        
          $(".overlay").removeClass("hide");
          $(".sidebar__collaspe").animate({
            left : sidebarCollapseWidth
          });
        });
      } else{
        $(window).unbind('scroll');
      }
    }
  resizeHandler();

  $(window).resize(resizeHandler);

  $(".js-toggle-sidebar").on("click", function(){
    var sidebarCollapse = $(".sidebar__collaspe");
    var sidebarCollapseWidth = "-240px";
    $(".overlay").toggleClass("hide");
    if(sidebarCollapse.css("left") == sidebarCollapseWidth) {
      $(".sidebar__collaspe").animate({
        left : 0
      }, 350);
    }
    else {
      $(".sidebar__collaspe").animate({
        left : sidebarCollapseWidth
      }, 350);
    }
  });
});
