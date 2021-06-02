function BMIcalCE() {
  var firstInputWeight = document.getElementById('user1').value;
  var secondInputHeight = document.getElementById('user2').value;
  var bmi = firstInputWeight / (secondInputHeight * secondInputHeight);
  document.getElementById('outvalue').value = Math.round(bmi);

  if (bmi < 18.5) {
    document.getElementById('cond1').value = "Eat more, you're too thin!"
  } else if (bmi > 18.5 && bmi <= 25) {
    document.getElementById('cond1').value = "Stay the same, you're normal."
  } else if (bmi > 25 && bmi <= 30) {
    document.getElementById('cond1').value = "Do exercise and diet, you're overweight!  "
  }else if (bmi > 30) {
    document.getElementById('cond1').value = "Do exercise twice and diet strictly, you're obese!"
  }else {
    alert("Enter valid amounts");
  }


}
