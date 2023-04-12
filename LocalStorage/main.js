const addBtn = document.querySelector(".add-btn");
const userInput = document.querySelector("#userInput");
const form = document.querySelector("form")

const items =[];


form.addEventListener("submit",itemHandler);

function itemHandler(e){
   items.push(userInput.value);
   console.log(items);
   e.preventDefault()
   
}

