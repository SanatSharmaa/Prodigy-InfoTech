let input = document.getElementById('input-box');
let list = document.getElementById('list-container');
let button = document.querySelector('button');

button.addEventListener('click',(event)=>{
    // event.preventDef ault();
    addTask();
});


function addTask(){
    if(input.value === ""){
        alert("You must Write Something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value="";
    saveData();
}

list.addEventListener('click',(event)=>{
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();

