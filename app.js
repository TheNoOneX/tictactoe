let button = document.querySelectorAll(".btn");
let newGame = document.querySelector(".new-game");
let msgBox = document.querySelector(".msg-box");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

button.forEach((box)=>{
    box.addEventListener("click",()=>{
         if(turn0 == true){
            box.innerText="X";
            turn0 = false;
         }
         else{
            box.innerText ="O";
            turn0 = true;
         }
         box.disabled = true;
         checkWinner();
    });
});

const resetGame = ()=>{
    turn0 = true;
    enableBtn();
    msgBox.classList.add("hide");
}

const disableBtn=() =>{
    for(let box of button){
        box.disabled = true;
    }
}

const enableBtn = () =>{
    for(let box of button){
        box.disabled = false;
        box.innerText="";
    }
}

newGame.addEventListener("click",resetGame);

const checkWinner = ()=>{
    for(let pattern of winPattern){
        let pos1 = button[pattern[0]].innerText;
        let pos2 = button[pattern[1]].innerText;
        let pos3 = button[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                msgBox.classList.remove("hide");
                msgBox.innerText=`CONGRATULATIONS!,WINNER IS ${pos1}`;
                disableBtn();
            }
        }
    }

}






