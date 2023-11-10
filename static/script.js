
const btn = document.querySelector(".add");
const input = document.querySelector(".inputbox");
btn.addEventListener('click', ()=>{
    let val = input.value;
    let task = createTask(val);
    document.body.append(task);
    input.value = "";
});

function createTask(val){
    let div = document.createElement("div");
    let input = document.createElement('input');
    let text = document.createElement('p');

    input.setAttribute("type",'checkbox');
    text.innerText = val
    div.classList.add('task')
    div.append(input,text);
    return div;
}
