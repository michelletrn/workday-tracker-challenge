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

$(function () { //wraps the entire code in a call to jQuery to ensure that this is read after the the elements of the html page is rendered
  var dateTime = $('#currentDay');
  var saveBtns = $('.saveBtn');//all of the save btns

  var hoursContainer = $('.container-lg');//container that holds each hour's id
  var timeBlock = $('.time-block'); //each time block


  var nowhr = parseInt(dayjs().format('H')); // just the current hr conv to integer
  // console.log(nowhr);
  function dateTimeDisplay() {
    var now = dayjs().format("dddd, MMMM DD");
    dateTime.text(now);
    checkHour();
  };

  function checkHour() {
    //timeBlock is the array that holds all of the time blocks, .each tells the function to iterate through each item
    // in the array.
    $(timeBlock).each(function () {
      if (nowhr == (this.id.split("hour-")[1])) { //"this" is referring to the time block in the container, 
        //.id is an attribute of timeBlock that will pull just the id of each time block, then we can split the "hour-" 
        //from the id, to turn it into an integer allowing nowhr to be compared to the individual 
        //hour ids. split helps us get rid of "hour-" but returns an array, which is why we need to specify the index 
        //of 1 bc that is where the number is held.
        $(this).addClass("present")//if the condition is true, then the appropriate class is added to "this" time block
      }
      if (nowhr < (this.id.split("hour-")[1])) {
        $(this).addClass("future")
      }
      if (nowhr > (this.id.split("hour-")[1])) {
        $(this).addClass("past")
      } //console.log((nowhr), parseInt(this.id.split("hour-")[1])); logs current hour as an integer and the hour id as an integer
    }) 
  }; 

  //load stuff in fr local storage
  function savedToDos () {
    $(timeBlock).each(function() {
      //individual description box text is pulled from the local storage of this timeBlock's id
      //I'd previously made a var hourToDo = $('.description'), but when I used the var name in the line below, it displayed the hour todo text twice and removed the hour... why?
      $(this).children('.description').text(localStorage.getItem($(this).attr('id')));
      console.log(localStorage.getItem($(this).attr('id')));
      console.log($(this).children('.description'));
    })
  }

  $(saveBtns).on('click', function () {
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, description);
  });

  dateTimeDisplay();
  savedToDos();
});


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

