let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#resetBtn');
let newGameBtn=document.querySelector('#newGameBtn');
let msgContainer=document.querySelector('.msgContainer');
let msg=document.querySelector('#msg');

let turn0=true;


const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}
const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],   
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText='O';
            turn0=false;
        }else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPattern){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3){
            showWinner(posVal1);
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
