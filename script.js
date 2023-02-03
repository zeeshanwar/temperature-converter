
// let pagebody = document.querySelectorAll('.pagebody')[0];

// let sembody = document.querySelectorAll('.sembody');


let converterform = document.getElementById('converterform');

let tempinput = document.getElementById('tempinput');

let tempcelcius = document.getElementById('tempcelcius');

let tempfarenheit = document.getElementById('tempfarenheit');

let submit = document.getElementById('submit');

let resultcontainer = document.querySelector('.resultcontainer');

let result = document.getElementById('result');

let resultunit = document.getElementById('resultunit');

let reset = document.getElementById('reset');


// console.log(tempinput);
// console.log(tempcelcius);
// console.log(tempfarenheit);
// console.log(submit);
// console.log(reset);
// console.log(resultcontainer);
// console.log(result);



// tempinput.value = 20;

// tempinput.addEventListener('change', numbercheck)


     function inputcheck() {

          tempreature = tempinput.value.trim();
          console.log(tempreature);

          console.log((tempinput.value).length);
          console.log(tempreature.length);

          if (isNaN(tempinput.value) || tempinput.value == "" || (tempreature).length == 0) {
               alert("Invalid Input ❌ Please Try Again");
               console.log("Invalid Input! Please enter an appropriate number");
               converterform.reset();
          }

          else {

               console.log("Input OK 👍");
               console.log(tempinput.value);
               console.log(tempreature);
          }
     }



     function c2f() {

          convertedresult = tempreature*(9/5)+32;
          // F = C(9/5) + 32
          resultunit.value = "°F"
     }


     function f2c() {

          convertedresult = (tempreature-32)*(5/9);
          // C = (F-32) (5/9)
          resultunit.value = "°C"
     }



submit.addEventListener('click', () => {


     inputcheck();

     console.log('button clicked');



     if (tempcelcius.checked == true) {
          console.log("celcius");
          c2f();
          
     }
     else if(tempfarenheit.checked == true){
          console.log("farenhiet");
          f2c();
     }
     else if(tempcelcius.checked !== true || tempfarenheit.checked !== true){
          alert("Please select a Unit");
     }


     result.value = convertedresult.toFixed(1);



})


reset.addEventListener('click', ()=>{

     converterform.reset();

})