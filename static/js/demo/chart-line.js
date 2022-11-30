// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
var tpch01 = document.getElementById('TPC-H-01');
tpch01.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 01";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "01" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch1-chart");
      ctx.style.display = 'block';


      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch01");
}

var tpch02 = document.getElementById('TPC-H-02');
tpch02.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 02";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "02" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);

        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch2-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch02");
}

var tpch03 = document.getElementById('TPC-H-03');
tpch03.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 03";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "03" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch3-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch03");
}

var tpch04 = document.getElementById('TPC-H-04');
tpch04.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 04";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "04" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch4-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch04");
}

var tpch05 = document.getElementById('TPC-H-05');
tpch05.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 05";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "05" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch5-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch05");
}

var tpch06 = document.getElementById('TPC-H-06');
tpch06.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 06";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "06" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch6-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch06");
}

var tpch07 = document.getElementById('TPC-H-07');
tpch07.onclick = function () {

  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 07";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "07" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch7-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch07");
}

var tpch08 = document.getElementById('TPC-H-08');
tpch08.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 08";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "08" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch8-chart");
      ctx.style.display = 'block';

      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch08");
}

var tpch09 = document.getElementById('TPC-H-09');
tpch09.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 09";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "09" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch9-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch09");
}

var tpch10 = document.getElementById('TPC-H-10');
tpch10.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 10";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "10" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch10-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch10");
}

var tpch11 = document.getElementById('TPC-H-11');
tpch11.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 11";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "11" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch11-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch11");
}

var tpch12 = document.getElementById('TPC-H-12');
tpch12.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 12";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "12" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch12-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch12");
}

var tpch13 = document.getElementById('TPC-H-13');
tpch13.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 13";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "13" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch13-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch13");
}

var tpch14 = document.getElementById('TPC-H-14');
tpch14.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 14";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "14" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch14-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch14");
}

var tpch15 = document.getElementById('TPC-H-15');
tpch15.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 15";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "15" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch15-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch15");
}

var tpch16 = document.getElementById('TPC-H-16');
tpch16.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 16";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "16" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch16-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch16");
}

var tpch17 = document.getElementById('TPC-H-17');
tpch17.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 17";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "17" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch17-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch17");
}

var tpch18 = document.getElementById('TPC-H-18');
tpch18.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 18";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "18" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch18-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch18");
}

var tpch19 = document.getElementById('TPC-H-19');
tpch19.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 19";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "19" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch19-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch19");
}

var tpch20 = document.getElementById('TPC-H-20');
tpch20.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 20";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "20" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch20-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch20");
}

var tpch21 = document.getElementById('TPC-H-21');
tpch21.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 21";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "21" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch21-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch21");
}

var tpch22 = document.getElementById('TPC-H-22');
tpch22.onclick = function () {
  var cpuUsageByQuery = document.getElementById("cpuUsageByQuery");
  cpuUsageByQuery.innerText = "CPU Usage By Query - TPC-H 22";
  $.ajax({
    url: "/tpchChart",
    type: "GET",
    data: { "query": "22" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      var i = 1;
      for (; i < 23; i++) {
        var chartName = "tpch" + String(i) + "-chart";
        var toggleVisible = document.getElementById(chartName);
        toggleVisible.style.display = 'none';
      }
      var ctx = document.getElementById("tpch22-chart");
      ctx.style.display = 'block';




      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: resData.labels,
          datasets: [{
            label: "Core",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: resData.datas,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'date'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 7
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return tooltipItem.yLabel + datasetLabel;
              }
            }
          }
        }
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
  console.log("tpch22");
}

// Area Chart Example
