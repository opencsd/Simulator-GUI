var startTimeSelector = document.getElementById('startTime');
var endTimeSelector = document.getElementById('endTime');
var graphMakeBtn = document.getElementById('graphMake');
var querySelectBox = document.getElementById('graphQuery');
var metricGraph = document.getElementById("metricGraph");
var ctx = pieChart.getContext('2d');
var myMetricChart = new Chart(ctx,{});

var uncheck = "/static/img/checkCircle2.PNG";
var check = "/static/img/checkCircle.PNG";

var csdCheckBox = document.getElementById("csdCheckBox");
var ssdCheckBox = document.getElementById("ssdCheckBox");
var isCSDCheck = false;
var isSSDCheck = false;

csdCheckBox.onclick = function () {
  console.log(isCSDCheck);
  var csdImage = document.getElementById("isCsdCheck");
  if (isCSDCheck) {
    csdImage.src = uncheck;
    isCSDCheck = false;
  } else {
    csdImage.src = check;
    isCSDCheck = true;
  }
}

ssdCheckBox.onclick = function () {
  console.log(isSSDCheck);
  var ssdImage = document.getElementById("isSsdCheck");
  if (isSSDCheck) {
    ssdImage.src = uncheck;
    isSSDCheck = false;
  } else {
    ssdImage.src = check;
    isSSDCheck = true;
  }
}


graphMakeBtn.onclick = function(){
    var startTime = startTimeSelector.value;
    var endTime = endTimeSelector.value;
    console.log(isCSDCheck);
            console.log(isSSDCheck);
    myMetricChart.destroy();
    var ctx = document.getElementById("metricGraph").getContext('2d');
    $.ajax({
        url: "/metricGraph",
        type: "GET",
        data: { "startTime": startTime,"endTime": endTime},
        contentType: "application/json; charset=utf-8",
        success: function (resData) {
            var labelSet = resData.label;
            var dataSet = [
                {
                    label: "CSD-CPU",
                    hoverBackgroundColor: "#be2617",
                    borderColor: "#e74a3b",
                    data: resData.csd.cpu,
                    pointRadius: 0,
                    pointBackgroundColor: "#e74a3b",
                    pointBorderColor: "#e74a3b",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "#e74a3b",
                    pointHoverBorderColor: "#e74a3b",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                },
                {
                    label: "CSD-Memory",
                    hoverBackgroundColor: "#13855c",
                    borderColor: "#1cc88a",
                    data: resData.csd.memory,
                    pointRadius: 0,
                    pointBackgroundColor: "#1cc88a",
                    pointBorderColor: "#1cc88a",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "#1cc88a",
                    pointHoverBorderColor: "#1cc88a",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                },
                {
                    label: "CSD-NetrowkTotal",
                    // backgroundColor: "#4e73df",
                    hoverBackgroundColor: "#224abe",
                    borderColor: "#4e73df",
                    data: resData.csd.network,
                    pointRadius: 0,
                    pointBackgroundColor: "#4e73df",
                    pointBorderColor: "#4e73df",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "#4e73df",
                    pointHoverBorderColor: "#4e73df",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                },
                {
                    label: "SSD-CPU",
                    // backgroundColor: "#f6c23e",
                    hoverBackgroundColor: "#dda20a",
                    borderColor: "#f6c23e",
                    data: resData.ssd.cpu,
                    pointRadius: 0,
                    pointBackgroundColor: "#f6c23e",
                    pointBorderColor: "#f6c23e",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "#f6c23e",
                    pointHoverBorderColor: "#f6c23e",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                },
                {
                    label: "SSD-Memory",
                    // backgroundColor: "#858796",
                    hoverBackgroundColor: "#60616f",
                    borderColor: "#858796",
                    data: resData.ssd.memory,
                    pointRadius: 0,
                    pointBackgroundColor: "#858796",
                    pointBorderColor: "#858796",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "#858796",
                    pointHoverBorderColor: "#858796",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                },
                {
                    label: "SSD-NetrowkTotal",
                    // backgroundColor: "#36b9cc",
                    hoverBackgroundColor: "#258391",
                    borderColor: "#36b9cc",
                    data: resData.ssd.network,
                    pointRadius: 0,
                    pointBackgroundColor: "#36b9cc",
                    pointBorderColor: "#36b9cc",
                    pointHoverRadius: 3,
                    pointHoverBackgroundColor: "#36b9cc",
                    pointHoverBorderColor: "#36b9cc",
                    pointHitRadius: 10,
                    pointBorderWidth: 2,
                },
            ];
            console.log(labelSet);
            console.log(dataSet);

            
            if(isCSDCheck){
                if(isSSDCheck){

                }else{
                    dataSet = dataSet.slice(0,3);
                }
            }else{
                if(isSSDCheck){
                    dataSet = dataSet.slice(3,6);
                }else{
                    labelSet = [];
                    dataSet = [];
                }
            }
            
            myMetricChart = new Chart(ctx,{
                type: 'line',
                data:{
                    labels: labelSet,
                    datasets: dataSet,
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
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                          time: {
                            unit: 'hour'
                          },
                          gridLines: {
                            display: false,
                            drawBorder: false
                          }
                        }],
                        yAxes: [{
                          ticks: {
                            maxTicksLimit: 5,
                            padding: 10,
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
                }
            })
            
        },
        error: function () {
            alert("조회 처리 중 에러가 발생했습니다");
        }
    })



    


}
