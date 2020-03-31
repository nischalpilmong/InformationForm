function validateForm(){
  for(var i = 0; i < infoForm.elements.length; i++){
    if(infoForm.elements[i].className == "req" && infoForm.elements[i].value.length == 0){
      alert('Please fill in all required fields');
      return false;
    }
  }
}
