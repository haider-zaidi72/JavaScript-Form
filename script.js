const MyForm = document.querySelector("#myForm");
const numberInput1 = document.querySelector("#num1");
const numberInput2 = document.querySelector("#num2");
const resultPara = document.querySelector("#result");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
  
    console.log("Form is submitted");
  
    let num1 = Number(numberInput1.value);
    let num2 = Number(numberInput2.value);
  
    const value = num1 * num2;
  
    console.log(value);
  
    resultPara.innerText = value;
  
    // event.target.reset()
  });

