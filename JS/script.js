//object with "time: textarea value " property/value pairs that are stored here upon clicking save btn
var tasks = {};

function loadDate() {
    var today = moment().format("ddd MMM DD YYYY");
    var date = document.querySelector("#currentDay");
    date.textContent = (today);
};

loadDate();

var saveTask = function () {
    //value of the text area pushed to unique time property value(from the data-time attr) in tasks object..
    //then whole object pushed to tasks in local storage.
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//EVENT LISTENER... on click, then run saveTask();

//setInterval().. run every 30 mins--60000*30 ms--- a function comparing(diff??) the current time to each time block value and adding Class of 
//present or future if it applies( past time class is default)