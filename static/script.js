
const btn = document.querySelector(".add");
const input = document.querySelector(".inputbox");

input.addEventListener('keypress',(e)=>{
    if (e.key == "Enter"){
        btn.click();
    }
})
btn.addEventListener('click', ()=>{
    let val = input.value;
    if (!(val == "" || val == undefined)){
        let task = createTask(val);
        document.body.append(task);
        input.value = "";
    }
    checkboxes = document.querySelectorAll(".task-checkbox");
checkboxes.forEach(element => {
    this.addEventListener("change",(e)=>{
        let checkbox = e.target;
        checkbox.parentNode.classList.toggle("scratch-out");
    })
});
});


function createTask(val){
    let div = document.createElement("div");
    let input = document.createElement('input');
    let text = document.createElement('p');

    input.setAttribute("type",'checkbox');
    input.classList.add("task-checkbox");
    text.innerText = val
    div.classList.add('task')
    div.append(input,text);
    return div;
}
