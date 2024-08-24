


let userSeq=[];
let gameSeq=[];
let btns=["green","yellow","red","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");



document.addEventListener("keypress", function() {
  if(started == false) {
    console.log("game start");
    started=true;

    levelUp();
  }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
     btn.classList.remove("flash");
    },250);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function() {
     btn.classList.remove("userflash");
    },250);
}


function levelUp() {
    userSeq=[];
 level++;
  h2.innerText=`Level ${level}`;

   let randIdx=Math.floor(Math.random() *4);
   let randColor=btns[randIdx];
   let randBtn=document.querySelector(`.${randColor}`);


//    console.log(randIdx);
//    console.log(randColor);
//    console.log(randBtn);
   gameSeq.push(randColor);
   console.log(gameSeq);

  gameFlash(randBtn);

}



   function checkAns(idx) {
    if(gameSeq[idx] == userSeq[idx]) {
        if(gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML=`Game Over your score is. ${level} <br> press any key to start Game `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor="red";
            setTimeout( function() {
                document.querySelector("body").style.backgroundColor="white";
            },250);
        })
        rest();
    }
   }



function btnPress() {
    let btn=this;

     userColor=btn.getAttribute("id");
     userSeq.push(userColor);

    userFlash(btn);

    checkAns(userSeq.length -1);
}



let allBtns=document.querySelectorAll(".btn");
   for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
   }


   function rest() {
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
   }