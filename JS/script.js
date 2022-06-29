var time = "";
var toDo = "";

// var tasks = {};
arr = [];
// tasks.time = time;
// tasks.toDo = toDo;
// arr.push({ tasks });

console.log(arr);


function loadDate() {
    var today = moment().format("ddd MMM DD YYYY");
    var date = document.querySelector("#currentDay");
    date.textContent = (today);
};
loadDate();


$(".saveBtn").on("click", function () {   // save to local storage AND dynamically
    var timeId = $(this).siblings(".hour").text();   // push properties of tasks to the object 
    console.log(timeId);

    var textId = $(this).siblings(".row").val();
    console.log(textId);

    localStorage.setItem(timeId, JSON.stringify(textId));

    tasks = {
        timeId: timeId,
        textId: textId
    };
    arr.push({ tasks });
    console.log(arr);
});


var loadPage = function () { //can't get the item value from local storage despite correct syntax
    var textGet = localStorage.getItem("8AM");
    console.log(textGet);
    var text8 = JSON.parse(textGet);
    console.log(text8);
    $(".eight").val(text8);
};


setInterval(checkStatus, 60000 * 30);

var checkStatus = function () {
    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time").each(function () {
        var time = parseInt($(this).attr("id"));
        console.log(time);
        if (time = currentTime) { //this?? matches one id to the curerent time and turns all the .time class elements to present class
            $(".time").addClass("present")
        }
        else {
            $(".time").addClass("future")
        }

    })
};
checkStatus();

loadPage();