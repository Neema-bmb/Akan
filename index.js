 
var Year, MM, mmm, ddd, YY, DD, CC, date, newDate, male, female, gender, CalculateDate, sex, newDate, output;

 function checking(){
  if (Year <1){
    alert("Invalid Year");
  }else if (mmm == "") {
    alert("Invalid Month");
  }else  if (ddd=="") {
    alert("Invalid Date");
  }
  
 }
function btnClick() {
  Year = document.getElementById("Year").value;
  MM = parseInt(document.getElementById("Month").value);
  mmm = document.getElementById("Month").value;
  ddd = document.getElementById("Date").value;
  DD = parseInt(document.getElementById("Date").value);
  CC = parseInt(Year.slice(0, 2));
  YY = parseInt(Year.slice(2, 4));

  date=[Year,MM,DD];
  newDate=date.join("/");
  

  male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  weekdays=[""];
  gender = document.getElementById("gender").value;
  
  CalculateDate = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  CalculateDate = Math.floor(CalculateDate);
  if (MM < 1 || MM > 12) {
    alert("Invalid Month");
  }
   if (DD > 31 || DD < 1) {
    alert("Invalid Date");
  }
  checking();

  if (gender === "male") {
    sex = male;
  }
  else {
    sex = female;
  }

  output = sex[CalculateDate];
  alert("Congratulations you were born on" +" "+newDate +" "+"and your Akan name is" +" "+output);
}
