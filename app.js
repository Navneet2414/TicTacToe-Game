let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        // box.innerText="aa"
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled= true;
        count++;

      let isWinner =  checkWinner();
        if (count === 9 && !isWinner) {
            gameDraw();
          }
    })
})

const gameDraw = () => {
    msg.innerText = `Game  Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }

}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    }

}

const showWinner = (winner)=>{
    if (winner === "O") {
        console.log("Player 1 wins!");
        // msg.innerText= `Congratulation, Winner is ${winner} Player 1 wins!`;
        msg.innerText= `Congratulation,Player 1 wins!`;
    } else if (winner === "X") {
        console.log("Player 2 wins!");
        // msg.innerText= `Congratulation, Winner is ${winner} Player 2 wins!`;
        msg.innerText= `Congratulation, Player 2 wins!`;
    }
    // msg.innerText= `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); 
}
const  checkWinner = ()=> {
    for( let pattern of winPattern){
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText
        //             );
                    let pos1Val = boxes[pattern[0]].innerText;
                    let pos2Val = boxes[pattern[1]].innerText;
                    let pos3Val = boxes[pattern[2]].innerText;

                    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                        if(pos1Val === pos2Val && pos2Val === pos3Val ){
                            console.log("winner")
                            showWinner(pos1Val)
                        }
                    }
    }


}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

