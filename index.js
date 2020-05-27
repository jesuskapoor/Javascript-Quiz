const QuizData = [
    {
        quest:`If you write down all the numbers from 1 to 100 .<br/>How many times do you write 3?`,
        optionA:21,
        optionB:18 ,
        optionC:19,
        optionD:20,
        answr :`Right Answer is 19.<br/><br/>
        From 1 to 100 there are ten numbers with 3 as the unit's number.
        3,13,23,33,43,53,63,73,83,93
        and ten number with 3 as ten's number.
        30,31,32,33,34,35,36,37,38,39.
        But 33 occurs 2 times.
        so the total number is 19.`
    } ,
    {
        quest:'When I was 4 my sister was 2<br/>I am now 44.How old is my sister?',
        optionA:28 ,
        optionB:40 ,
        optionC:42 ,
        optionD:`I don't Know`,
        answr :`Right Answer is I don't know.<br/><br/>
        This is a tough one. She might be 42,but she could be 41 or 43 also
        since the question doesn't mention when your birthday is and her birthday is.
        Also,she could be dead. Finally, you thought that might be your sister 
        but actually your mom had an affair with another man and the woman who is 
        1-3 younger than you is not actually your sister. But your mom may have given away your real sister 
        for adoption,in which case she is probably older than you.See why its tough?
        Finally, what if you think your sister is dead but she has become an astronaut on a secret
        government project for near light speed travel? Then your sister would be aging
        more slowly than you, so she could potentially be even younger than 41.
        `

    },
    {
        quest:`1<br/> 11<br/> 21<br/> 1211<br/> 111221<br/> 312211<br/> What comes next? `,
        optionA:3121123 ,
        optionB:13112221 ,
        optionC:34213441 ,
        optionD:13133021,
        answr :`Right Answer is 13112221.<br/><br/>Well ,you could try a linguistic approach.
        like 11 = 1 times 1<br/>
        21 = 2 times 1.`

    } ,
    {
        quest:`What number is X?<br/><br/>
        16  06  68  88  X  98.` ,
        optionA:97,
        optionB:42,
        optionC:87,
        optionD:74,
        answr :`Right Answer is 87.<br/><br/>If you turn it upside down the answer is immediately 87.`

    } ,

    {
        quest:`Can you tell me, what comes <br/>
        in a year,<br/>
        twice in a week,<br/>
        and never in a day?` ,
        optionA:`santa claus` ,
        optionB:`Yes`,
        optionC:`the letter "e" `,
        optionD:`No`,
        answr :`Right Answer is Yes or No.<br/><br/>You had to answer the first clause "Can you tell..."
        So the answer should be Yes or No.`

    },

    {
        quest:`Which travels faster?<br/> Hot or Cold.` ,
        optionA:`Cold` ,
        optionB:`Hot`,
        optionC:`Both  `, 
        optionD:"They don't travel",
        answr :`Right Answer is Hot.<br/><br/>Hot! Because you can catch cold.`

    }
];

let body = document.querySelector("body");
let mainDiv = document.querySelector(".mainDiv");
let levelHead = document.querySelector(".mainDiv>h1");
let Question = document.querySelector(".question");
let OptionsButton = document.querySelectorAll(".topOptions");
let OptionA = document.querySelector(".optionA");
let OptionB = document.querySelector(".optionB");
let OptionC = document.querySelector(".optionC");
let OptionD = document.querySelector(".optionD");
let clickNext = document.querySelector(".Next>button");
let Solution = document.querySelector(".solution");
let RightOrWrong = document.querySelector(".solution>h2");
let fullExplain = document.querySelector(".explain>p");
let Explain = document.querySelector(".explain"); 
let CloseSol = document.querySelector("strong");
let DisplaySol = document.querySelectorAll(".topOptions>button");

let count = -1;

let paraNext = () => {
    count++;
    if(count===5){
        clickNext.style.display = "none";
    }
    let newNum = count +1;
    body.style.backgroundColor = "#00324e";
    mainDiv.style.backgroundColor = "00324e";
    mainDiv.style.color = "#ffffff";
    Question.style.color = "#ffffff";
    levelHead.textContent = "Level"+ newNum;
    for(let i=0;i<OptionsButton.length;i++){
    OptionsButton[i].style.display = "flex";
    OptionsButton[i].setAttribute("class","topOptions");
    }
    Question.innerHTML = QuizData[count].quest;
    OptionA.innerHTML = QuizData[count].optionA;
    OptionB.innerHTML = QuizData[count].optionB;
    OptionC.innerHTML = QuizData[count].optionC;
    OptionD.innerHTML = QuizData[count].optionD;
}
clickNext.addEventListener("click",paraNext,false);

const showSolution = (event) => {
    Solution.style.display = "block";
    Solution.style.top = "0px";
    Solution.style.marginTop="-100vh";
    Solution.setAttribute("class","solution");
    Explain.setAttribute("class","explain");
    let choice = event.target.value;

    if(levelHead.textContent === "Level1"){
    if(choice==="choiceThree"){
        RightOrWrong.textContent = "Hurray! Your Answer is Right";
        RightOrWrong.style.color = "#0a86ff";
        fullExplain.innerHTML = QuizData[0].answr;
    }else {
        RightOrWrong.textContent = "NO! Your Answer is Wrong";
        RightOrWrong.style.color = "red";
        fullExplain.innerHTML = QuizData[0].answr;
    }
    };

    if(levelHead.textContent === "Level2"){
        if(choice === "choiceFour"){
            RightOrWrong.textContent = "Hurray! Your Answer is Right";
            RightOrWrong.style.color = "#0a86ff";
            fullExplain.innerHTML = QuizData[1].answr;
    }else {
        RightOrWrong.textContent = "NO! Your Answer is Wrong";
        RightOrWrong.style.color = "red";
        fullExplain.innerHTML = QuizData[1].answr;
    }
    };

     if(levelHead.textContent === "Level3"){
        if(choice ==="choiceTwo"){
             RightOrWrong.textContent = "Hurray! Your Answer is Right";
             RightOrWrong.style.color = "#0a86ff";
             fullExplain.innerHTML = QuizData[2].answr;
        }else {
            RightOrWrong.textContent = "NO! Your Answer is Wrong";
            RightOrWrong.style.color = "red";
            fullExplain.innerHTML = QuizData[2].answr;
    }
    };

        if(levelHead.textContent === "Level4"){
            if(choice ==="choiceThree"){
                RightOrWrong.textContent = "Hurray! Your Answer is Right";
                RightOrWrong.style.color = "#0a86ff";
                fullExplain.innerHTML = QuizData[3].answr;
            }else {
               RightOrWrong.textContent = "NO! Your Answer is Wrong";
                RightOrWrong.style.color = "red";
                fullExplain.innerHTML = QuizData[3].answr;
        }
        };

        if(levelHead.textContent === "Level5"){
            if(choice === "choiceTwo" || choice === "choiceFour"){
                RightOrWrong.textContent = "Hurray! Your Answer is Right";
                RightOrWrong.style.color = "#0a86ff";
                fullExplain.innerHTML = QuizData[4].answr;
            }else {
                RightOrWrong.textContent = "NO! Your Answer is Wrong";
                RightOrWrong.style.color = "red";
                fullExplain.innerHTML = QuizData[4].answr;
            }
            };

            if(levelHead.textContent === "Level6"){
               
               if(choice === "choiceTwo"){
                   RightOrWrong.textContent = "Hurray! Your Answer is Right";
                   RightOrWrong.style.color = "#0a86ff";
                    fullExplain.innerHTML = QuizData[5].answr;
            }else {
                RightOrWrong.textContent = "NO! Your Answer is Wrong";
                RightOrWrong.style.color = "red";
                fullExplain.innerHTML = QuizData[5].answr;
            }
            
            };


}



const hideSolution = () =>{
    Solution.style.display = "none";
    
}
for(let i=0;i<DisplaySol.length;i++){
DisplaySol[i].addEventListener("click", showSolution,false);
}
CloseSol.addEventListener("click", hideSolution);
