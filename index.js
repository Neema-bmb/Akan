 
 
function btnClick() {
  var Year = document.getElementById("Year").value;
  var MM = parseInt(document.getElementById("Month").value);
  var DD = parseInt(document.getElementById("Date").value);
  var CC = parseInt(Year.slice(0, 2));
  var YY = parseInt(Year.slice(2, 4));


  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var gender = document.getElementById("gender").value;
  
  var CalculateDate = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  CalculateDate = Math.floor(CalculateDate);
  if (MM < 1 || MM > 12) {
    alert("Invalid Month");
  }
  if (DD > 31 || DD < 1) {
    alert("Invalid Date");
  }


  if (gender === "male") {
    sex = male;
  }
  else {
    sex = female;
  }

  var output = sex[CalculateDate];
  /*document.getElementById("answer").innerHtml = "Your Akan name is"+output+".";*/
  alert(output);
}
