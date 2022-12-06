var queryImage = document.getElementById('queryInfoIMG');
var srcString = "/static/img/tpch/TPC-H";
var srcSuffix = ".png";
var queryInfo = document.getElementById('queryInfo');
var runQuery = document.getElementById('submitText');

var tpch01 = document.getElementById('TPC-H-01');
tpch01.onclick = function () {
  runQuery.innerText = 'Run TPC-H 1';
  queryInfo.innerText = 'Query Info (TPC-H 1)';
  queryImage.src = srcString + "1" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');

  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "01" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch02 = document.getElementById('TPC-H-02');
tpch02.onclick = function () {
  runQuery.innerText = 'Run TPC-H 2';
  queryInfo.innerText = 'Query Info (TPC-H 2)';
  queryImage.src = srcString + "2" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "02" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch03 = document.getElementById('TPC-H-03');
tpch03.onclick = function () {
  runQuery.innerText = 'Run TPC-H 3';
  queryInfo.innerText = 'Query Info (TPC-H 3)';
  queryImage.src = srcString + "3" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "03" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })

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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch04 = document.getElementById('TPC-H-04');
tpch04.onclick = function () {
  runQuery.innerText = 'Run TPC-H 4';
  queryInfo.innerText = 'Query Info (TPC-H 4)';
  queryImage.src = srcString + "4" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "04" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch05 = document.getElementById('TPC-H-05');
tpch05.onclick = function () {
  runQuery.innerText = 'Run TPC-H 5';
  queryInfo.innerText = 'Query Info (TPC-H 5)';
  queryImage.src = srcString + "5" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "05" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch06 = document.getElementById('TPC-H-06');
tpch06.onclick = function () {
  runQuery.innerText = 'Run TPC-H 6';
  queryInfo.innerText = 'Query Info (TPC-H 6)';
  queryImage.src = srcString + "6" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "06" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })

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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch07 = document.getElementById('TPC-H-07');
tpch07.onclick = function () {
  runQuery.innerText = 'Run TPC-H 7';
  queryInfo.innerText = 'Query Info (TPC-H 7)';
  queryImage.src = srcString + "7" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "07" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch08 = document.getElementById('TPC-H-08');
tpch08.onclick = function () {
  runQuery.innerText = 'Run TPC-H 8';
  queryInfo.innerText = 'Query Info (TPC-H 8)';
  queryImage.src = srcString + "8" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "08" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch09 = document.getElementById('TPC-H-09');
tpch09.onclick = function () {
  runQuery.innerText = 'Run TPC-H 9';
  queryInfo.innerText = 'Query Info (TPC-H 9)';
  queryImage.src = srcString + "9" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "09" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch10 = document.getElementById('TPC-H-10');
tpch10.onclick = function () {
  runQuery.innerText = 'Run TPC-H 10';
  queryInfo.innerText = 'Query Info (TPC-H 10)';
  queryImage.src = srcString + "10" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "10" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch11 = document.getElementById('TPC-H-11');
tpch11.onclick = function () {
  runQuery.innerText = 'Run TPC-H 11';
  queryInfo.innerText = 'Query Info (TPC-H 11)';
  queryImage.src = srcString + "11" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "11" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch12 = document.getElementById('TPC-H-12');
tpch12.onclick = function () {
  runQuery.innerText = 'Run TPC-H 12';
  queryInfo.innerText = 'Query Info (TPC-H 12)';
  queryImage.src = srcString + "12" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "12" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch13 = document.getElementById('TPC-H-13');
tpch13.onclick = function () {
  runQuery.innerText = 'Run TPC-H 13';
  queryInfo.innerText = 'Query Info (TPC-H 13)';
  queryImage.src = srcString + "13" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "13" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch14 = document.getElementById('TPC-H-14');
tpch14.onclick = function () {
  runQuery.innerText = 'Run TPC-H 14';
  queryInfo.innerText = 'Query Info (TPC-H 14)';
  queryImage.src = srcString + "14" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "14" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch15 = document.getElementById('TPC-H-15');
tpch15.onclick = function () {
  runQuery.innerText = 'Run TPC-H 15';
  queryInfo.innerText = 'Query Info (TPC-H 15)';
  queryImage.src = srcString + "15" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "15" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch16 = document.getElementById('TPC-H-16');
tpch16.onclick = function () {
  runQuery.innerText = 'Run TPC-H 16';
  queryInfo.innerText = 'Query Info (TPC-H 16)';
  queryImage.src = srcString + "16" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "16" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch17 = document.getElementById('TPC-H-17');
tpch17.onclick = function () {
  runQuery.innerText = 'Run TPC-H 17';
  queryInfo.innerText = 'Query Info (TPC-H 17)';
  queryImage.src = srcString + "17" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "17" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch18 = document.getElementById('TPC-H-18');
tpch18.onclick = function () {
  runQuery.innerText = 'Run TPC-H 18';
  queryInfo.innerText = 'Query Info (TPC-H 18)';
  queryImage.src = srcString + "18" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "18" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch19 = document.getElementById('TPC-H-19');
tpch19.onclick = function () {
  runQuery.innerText = 'Run TPC-H 19';
  queryInfo.innerText = 'Query Info (TPC-H 19)';
  queryImage.src = srcString + "19" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "19" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch20 = document.getElementById('TPC-H-20');
tpch20.onclick = function () {
  runQuery.innerText = 'Run TPC-H 20';
  queryInfo.innerText = 'Query Info (TPC-H 20)';
  queryImage.src = srcString + "20" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "20" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch21 = document.getElementById('TPC-H-21');
tpch21.onclick = function () {
  runQuery.innerText = 'Run TPC-H 21';
  queryInfo.innerText = 'Query Info (TPC-H 21)';
  queryImage.src = srcString + "21" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "21" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

var tpch22 = document.getElementById('TPC-H-22');
tpch22.onclick = function () {
  runQuery.innerText = 'Run TPC-H 22';
  queryInfo.innerText = 'Query Info (TPC-H 22)';
  queryImage.src = srcString + "22" + srcSuffix;
  var tableBody = document.getElementById('snippetTableBody');
  var totalSnippet = 0;
  tableBody.innerHTML = '';
  $.ajax({
    url: "/table",
    type: "GET",
    data: { "query": "22" },
    contentType: "application/json; charset=utf-8",
    success: function (resData) {
      console.log(resData)
      if (resData.basicSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Basic Snippet';
        cell2.innerHTML = resData.basicSnippet;
        totalSnippet = totalSnippet + resData.basicSnippet;
      }
      if (resData.aggregationSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Aggregation Snippet';
        cell2.innerHTML = resData.aggregationSnippet;
        totalSnippet = totalSnippet + resData.aggregationSnippet;
      }
      if (resData.joinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Join Snippet';
        cell2.innerHTML = resData.joinSnippet;
        totalSnippet = totalSnippet + resData.joinSnippet;
      }
      if (resData.subquerySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Subquery Snippet';
        cell2.innerHTML = resData.subquerySnippet;
        totalSnippet = totalSnippet + resData.subquerySnippet;
      }
      if (resData.dependencySnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Dependency Snippet';
        cell2.innerHTML = resData.dependencySnippet;
        totalSnippet = totalSnippet + resData.dependencySnippet;
      }
      if (resData.havingSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Having Snippet';
        cell2.innerHTML = resData.havingSnippet;
        totalSnippet = totalSnippet + resData.havingSnippet;
      }
      if (resData.leftOuterJoinSnippet > 0) {
        var row = tableBody.insertRow(tableBody.rows.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = 'Left Outer Join Snippet';
        cell2.innerHTML = resData.leftOuterJoinSnippet;
        totalSnippet = totalSnippet + resData.leftOuterJoinSnippet;
      }
      var totalSnippetCount = document.getElementById('totalSnippetCount');
      totalSnippetCount.innerHTML = totalSnippet;
    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
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

    },
    error: function () {
      alert("조회 처리 중 에러가 발생했습니다");
    }
  })
}

