// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){

  $('form').on('submit', function(){
      
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/survey',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          $("#submit_button").css("background-color", "#a11a02");
          $("#submit_button").prop("disabled", "true");
          $("#submit_button").text("Thank you!");
          console.log("done");
        }
      });
      return false;
  });
});