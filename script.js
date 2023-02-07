
// let pagebody = document.querySelectorAll('.pagebody')[0];

// let sembody = document.querySelectorAll('.sembody');


let converterform = document.getElementById('converterform');

let tempinput = document.getElementById('tempinput');

let radioinput = document.getElementsByClassName('radioinput');

let inputcelcius = document.getElementById('inputcelcius');

let inputfarenheit = document.getElementById('inputfarenheit');

let inputkelvin = document.getElementById('inputkelvin');

let outputcelcius = document.getElementById('outputcelcius');

let outputfarenheit = document.getElementById('outputfarenheit');

let outputkelvin = document.getElementById('outputkelvin');

let submit = document.getElementById('submit');

let resultcontainer = document.querySelector('.resultcontainer');

let result = document.getElementById('result');

let resultunit = document.getElementById('resultunit');

let reset = document.getElementById('reset');

let fullresult = document.querySelector('#fullresult');


// console.log(tempinput);
// console.log(radioinput);
// console.log(inputcelcius);
// console.log(inputfarenheit);
// console.log(inputkelvin);
// console.log(outputcelcius);
// console.log(outputfarenheit);
// console.log(outputkelvin);
// console.log(submit);
// console.log(reset);
// console.log(resultcontainer);
// console.log(result);



// tempinput.value = 20;

// tempinput.addEventListener('change', numbercheck)


     function inputcheck() {

          temperature = Number(tempinput.value.trim());
          console.log(temperature);

          console.log((tempinput.value).length);
          console.log(temperature.length);

          if (isNaN(tempinput.value) || tempinput.value == "" || (temperature).length == 0) {
               alert("Invalid Input ❌ Please Try Again");
               console.log("Invalid Input! Please enter an appropriate number");
               converterform.reset();
          }

          else {

               console.log("Input OK 👍");
               console.log(tempinput.value);
               console.log(temperature);
          }
     }

     function unitcheck(){

          for (let rbtn of radioinput) {

               if(rbtn.checked == true){

                    inputuint = rbtn.value;
                    
                    console.log(inputuint);
               }
               
          }
     }

     function resetform(){

          converterform.reset();
          // convertedresult = 0;
     }



     function c2f() {

          convertedunit = "°F"
          convertedresult = temperature*(9/5)+32;
          // F = C(9/5) + 32
          resultunit.value = convertedunit;
          resultprint(convertedresult.toFixed(1), convertedunit);
     }

     function c2k() {

          convertedunit = "K"
          convertedresult = temperature + 273.15;
          // K = C + 273.15
          resultunit.value = convertedunit;
          resultprint(convertedresult.toFixed(1), convertedunit);
     }


     function f2c() {

          convertedunit = "°C"
          convertedresult = (temperature-32)*(5/9);
          // C = (F-32) (5/9)
          resultunit.value = convertedunit;
          resultprint(convertedresult.toFixed(1), convertedunit);
     }

     function f2k() {
          
          convertedunit = "K"
          convertedresult = (temperature-32)*(5/9)+273.15;
          // K = (F-32) (5/9) + 273.15
          resultunit.value = convertedunit;
          resultprint(convertedresult.toFixed(1), convertedunit);
     }


     function k2c() {

          convertedunit = "°C"
          convertedresult = temperature-273.15;
          // C = K - 273.15
          resultunit.value = convertedunit;
          resultprint(convertedresult.toFixed(1), convertedunit);
     }

     function k2f() {

          convertedunit = "°F"
          convertedresult = (temperature-273.15)*(9/5)+32;
          // F = (K-273.15) (9/5) + 32
          resultunit.value = convertedunit;
          resultprint(convertedresult.toFixed(1), convertedunit);

     }


     function sameunits(){

          alert("Same Units Selected. Please select different units and try again");
          // convertedresult = temperature;
          // convertedunit = inputuint;
          resetform();
          // convertedresult = 0;

     }


     function resultprint(res, unt){

          console.log(temperature);

          fullresult.style.opacity = 1;
          fullresult.value = `${temperature} ${inputuint}  =  ${res} ${unt}`;

     }



submit.addEventListener('click', () => {


     inputcheck();

     unitcheck();

     console.log('button clicked');



     
     if ( 
          inputcelcius.checked == true  &&  outputcelcius.checked == true ||
          inputfarenheit.checked == true  &&  outputfarenheit.checked == true ||
          inputkelvin.checked == true  &&  outputkelvin.checked == true
     )    {
               sameunits();
               // alert('same units selected');
          }

     else if (inputcelcius.checked == true  &&  outputfarenheit.checked == true) {
          console.log("celcius to farenhiet");
          c2f();
     }
     
     else if (inputcelcius.checked == true  &&  outputkelvin.checked == true) {
          console.log("celcius to kelvin");
          c2k();
          
     }
     
     else if(inputfarenheit.checked == true  &&  outputcelcius.checked == true){
          console.log("farenhiet to celcius");
          f2c();
     }
     
     else if(inputfarenheit.checked == true  &&  outputkelvin.checked == true){
          console.log("farenhiet to kelvin");
          f2k();
     }
     
     else if (inputkelvin.checked == true  &&  outputfarenheit.checked == true) {
          console.log("kelvin to farenhiet");
          k2f();
     }
     
     else if (inputkelvin.checked == true  &&  outputcelcius.checked == true) {
          console.log("kelvin to celcius");
          k2c();
     }
     
     else {
          alert("Please select the Units");
     }
     
     
     result.value = convertedresult.toFixed(1);



})


reset.addEventListener('click', ()=>{

     // converterform.reset();
     // convertedresult = 0;

     resetform();

})