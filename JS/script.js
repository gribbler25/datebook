var timeId = $(this).siblings(".hour").text();
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
    var timeId = $(this).siblings(".hour").text().trim();   // push properties of tasks to the object 
    console.log(timeId);

    var textId = $(this).siblings(".row").val();
    console.log(textId);

    localStorage.setItem(timeId, textId);

    // tasks = {
    //     timeId: timeId,
    //     textId: textId
    // };
    // arr.push({ tasks });
    // console.log(arr);
});


var loadPage = function () {
    var textGet = localStorage.getItem("8AM");
    console.log(textGet);

    $(".row").val(localStorage.getItem("8AM"));//maybe set data to = index values in for loop and get correct time slots to display the text that way?
    checkStatus();
};



var checkStatus = function () {
    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time").each(function () {
        var time = ($(this).attr("id"));
        console.log(time);
        if (time == currentTime) { //this?? matches one id to the curerent time and turns all the .time class elements to present class
            $(".time").addClass("present")
        }
        else if (time > currentTime) {
            $(".time").addClass("future")
        }

    })
};
var interval = (60000 * 30);
console.log(interval);
setInterval(checkStatus, interval);

loadPage();