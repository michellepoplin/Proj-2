// JS TO GRAB FORM VALUES AND SEND TO API ROUTES
// WAIT FOR HTML LOAD BEFORE PERFORMING ANY JS
$(document).ready(function() {
  // WHEN THE SUBMIT BUTTON IS CLICKED RUN createNewRace FUNCTION
  
  $(document).on('click', '.submit', createNewRace);

  function createNewRace(event) {
    event.preventDefault();
    // console.log(`you clicked submit`)
    var newRace = {
      firstName: $('#firstName').val().trim(),
      lastName: $('#lastName').val().trim(),
      raceName: $('#raceName').val().trim(),
      category: $('#category').val().trim(),
      street: $('#street').val().trim(),
      city: $('#city').val().trim(),
      state: $('#state').val(),
      zip: $('#zip').val().trim(),
      phoneNumber: $('#phoneNumber').val().trim(),
      email: $('#email').val().trim(),
      url: $('#url').val().trim(),
      raceLength: $('#raceLength').val().trim(),
      description: $('#description').val().trim(),
      participantCap: $('#participantCap').val().trim(),
      date: $('#date').val().trim()
    };

    // SEND THE NEW RACE INFO TO THE POST ROUTE
    $.post('/api/races/', newRace, function (data) {
        // console.log(`back in main.js`)
        // console.log(data)

    });

    // CLEAR ALL INPUT FIELDS AFTER SUBMISSION
    $('#firstName').val('')
    $('#lastName').val('')
    $('#raceName').val('')
    $('#street').val('')
    $('#city').val('')
    $('#state').val('')
    $('#zip').val('')
    $('#phoneNumber').val('')
    $('#email').val('')
    $('#url').val('')
    $('#raceLength').val('')
    $('#description').val('')
    $('#participantCap').val('')
    $('#date').val('')
  }

  //  TEMPUS DOMINUS JAVASCRIPT FUNCTION
  $(function () {
    $('#datetimepicker4').datetimepicker({
      format: 'L'
    });
  });

  //  CAROUSEL FUNCTION 
  var slideIndex = 0;
  carousel();
  function carousel() {
    var i;
    var x = document.getElementsByClassName("sportslide");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 secondsf
  }

  // TOGGLE FUNCTION TO SHOW/HIDE FORM
  $(function() {
    $('#category').change(function(){
        if ($(this).val() == "run" || $(this).val() == "bike" ||$(this).val() == "obstacle") {
            $('#show-form').show();
        } else {
            $('#show-form').hide();
        }
    });
  });
})
