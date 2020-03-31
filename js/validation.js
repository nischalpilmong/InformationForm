function validateForm(){
   for(var i = 0; i < infoForm.elements.length; i++){
     if(infoForm.elements[i].className == 'req' && infoForm.elements[i].value.length == 0){
       alert('Please fill in all required fields');
       return false;
     }
   }
   var email = document.getElementById('email').value;
   var atpos = email.indexOf('@');
   var dotpos = email.lastIndexOf('.');
   if(atpos < 1 || dotpos < atpos + 2 || dotpos+2 >= x.length){
     alert('Please type a valid email address');
     return false;
   }
}
