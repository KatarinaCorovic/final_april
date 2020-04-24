
//first name checker
function firstCheck() {
  var first = $('#first').val();

  if(first=='') {
    return 'Please input first name';
  }

  if(first.indexOf(' ') >= 0) {
    return 'Please remove any spaces from the input';
  }
}


//last name checker
function lastCheck() {
  var last = $('#last').val();

  if(last=='') {
    return 'Please input your last name';
  }

  if(last.indexOf(' ')>=0) {
    return 'Please remove any spaces from the input';
  }
}



//email checker
function emailCheck() {
  var email = $('#email').val();

  if(email=='') {
    return 'Please input your email address';
  }

  if(email.indexOf('@') == -1) { 
    return 'Wrong format. Please input the correct one'
  }
}

//age checker
function ageCheck() {
  var age = $('#age').val();

  if(age=='') {
    return 'Please input your age.'
  }

  if(isNaN(age) == true) {
    return 'Incorrect format. Please use numbers only.'
  }

  if(age < 18) {
    return 'You have to be at least 18 years old.'
  }
}




//telephone checker
function telephoneCheck() {
  var telephone = $('#telephone').val();

  if(telephone=='') {
    return 'Please input phone number.'
  }

  if(isNaN(telephone) == true) {
    return 'Invalid format. Please input numbers only.';
  }
}



//adress checker
function addressCheck() {
  var address = $('#address').val();

  if(address=='') {
    return 'Please input your adress';
  }
}




//--------------------------------------------------------------------------------------
//Logging error message and error box
function validate() {
  var error = '';

  //first name
  var firstName = firstCheck();
  if(firstName) {
    $('#first').next().next('p').text('*' + firstName).css('display','block');
    error = true;
  } else {
    $('#first').next().next('p').css('display','none');
    error = false;
  }

  //last name
  var lastName = lastCheck();
  if(lastName) {
    $('#last').next().next('p').text('*' + lastName).css('display','block');
    error = true;
  } else {
    $('#last').next().next('p').css('display','none');
    error = false;
  }




//email
  var theEmail = emailCheck();
  if(theEmail) {
    $('#email').next().next('p').text('*' + theEmail).css('display','block');
    error = true;
  } else {
    $('#email').next().next('p').css('display','none');
    error = false;
  }


  //age
  var theAge = ageCheck();
  if(theAge) {
    $('#age').next().next('p').text('*' + theAge).css('display','block');
    error = true;
  } else {
    console.log('sve ok')
    $('#age').next().next('p')
    .text('')
    // .css('display','none');
    error = false;
  }




  //telephone
  var thePhone = telephoneCheck();
  if(thePhone) {
    $('#telephone').next().next('p').text('*' + thePhone).css('display','block');
    error = true;
  } else {
    $('#telephone').next().next('p').css('display','none');
    error = false;
  }


var theAddress = addressCheck();
if(theAddress) {
  $('#address').next().next('p').text('*' + theAddress).css('display', 'block');
  error=true;
}else {
  $('#address').next().next('p').css('display','none');
  error=false;
}

  

  //show and hide the error message
  if(error == true) {
    $('form').next().next('#error').css('display', 'inline-block');
  } else {
    $('form').next().next('#error').css('display', 'none');
  }

  //show and hide textarea message
  // var messageReturn =  messageCheck();
}
 


// .....................................SLIDER....................................................
 

$(function(){

  var width = 720;
  var animationSpeed = 2000;
  var pause = 2000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  var interval;

  function startSlider(){
    interval = setInterval(function(){
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
        currentSlide++;
        if(currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider(){
    clearInterval(interval);
  }

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

  startSlider();
});

 /*----------------------------API-----------------------------------*/


function broj(cifra){

  $.ajax("https://api.covid19api.com/summary?")
.done(function(response) {


  var srbijaNovi = response.Countries[197]['NewRecovered'];

  if(cifra == 1) {
    $('#info').text(response.Global.TotalConfirmed);
  } else if (cifra == 2){
    $('#info').text(response.Global.TotalDeaths);
  } else if (cifra == 3){
    $('#info').text(response.srbijaNovi)
  } 



  console.log(response.Countries[210]["NewRecovered"]);
  
})
}
