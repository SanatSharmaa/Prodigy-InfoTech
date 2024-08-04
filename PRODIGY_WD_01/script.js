let currentPlayer = "X";
let arr = Array(9).fill(null);
let x = document.querySelector('.X');
let o = document.querySelector('.O');

function turn(){
    if(currentPlayer === "X"){
        o.style.background = "aliceblue";
        x.style.background = "#bbbaba";
    }
    else{
        x.style.background = "aliceblue";
        o.style.background = "#bbbaba";
    }
}

turn();
function operation(ele){
    const id = Number(ele.id);
    if(arr[id] !== null){
        return;
    }
    
    arr[id] = currentPlayer;
    ele.innerText = currentPlayer;
    winner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turn();
}
let para = document.querySelector('p');
console.log(para.innerText);

function winner(){
    if(
        arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2] ||
        arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5] || 
        arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8] || 
        arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6] || 
        arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] || 
        arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] || 
        arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8] ||
        arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
        {
            if(para.innerText === ""){
                para.innerText = `Game Over! ${currentPlayer} is Winner`;
            }
            // setTimeout(function(){
            //     location.reload();

            // },2000);
            return;
        }
    
    if(!arr.some(e => e === null)){
        para.innerText = 'Game Over! Its a Draw';
    }    
}

function refresh(){
    location.reload();
}