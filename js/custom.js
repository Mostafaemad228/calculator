// [1] define the variables  
let display = document.querySelector('[name="display"]');
 operators = document.querySelectorAll('[name="operators"]'),
 numbers = document.querySelectorAll('.numbersBtns'),
 clear = document.querySelector('[name="clear"]'),
 equal = document.querySelector('[name="equal"]'),
 errorp = document.querySelector('.error');
 

// [2] make display input focused 
window.onload=function () {
    display.focus()
}

// [3] get and append the number in the display input
numbers.forEach(e => {
   e.onclick=function () {
      if ( display.value == 0) {
          display.value=e.value
      }
      else{
          display.value+=e.value
      }
   } 
});

// [4] get and append the operator in the display input
operators.forEach(e => {
   e.onclick=function () {
      display.value+=e.value
   } 
});

// [5] make a function equalFun to calculate the numbers
function equalFun() {
    try {
        let res =parseFloat(eval(display.value));
        return display.value=res
    }
    catch(err) {
        // alert("some thing gone wrong");
        errorp.textContent="Something went wrong, pleas enter a valid value";
        return   display.value="";
    }

}

// [6] do the function on click a = btn
equal.onclick= function () {
    equalFun();
} 

// [7] do the function on press the enter  
window.onkeypress =  function (e) {
    if (e.keyCode === 13) {
        equalFun();
    }
}

// clear function
clear.onclick=function () {
    display.value="";
}


