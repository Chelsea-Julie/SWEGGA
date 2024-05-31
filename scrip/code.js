let entry1 = document.querySelector(".entry1") 
let result = document.querySelector(".result")
let result2 = document.querySelector(".result2")
let entry2 = document.querySelector(".entry2") 
let grandtotal = document.querySelector(".grandtotal")
let final = document.querySelector(".final")

let numb1;
let numb2;

entry1.addEventListener("change", () =>{
    answer = 150.95 * (+entry1.value)
    numb1 = answer
    result.innerText =   answer.toFixed(2)
   

})

entry2.addEventListener("change", () =>{
    answer = 180.95 * (+entry2.value)
    numb2 = answer
    result2.innerText =   answer.toFixed(2)
 
 })

grandtotal.addEventListener("click", () =>{
    final.innerText = (numb1 + numb2).toFixed(2)
})