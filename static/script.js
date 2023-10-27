
let checkboxes = document.querySelectorAll(".checkbox");
let tasks = document.querySelectorAll(".task");

let submitBtn = document.createElement('input');
// let submitBtn = document.querySelector('.AddBtn');
let a = document.querySelector("s");


submitBtn.addEventListener('click',function(){

    console.log("hi!");
    checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener('click',function(e){
            if(this.checked){
                let num = this.classList[1];
                tasks.forEach((element)=>{
                    if(element.classList.contains(`${num}`)){
                        element.setAttribute('class',"scratch-out");
                    }
                })
            }
        })
    })


});
  