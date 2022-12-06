var runQueryBtn = document.getElementById("submitQuery");
var runQueryTxt = document.getElementById("submitText");
var ssdLoadingBar = document.getElementById("ssdLoadingBar");
var csdLoadingBar = document.getElementById("csdLoadingBar");
var csdBetter = document.getElementById('csdBetter');
var csdWorse = document.getElementById('csdWorse');
var ssdBetter = document.getElementById('ssdBetter');
var ssdWorse = document.getElementById('ssdWorse');
var csdWarningText = document.getElementById('csdWarningText');
var ssdWarningText = document.getElementById('ssdWarningText');
var csdTable = document.getElementById("csdResultTable");
var ssdTable = document.getElementById("ssdResultTable");

runQueryBtn.onclick = function () {
    csdTable.innerHTML = '';
    ssdTable.innerHTML = '';
    csdBetter.style.display = 'none';
    csdWorse.style.display = 'none';
    ssdBetter.style.display = 'none';
    ssdWorse.style.display = 'none';
    var queryName = runQueryTxt.innerText;
    if (queryName.substring(9, queryName.length) == "ery") {
        return
    } else {
        var queryNumber = "";
        if (queryName.length == 11) {
            queryNumber = "0" + queryName.substring(10, queryName.length);
        } else if ((queryName.length == 12)) {
            queryNumber = queryName.substring(10, queryName.length);
        }
        ssdLoadingBar.style.display = "block";
        csdLoadingBar.style.display = "block";
        csdWarningText.style.display = "none";
        ssdWarningText.style.display = "none";
        $.ajax({
            url: "/runquery",
            type: "GET",
            data: { "query": queryNumber },
            contentType: "application/json; charset=utf-8",
            success: function (resData) {
                console.log(resData)
                var csdCPU = resData.csd.cpu;
                var csdMemory = resData.csd.memory;
                var csdNetworkRx = resData.csd.networkRx;
                var csdNetworkTx = resData.csd.networkTx;
                var csdTime = resData.csd.taskcount;

                var row = csdTable.insertRow(csdTable.rows.length);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = 'CPU Usage';
                cell2.innerHTML = csdCPU;
                var row1 = csdTable.insertRow(csdTable.rows.length);
                var cell3 = row1.insertCell(0);
                var cell4 = row1.insertCell(1);
                cell3.innerHTML = 'Memory Usage Byte';
                cell4.innerHTML = csdMemory;
                var row2 = csdTable.insertRow(csdTable.rows.length);
                var cell5 = row2.insertCell(0);
                var cell6 = row2.insertCell(1);
                cell5.innerHTML = 'Network Rx Byte';
                cell6.innerHTML = csdNetworkRx;
                var row3 = csdTable.insertRow(csdTable.rows.length);
                var cell7 = row3.insertCell(0);
                var cell8 = row3.insertCell(1);
                cell7.innerHTML = 'Network Tx Byte';
                cell8.innerHTML = csdNetworkTx;
                var row4 = csdTable.insertRow(csdTable.rows.length);
                var cell9 = row4.insertCell(0);
                var cell10 = row4.insertCell(1);
                cell9.innerHTML = 'Time';
                cell10.innerHTML = csdTime;



                var ssdCPU = resData.ssd.cpu;
                var ssdMemory = resData.ssd.memory;
                var sdNetworkRx = resData.ssd.networkRx;
                var ssdNetworkTx = resData.ssd.networkTx;
                var ssdTime = resData.ssd.taskcount;


                var row = ssdTable.insertRow(ssdTable.rows.length);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                cell1.innerHTML = 'CPU Usage';
                cell2.innerHTML = ssdCPU;
                var row1 = ssdTable.insertRow(ssdTable.rows.length);
                var cell3 = row1.insertCell(0);
                var cell4 = row1.insertCell(1);
                cell3.innerHTML = 'Memory Usage Byte';
                cell4.innerHTML = ssdMemory;
                var row2 = ssdTable.insertRow(ssdTable.rows.length);
                var cell5 = row2.insertCell(0);
                var cell6 = row2.insertCell(1);
                cell5.innerHTML = 'Network Rx Byte';
                cell6.innerHTML = sdNetworkRx;
                var row3 = ssdTable.insertRow(ssdTable.rows.length);
                var cell7 = row3.insertCell(0);
                var cell8 = row3.insertCell(1);
                cell7.innerHTML = 'Network Tx Byte';
                cell8.innerHTML = ssdNetworkTx;
                var row4 = ssdTable.insertRow(ssdTable.rows.length);
                var cell9 = row4.insertCell(0);
                var cell10 = row4.insertCell(1);
                cell9.innerHTML = 'Time';
                cell10.innerHTML = ssdTime;

                ssdLoadingBar.style.display = "none";
                csdLoadingBar.style.display = "none";
                csdWarningText.style.display = "none";
                ssdWarningText.style.display = "none";

                var ssdPoint = (ssdCPU * 100) + (ssdMemory / (1024 * 1024 * 1024)) + ((ssdNetworkTx + ssdNetworkTx) / (1024 * 1024 * 1024)) + (ssdTime * 1000);
                var csdPoint = (csdCPU * 100) + (csdMemory / (1024 * 1024 * 1024)) + ((csdNetworkTx + csdNetworkTx) / (1024 * 1024 * 1024)) + (csdTime * 1000);
                console.log("SSD Point", ssdPoint)
                console.log("CSD Point", csdPoint)
                if (ssdPoint < csdPoint) {
                    ssdBetter.style.display = "block";
                    csdWorse.style.display = "block";
                } else {
                    csdBetter.style.display = "block";
                    ssdWorse.style.display = "block";
                }
            },
            error: function () {
                alert("조회 처리 중 에러가 발생했습니다");
            }
        })
    }

}