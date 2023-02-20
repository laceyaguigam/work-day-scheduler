
// open planner, current day is shown at the top of the calendar 

// when you scroll down, time blocks for standard business hours is shown 

// each time block is color-coded for pasat, present, future 

// when time block clicked, then you can enter an event 

// when save button clicked for the time block, text is saved to local storage 

// when page refreshed saved events are still there 



for(i=9; i<=17; i++){
    $('#'+i).prev().val(localStorage.getItem(i));

    var currentHour = moment().format('HH')
    if(i < parseInt(currentHour) ) {
        $('#'+i).prev().attr("class", "col-10 past")
    }else if (i == parseInt(currentHour)) {
        $('#'+i).prev().attr("class", "col-10 present")
    }else {
        $('#'+i).prev().attr("class", "col-10 future")
    }
}

function saveInformation() {
    var valueToSave = $(this).prev().val();
    var contextOfWhenItIsSavedTo = $(this).attr("id");

    localStorage.setItem(contextOfWhenItIsSavedTo, valueToSave)
}

$(document).on("click", "button", saveInformation)
