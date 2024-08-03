let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector("#msg");

let turnO=true;

const win_patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let filledboxes = 0 ;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        filledboxes++;
        check_winner();
    });
});

const resetGame =()=>{
    turnO=true;
    box_enable();
    msg_container.classList.add("hide");
}; 

const box_disable = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const box_enable = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const show_winner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    box_disable();
};


const matchDraw=()=>{
    msg.innerText="Match is DRAW";
    msg_container.classList.remove("hide");
    // box_disable();
};

const check_winner = ()=>{
    for(let pattern of win_patterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){ 
                console.log("Winner");
                show_winner(pos1val);
            }
        }
    }
    if (filledboxes === boxes.length ) { // Check if all boxes are filled and no winner
        matchDraw();
      }
}




reset_btn.addEventListener("click", resetGame);