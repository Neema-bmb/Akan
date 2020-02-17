# Akan

#### {This app helps users to find out what their Akan name is using the date of their birth.}, 
{currents version was released on 16/02/2020}

#### By **{Neema Shiramba}**

## Discription
{An Akan name is determined by the day in which an individual was born, this app therefore calculates
the specific date when an individual was born and assigns them the correct Akan name. }
# Behaviour Based Development
 ## Input
 This app calculates the akan name using the formula below:
 ```
  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 where;

 CC - is the century digits. For example 1989 has CC = 19

 YY - is the Year digits (1989 has YY = 89)

 MM -  is the Month

 DD - is the Day of the month 

 mod - is the modulus function ( % )
 ```
 The formula above will be implemented after the user has imputed all the information above, it will then calculate the specific day of the week in which they were born. 
 We make the symbols above variables so that they can be store by javascript, then change them from strings to numbers using parseInt in order to be calculated.

```
 var Year = document.getElementById("Year").value;
  var MM = parseInt(document.getElementById("Month").value);
  var DD = parseInt(document.getElementById("Date").value);
  var CC = parseInt(Year.slice(0, 2));
  var YY = parseInt(Year.slice(2, 4));
```
 ## Names
  Each name has been assigned to a specific day as shown below, the number of the day that is obtained from above is what is used to determine the name to be picked.
  ````
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var gender = document.getElementById("gender").value;
  ````
 ## Detecting Input Errors
  Incase the user inputs a invalid year, month or day, they will recieve a notification that their input is invalid.this is done as shown below:
 
 ```
  if (MM < 1 || MM > 12) {
    alert("Invalid Month");
  }
  if (DD > 31 || DD < 1) {
    alert("Invalid Date");
  }
 ```
## Selecting Genders
  To select between Male and Female genders we use if and else as shown below:
  ```
  if (gender === "male") {
    sex = male;
  }
  else {
    sex = female;
  }
  ```
## 
``
var output = sex[CalculateDate];
  alert(output);
``
  


## Setup/Installation Requirements
* Fill in your date of birth in the space provided
* Submit for calculation

## Known Bugs
{There are no known Bugs.}

### Technologies Used
{I used HTML, Bootstrap and Javascript}

## Contact me on: neemashiramba@gmail.com
{I encourage anyone who has any contribution to make to this code to improve it do so. 
Live link:https://neema-bmb.github.io/Akan/}


### License
[MIT.See below for more details on licensing](LICENCE.txt)
