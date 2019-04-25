$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip(); 

  function makeScrollbar(element){
    if($(element).length > 0) {
      new PerfectScrollbar(element, {
        wheelPropagation: false
      });
    }
  }
  makeScrollbar(".js-activities-scrollbar");
  makeScrollbar(".js-messages-scrollbar");
  makeScrollbar(".js-navbar-menu-scrollbar");

  // sidebar: keep open current submenu
  $('[data-parent="#sidebarAccordion"]').on('hide.bs.collapse', function (e) {
    if ($(this).find('.active').length > 0) {
      e.preventDefault();
    }
  });

  //sidebar: collapse all submenu inner
  $('.submenu').on('hidden.bs.collapse', function () {
    $(this).find('.collapse').collapse('hide');
  })

  // dropdown: keep open dropdown
  $(document).on('click', '.js-time-filter .dropdown-menu', function (e) {
    e.stopPropagation();
  });

  function drawSingleBarChart(element, _data){
    var _singleBarChart = new Chart(document.getElementById(element), {
      type: 'bar',
      data: _data,
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
  }

  var completionTaskCanvas = $('#js-completion-tasks-chart').length && $('#js-completion-tasks-chart')[0].getContext('2d');
  if ($('#js-completion-tasks-chart').length > 0) {
    var _dataCompletionSet = $('#js-completion-tasks-chart').data("setdata");
    drawSingleBarChart('js-completion-tasks-chart', _dataCompletionSet);
  }

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

  function drawMultiBarChart(element, _data){
    var barChart = new Chart(element, {
      type: 'bar',
      data: _data,
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
  }

  $(".js-achievement-chart").each(function () {
    var _ele = $(this);
    var _achievementDataSet =  $(this).data('setdata');
    drawMultiBarChart(_ele, _achievementDataSet);
  });

  // sidebar collapse
  function sidebarCollapse(){
    $('#js-toggle-sidebar').on('click', function(){
      $('.js-sidebar-collapse').toggleClass('show');
  
      $('.overlay').fadeToggle('200');
  
      $('.overlay').on('click', function(){         
        $('.js-sidebar-collapse').removeClass('show');
        $(this).fadeOut();
      });
    })
  }
  sidebarCollapse();

  // modal scrollable
  function modalScrollable(){
    $('.modal').on('shown.bs.modal', function () {
      $(this).addClass('has-shown').find('.modal-body').trigger('scroll');
    });
    $('.js-modal-dialog-scrollable .modal-body').on('scroll', function () {
      var $elem = $(this);
      var elem = $elem[0];
      var isTop = $elem.scrollTop() === 0;
      var isBottom = elem.scrollHeight - $elem.scrollTop() === $elem.outerHeight();
      $elem.prev().toggleClass('modal-body-scrolled', isTop);
      $elem.next().toggleClass('modal-body-scrolled', isBottom);
    });
  }
  modalScrollable();
 
  // flatpickr.min.js
  $(".js-flatpickr").flatpickr({
    mode: "range",
    dateFormat: "Y-m-d"
  });
});
