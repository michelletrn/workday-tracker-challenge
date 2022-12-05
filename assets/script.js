// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var dateTime = $('#currentDay');
var saveBtns = $('.saveBtn');//all of the save btns

var hoursContainer = $('.container-lg');//container that holds each hour's id
var hourBlock = $('.time-block'); //individual hour blocks
var hourToDo = $('.description'); //each hour block's text box
var past = $('.past');
var present = $('.present');
var future = $('.future');
var hourNum = $('.hour'); //same line as the time number

//each hour block's unique id, incase
var nine = $('#hour-9');
var ten = $('#hour-10');
var eleven = $('#hour-11');
var twelve = $('#hour-12');
var one = $('#hour-1');
var two = $('#hour-2');
var three = $('#hour-3');
var four = $('#hour-4');
var five = $('#hour-5');


var nowhr = dayjs().format('hA'); // just the current hr + AM, will be using this var to compare
// console.log(nowhr);
function dateTimeDisplay() {
  var now = dayjs().format("dddd, MMMM DD");
  dateTime.text(now);
  checkHour();
}

//why is 9 am not classing correctly, but if i change 9AM to 10AM, it applies correctly; also added an 8am and it was assigned the same class as 9am
function checkHour() {
  for(var i = 0; i < hourNum.length; i++) {
    if (nowhr === hourNum[i].innerHTML) {
      $(hourNum[i]).parent().addClass("present");
    }
    if (nowhr > hourNum[i].innerHTML) {
      $(hourNum[i]).parent().addClass("past");
    } 
    else if (nowhr < hourNum[i].innerHTML) {
      $(hourNum[i]).parent().addClass("future"); 
    }
    console.log(nowhr, hourNum[i].innerHTML);
    console.log(nowhr > hourNum[i].innerHTML);
  }
}






dateTimeDisplay();


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });
