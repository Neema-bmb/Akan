var century, year, month, dayOfMonth, day;

  function getInput(){
    century=parseInt(document.getElementById("century")).value;
    year=parseInt(Document.getElementId("year")).value;
    month=parseInt(Document.getElementId("month")).value;
    day=parseInt(Document.getElementId("monthday")).value;
   
   
    if(century ==""){
    alert("Invalid gender");
    return false;
   }
   if(year ==""){
    alert("Invalid gender");
    return false;
   }
   if(month ==""){
    alert("Invalid gender");
    return false;
   }
   if(dayOfMonth ==""){
    alert("Invalid gender");//test this
    return false;
   }
}
  function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth)% 7)-1;
    console.log(dayOfWeek);
    return(Math.floor(dayOfWeek));
    if(dayOfWeek < 0){
       dayOfWeek = dayOfWeek*-1;
    }
    else if(dayOfWeek > 0){
        return dayOfWeek;
    }
}

  function checkDayOfWeek(){
    day = calculateDay();
      checkGender();
      console.log("The function runs");
   }

let dayOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw","Kofi","Kwame"];

  function checkGender(){
    var gen= document.getElementsByName("rads");
    if(gen[0].checked ==true){
     var gender="male";
    }else if(gen[1].checked ==true){
     var gender="female";
    }else{
     console.log("pass");
    }
        switch(gender){
            case gender ="male":
                switch(day){
                 case(0||-0):
                   documents.getElementsById("results").innerHTML ="The day is on sunday."+""+"Your akan name is"+maleNames[0];
                 break;
                 case(1||-1):
                   documents.getElementsById("results").innerHTML ="The day is on monday."+""+"Your akan name is"+maleNames[1];
                 break;
                 case(2||-2):
                   documents.getElementsById("results").innerHTML ="The day is on tuesday."+""+"Your akan name is"+maleNames[2];
                 break;
                 case(3||-3):
                   documents.getElementsById("results").innerHTML ="The day is on wednesday."+""+"Your akan name is"+maleNames[3];
                 break;
                 case(4||-4):
                   documents.getElementsById("results").innerHTML ="The day is on thursday."+""+"Your akan name is"+maleNames[4];
                 break;
                 case(5||-5):
                   documents.getElementsById("results").innerHTML ="The day is on friday."+""+"Your akan name is"+maleNames[5];
                 break;
                 case(6||-6):
                   documents.getElementsById("results").innerHTML ="The day is on saturday."+""+"Your akan name is"+maleNames[6];
              
                 break;
                
                 default:
                 }
             
            break;
            case gender = "female":
                switch(day){
                 case(0||-0):
                   documents.getElementsById("results").innerHTML ="The day is on sunday."+""+"Your akan name is Akosua";
                 break;
                 case(1||-1):
                   documents.getElementsById("results").innerHTML ="The day is on monday."+""+"Your akan name is Adwoa";
                 break;
                 case(2||-2):
                   documents.getElementsById("results").innerHTML ="The day is on tuesday."+""+"Your akan name is Abenaa";
                 break;
                 case(3||-3):
                   documents.getElementsById("results").innerHTML ="The day is on wednesday."+""+"Your akan name is Akua";
                 break;
                 case(4||-4):
                   documents.getElementsById("results").innerHTML ="The day is on thursday."+""+"Your akan name is Yaa";
                 break;
                 case(5||-5):
                   documents.getElementsById("results").innerHTML ="The day is on friday."+""+"Your akan name is Afua";
                 break;
                 case(6||-6):
                   documents.getElementsById("results").innerHTML ="The day is on saturday."+""+"Your akan name is Ama";
                 break;
                }
               break
               default:
               console.log("pass");
            }
        }

        
       
   
   
   
   


   