
// valid username(login)
var uname=document.getElementById('loginUname');
uname.addEventListener('keyup', checkunamevalidity);

function checkunamevalidity(){
  var unameval=uname.value;
  var validformat = /^[D][F]-[0-9]{3}[a-zA-Z]{3,}$/;

  if(validformat.test(unameval)){
      uname.classList.add('is-valid');
      uname.classList.remove('is-invalid');
      
  }
  else{
      uname.classList.add('is-invalid');
      uname.classList.remove('is-valid');
  }
}


// valid password(login)
var password=document.getElementById('loginPass');
password.addEventListener('keyup', checkpasswordvalidity);

function checkpasswordvalidity(e){
  var passval=password.value;
  

  var checkLen = /^.{6,}$/;
  var checkCapital = /[A-Z]+/;
  var checkSmall = /[a-z]+/;
  var checkDigit = /[0-9]+/;
  //var checkSpecial = /^.*[^A-Za-z\d].*$/;
  var checkSpecial = /[^A-Za-z\d]+/;


  if(checkLen.test(passval) && checkCapital.test(passval) && checkSmall.test(passval) && checkDigit.test(passval) && checkSpecial.test(passval)){
      password.classList.remove('is-invalid');
      password.classList.add('is-valid');
      
  }
  else{
      password.classList.add('is-invalid');
      password.classList.remove('is-valid');
  }

}


// valid username(register)
var regUname=document.getElementById('registerUname');
regUname.addEventListener('keyup', checkRegUname);

function checkRegUname(){
  var regUnameval=regUname.value;
  var validformat = /^[D][F]-[0-9]{3}[a-zA-Z]{3,}$/;

  if(validformat.test(regUnameval)){
    regUname.classList.add('is-valid');
    regUname.classList.remove('is-invalid');
      
  }
  else{
    regUname.classList.add('is-invalid');
    regUname.classList.remove('is-valid');
  }
}


