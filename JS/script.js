function loadDate() {
  var today = moment().format("ddd MMM DD YYYY");
  var date = document.querySelector("#currentDay");
  date.textContent = today;
}
loadDate();

$(".saveBtn").on("click", function () {
  // grabbing the data-id attribute value here
  var dataID = $(this).siblings(".hour").children(".time").data("id");
  var textId = $(this).siblings(".row").val();

  // save to local storage
  localStorage.setItem(dataID, textId);
});

var loadPage = function () {
  // create empty array to store the local storage keys
  var storageArr = [];

  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);

    storageArr.push(key);
  }
  // create an array of all the  p elements with .time
  var times = Array.from(document.querySelectorAll(".time"));
  console.log(times);

  // nested forEach loop
  storageArr.forEach(function (element) {
    //so, for each element in the local storage array, we get the value text
    var valueText = localStorage.getItem(element);

    //for each times array element, we  check to see if the data-id attribute is equal to the what we have in local storage key
    // if it's equal, then we  update the innerhtml
    times.forEach(function (time) {
      if (time.dataset.id == element) {
        var parent = time.parentElement;

        var parentSib = parent.nextElementSibling;
        parentSib.innerHTML = valueText;
      }
    });
  });
};

var checkStatus = function () {
  var currentTime = moment().hour();
  console.log(currentTime);
  $(".time").each(function () {
    var time = $(this).attr("data-id");
    console.log(time);
    // if (time == currentTime)
    if (parseInt(time) > currentTime) {
      $(".time").addClass("future");
    } else if (parseInt(time) == currentTime) {
      $(".time").addClass("present");
    }
  });
};

var interval = 60000 * 30;
console.log(interval);
setInterval(checkStatus, interval);

window.addEventListener("load", loadPage);

// var arr = [];

// function loadDate() {
//   var today = moment().format("ddd MMM DD YYYY");
//   var date = document.querySelector("#currentDay");
//   date.textContent = today;
// }
// loadDate();

// $(".saveBtn").on("click", function () {
//   // save to local storage AND dynamically
//   var timeId = $(this).siblings(".hour").text().trim();
//   console.log(timeId);
//   arr.push(timeId);
//   console.log(arr);

//   var textId = $(this).siblings(".row").val();
//   console.log(textId);

//   localStorage.setItem(timeId, textId);
// });

// var loadPage = function () {
//   for (var i = 0; i < arr.length; i++) {
//     var textGet = localStorage.getItem(arr[i]);
//     console.log(textGet);
//     $(".description[data-id='arr[i]']").val(textGet); //maybe set data to = index values in for loop and get correct time slots to display the text that way?
//     checkStatus();
//   }
// };

// // var loadPage = function () {
// //   console.log("hi");
// // };
// // var loadPage = function () {
// //   var textGet = localStorage.getItem("8AM");
// //   console.log(textGet);
// //   $(".row").val(localStorage.getItem("8AM")); //maybe set data to = index values in for loop and get correct time slots to display the text that way?
// //   checkStatus();
// // };

// var checkStatus = function () {
//   var currentTime = moment().hour();
//   console.log(currentTime);
//   $(".time").each(function () {
//     var time = $(this).attr("data-id");
//     console.log(time);
//     // if (time == currentTime)
//     if (parseInt(time) > currentTime) {
//       $(".time").addClass("future");
//     } else if (parseInt(time) == currentTime) {
//       $(".time").addClass("present");
//     }
//   });
// };

// var interval = 60000 * 30;
// console.log(interval);
// setInterval(checkStatus, interval);

// window.addEventListener("load", loadPage);
