
// let pagebody = document.querySelectorAll('.pagebody')[0];

// let sembody = document.querySelectorAll('.sembody');


let tempinput = document.getElementById('tempinput');

let tempcelcius = document.getElementById('tempcelcius');

let tempfarenheit = document.getElementById('tempfarenheit');

let submit = document.getElementById('submit');

let resultcontainer = document.querySelector('.resultcontainer');

let result = document.getElementById('result');


// console.log(tempcelcius);
// console.log(tempfarenheit);
console.log(submit);
// console.log(resultcontainer);
// console.log(result);


// tempinput.value = 20;

// tempinput.addEventListener('change', numbercheck)

function numbercheck() {

     console.log((tempinput.value).length);
     console.log((tempinput.value.trim()).length);

     if (isNaN(tempinput.value) || tempinput.value == "" || (tempinput.value.trim()).length == 0) {
          alert("Invalid Input ❌ Please Try Again");
          console.log("Invalid Input! Please enter an appropriate number");
     }

     else {

          console.log("Input OK 👍");
          console.log(tempinput.value);
          console.log(tempinput.value.trim());
     }
}


submit.addEventListener('click', () => {


     numbercheck();

     console.log('button clicked');



     if (tempcelcius.checked == true) {
          console.log("celcius");
     }
     else if(tempfarenheit.checked == true){
          console.log("farenhiet");
     }
     else if(tempcelcius.checked !== true || tempfarenheit.checked !== true){
          // alert("Please enter a value and select a Unit");
          alert("Please select a Unit");
     }


     result.value = tempinput.value.trim();


})