function akanNames(){
  
   var CC=parseInt(Year.slice(0,2))
   var Year=Document.getElementById("Year").value;
   var YY=parseInt(Year.slice (2,4))
   var MM=parseInt.Document.getElementId("Month").value;
   var DD=parseInt.Document.getElementId("Day").value;
   
   
   var male=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw","Kofi","Kwame"]
   var female=["Akosua","Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
   var gender=document.getElementById("gender").value;
   console.log(gender);

   var CalculateDate = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
   CalculateDate= Math.floor(CalculateDate)

   if(MM<1||MM>12){
     alert("Invalid Month");
   }
   if(DD>31||DD<1){
     alert("Invalid Date");
   }
   
   
   if(gender==="male"){
     sex = male;
   }
   else{
     sex = female;
   }

   var output = sex[CalculateDate]
   document.getElementById("answer").innerHtml = "Your Akan name is"+output+".";
  }
   
   
  var weekdays =day (CC, YY, MM, DD)
   var day=weekdays.fixed(0)
  

   var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]