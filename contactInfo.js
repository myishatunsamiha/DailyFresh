
// valid First name 
var firstName=document.getElementById('validFname');
firstName.addEventListener('keyup', checkfirstname);
 
function checkfirstname(e){
  var firstnameval = firstName.value;
  var validformat = /^[A-Z][A-Za-z]{1,}$/;
 
  if(validformat.test(firstnameval)){
    firstName.classList.add('is-valid');
    firstName.classList.remove('is-invalid');
          
  }else{
    firstName.classList.add('is-invalid');
    firstName.classList.remove('is-valid');
  }
}



// valid Last name 
var lastName=document.getElementById('validLname');
lastName.addEventListener('keyup', checklastname);
 
function checklastname(e){
  var lastnameval = lastName.value;
  var validformat = /^[A-Z][A-Za-z]{1,}$/;
 
  if(validformat.test(lastnameval)){
    lastName.classList.add('is-valid');
    lastName.classList.remove('is-invalid');
          
  }else{
    lastName.classList.add('is-invalid');
    lastName.classList.remove('is-valid');
  }
}


// valid Phone number
var tel=document.getElementById('validTel');
tel.addEventListener('keyup', checkPhone);
 
function checkPhone(e){
  var telval = tel.value;
  var validformat = /^\+8801[69578][0-9]{8}$/;
 
  if(validformat.test(telval)){
    tel.classList.add('is-valid');
    tel.classList.remove('is-invalid');
          
  }else{
    tel.classList.add('is-invalid');
    tel.classList.remove('is-valid');
  }
}



// valid Road
var roadNo=document.getElementById('validRoad');
roadNo.addEventListener('keyup', checkRoad);
 
function checkRoad(e){
  var roadNoval = roadNo.value;
  var validformat = /^[0-9]{1,4}$/;
 
  if(validformat.test(roadNoval)){
    roadNo.classList.add('is-valid');
    roadNo.classList.remove('is-invalid');
          
  }else{
    roadNo.classList.add('is-invalid');
    roadNo.classList.remove('is-valid');
  }
}


// valid House
var houseNo=document.getElementById('validHouse');
houseNo.addEventListener('keyup', checkHouse);
 
function checkHouse(e){
  var houseNoval = houseNo.value;
  var validformat = /^[0-9]{1,4}$/;
 
  if(validformat.test(houseNoval)){
    houseNo.classList.add('is-valid');
    houseNo.classList.remove('is-invalid');
          
  }else{
    houseNo.classList.add('is-invalid');
    houseNo.classList.remove('is-valid');
  }
}



// valid password(registration)
var regPassword=document.getElementById('registerPass');
regPassword.addEventListener('keyup', checkpasswordvalidity);

function checkpasswordvalidity(e){
    var regPassval=regPassword.value;
    

    var checkLen = /^.{6,}$/;
    var checkCapital = /[A-Z]+/;
    var checkSmall = /[a-z]+/;
    var checkDigit = /[0-9]+/;
    //var checkSpecial = /^.*[^A-Za-z\d].*$/;
    var checkSpecial = /[^A-Za-z\d]+/;


    if(checkLen.test(regPassval) && checkCapital.test(regPassval) && checkSmall.test(regPassval) && checkDigit.test(regPassval) && checkSpecial.test(regPassval)){
      regPassword.classList.remove('is-invalid');
      regPassword.classList.add('is-valid');
        
    }
    else{
      regPassword.classList.add('is-invalid');
      regPassword.classList.remove('is-valid');
    }

}


// valid confirm password(registration)
var regConfPassword=document.getElementById('registerConfirmPass');
regConfPassword.addEventListener('keyup', checkConfpasswordvalidity);

function checkConfpasswordvalidity(e){
    var regConfPasswordval = regConfPassword.value;
    var regPasswordval = regPassword.value;
    console.log('pass: ', regPasswordval);
    console.log('conf pass: ', regConfPasswordval);

    var checkLen = /^.{6,}$/;
    var checkCapital = /[A-Z]+/;
    var checkSmall = /[a-z]+/;
    var checkDigit = /[0-9]+/;
    var checkSpecial = /[^A-Za-z\d]+/;

    if((regConfPasswordval == regPasswordval) && checkLen.test(regConfPasswordval) && checkCapital.test(regConfPasswordval) && checkSmall.test(regConfPasswordval) && checkDigit.test(regConfPasswordval) && checkSpecial.test(regConfPasswordval)){

      regConfPassword.classList.remove('is-invalid');
      regConfPassword.classList.add('is-valid');
        
    }
    else{
      regConfPassword.classList.add('is-invalid');
      regConfPassword.classList.remove('is-valid');
    }

}