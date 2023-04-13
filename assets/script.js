// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".btn").click(function() {
    console.log()
    var textexample = $(this).siblings('.description').val();
    localStorage.setItem($(this).closest('div').attr('id'), textexample);
    console.log(textexample);
  });



  currentTime = dayjs().hour();
  console.log(currentTime);
  
  for (var i = 9; i < 18; i++) {
    if (currentTime > i) {
      $("."+i).addClass("past").removeClass("future present");
    }
    else if (currentTime === i) {
      $("."+i).addClass("present").removeClass("past future");
    }
    else if (currentTime < i) {
      $("."+i).addClass("future").removeClass("past present");
    }  
  }

  for (var i = 9; i < 18; i++) {
    var oldtext = localStorage.getItem('hour-'+i+' '+i);
    $('.'+i).children('textarea').val(oldtext);
    }

    var now = dayjs();
  $('#currentDay').text(now.format("dddd, MMMM D"));
});