//Copied and Modified from code at: https://github.com/carolinebarriere/carolinebarriere.github.io/blob/master/SEG3125-Module5-ValidatedService/scripts/service.js 
var dates = [
    {
        name: "Sally",
        ddates: [0, 1, 2, 6]
    },
    {
        name: "Ally",
        ddates: [0, 3, 6]
    },
    {
        name: "Ann",
        ddates: [0, 5, 6]
    },
    {
        name: "Frank",
        ddates: [0, 2, 4, 6]
    }
]

// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions 
// https://flaviocopes.com/javascript-regular-expressions/ 
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers 
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    //var filter = /^(\([-+]?[0-9]+)\)$/;
    var filter = /\(\d{3}\) \d{3}\-\d{4}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCredit(txtCredit) {
    var a = document.getElementById(txtCredit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /\d{4} \d{4} \d{4} \d{4}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/ 
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    var disableDates = []
    //Sally is chosen
    if (document.getElementById("sally").checked) {
        disableDates = dates[0].ddates;

    //Ally is chosen
    } else if (document.getElementById("ally").checked) {
        disableDates = dates[1].ddates;

    //Ann is chosen
    } else if (document.getElementById("ann").checked) {
        disableDates = dates[2].ddates;

    //Frank is chosen
    } else {
        disableDates = dates[3].ddates;
    }

    for (let d = 0; d < disableDates.length; d++) {
        if (date.getDay() == disableDates[d]) {
            return [false];
        }
    }

    return [true];
    // Sunday is Day 0, disable all Sundays
    /*if (date.getDay() == 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]*/

}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Phone number must be of the format: (XXX) XXX-XXXX");
            //$("#phone").val("");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    //validate credit card
    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Credit card number must be of the format: XXXX XXXX XXXX XXXX");
            //$("#phone").val("");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery 
    // You can try different themes (the names are under the calendars) / This is Excite Bike 
    // To use a different theme you must include its css in your HTML file. 
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/ 
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/ 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put 
    /*$(".form-control").on("mouseenter", function(){
        $(".form-control").addClass("showInput");
    });

    $(".form-control").on("mouseleave", function(){
        $(".form-control").removeClass("showInput");
    });*/
  
    // https://jqueryui.com/tooltip/ 
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
    $("#time").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
    $("#appointment-expert").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });
    $("#appointment-service").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
      });


});