// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var pieChart = document.getElementById("myPieChart");
var pieDropDown = [];
var ctx = pieChart.getContext('2d');
console.log(pieChart.width, pieChart.height);

var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Aggregation", "Join", "SubQuery", "GroupBy", "OrderBy"],
    datasets: [{
      data: [30, 10, 30, 20, 10],
      backgroundColor: ['#e74a3b', '#1cc88a', '#4e73df', '#f6c23e', '#858796'],
      hoverBackgroundColor: ['#be2617', '#13855c', '#224abe', '#dda20a', '#60616f'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});



for (i = 1; i < 23; i++) {
  if (i < 10) {
    pieDropDown.push(document.getElementById("TPC-H-0" + String(i)));
  } else {
    pieDropDown.push(document.getElementById("TPC-H-" + String(i)));
  }
}
for (i = 1; i < 23; i++) {
  console.log(pieDropDown[i - 1])
}

pieDropDown[0].onclick = function () {
  console.log('pieDropDown0 click');
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "01" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[1].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "02" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[2].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "03" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[3].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "04" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[4].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "05" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[5].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "06" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[6].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "07" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[7].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "08" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[8].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "09" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[9].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "10" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[10].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "11" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[11].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "12" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[12].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "13" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[13].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "14" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[14].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "15" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[15].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "16" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[16].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "17" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}


pieDropDown[17].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "18" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[18].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "19" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[19].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "20" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[20].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "21" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

pieDropDown[21].onclick = function () {
  myPieChart.destroy();
  var ctx = document.getElementById("myPieChart").getContext('2d');
  $.ajax({
    url: "/ssdcsd",
    type: "GET",
    data: { "query": "22" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: resData.labels,
          datasets: [{
            data: resData.datas,
            backgroundColor: ['#4e73df', '#1cc88a'],
            hoverBackgroundColor: ['#2e59d9', '#17a673'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: false
          },
          cutoutPercentage: 80,
        },
      });

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}
