// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var uncheck = "/static/img/checkCircle2.PNG";
var check = "/static/img/checkCircle.PNG";

var csdCheckBox = document.getElementById("csdCheckBox");
var ssdCheckBox = document.getElementById("ssdCheckBox");
var isCSDCheck = false;
var isSSDCheck = false;
var isTPCHCheck = [];
for (i = 0; i < 22; i++) {
  isTPCHCheck.push(false);
}

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