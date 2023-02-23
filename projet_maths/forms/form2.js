import { calculations } from "../functions/calculations.js"; 
import { recalculate } from "../functions/recalculate.js";
import {systemCalc1, systemCalc2, operator} from "../functions/recalculate.js";
import { nicknameMain} from "../main/index.js";
import { main } from "../main/index.js";
var timeLimit = 30, timeID, incorrectAnswer = 0;
export var score = 0;

const countDown = document.getElementById("countdown");
const form2 = document.getElementById("form2");    
const answer1 = document.getElementById("reponseSystem1");
const answer2 = document.getElementById("reponseSystem2");
const userAnswerInputJs = document.getElementById("userAnswerInput");

recalculate();
document.getElementById("systemCalcules").innerHTML = `${systemCalc1} ${operator} ${systemCalc2}`

    form2.addEventListener("submit", function(event){
    event.preventDefault();

    var userAnswer = userAnswerInputJs.value;

    if(userAnswer.trim() !== "") {
        var resultComparation = calculations(systemCalc1, systemCalc2, operator)

        if(userAnswer == resultComparation) {
            score++;
            answer1.innerHTML = `Your answer is correct !`;
            answer2.innerHTML = `+1 point! Your score : ${score}`;

            recalculate();
            document.getElementById("systemCalcules").innerHTML = `${systemCalc1} ${operator} ${systemCalc2}`
            
            document.getElementsByClassName("applyEffect")[0].classList.add('answer-correct');
                setTimeout(() => {
                document.getElementsByClassName("applyEffect")[0].classList.remove('answer-correct');
            }, 500);
        }
        else {
            incorrectAnswer++;
            answer1.innerHTML = `The answer was : ${systemCalc1} ${operator} ${systemCalc2} = ${resultComparation} <br>`;
            answer2.innerHTML = `You miscalculated ${incorrectAnswer} times!. High score: ${score}`;

            document.getElementsByClassName("applyEffect")[0].classList.add('answer-incorrect');
            setTimeout(() => {
            document.getElementsByClassName("applyEffect")[0].classList.remove('answer-incorrect');
            }, 500);

            recalculate();

            document.getElementById("systemCalcules").innerHTML = `${systemCalc1} ${operator} ${systemCalc2}`
    
            if(score >= localStorage.getItem("score")) {
                localStorage.setItem("score", score);
                main();
                document.getElementsByClassName("applyEffect")[0].classList.add('answer-correct');
                setTimeout(() => {
                document.getElementsByClassName("applyEffect")[0].classList.remove('answer-correct');
                }, 500);
            }
            score = 0;
        }
        
        userAnswer = "";  
    } 
})


const resetScore = document.getElementById("resetScore");

resetScore.addEventListener('click', () => {
    localStorage.removeItem("score");
    location.reload();
})

//======== Time Limit =======
    /*timeID = setTimeout(function() {

        answer.innerHTML = `Time's up! Your score: ${score}`;

        score = 0;
        recalculate();

        document.getElementById("systemCalcules").innerHTML = `${systemCalc1} ${operator} ${systemCalc2}`
    }, timeLimit * 1000); 
    //========= Interval ========
    var intervalID = setInterval(function() {
        timeLimit--;
        countDown.innerHTML = timeLimit;

        if(timeLimit == 0) {
            clearInterval(intervalID);
            clearTimeout(timeID);
        }
    }, 1000);*/
    
/*clearTimeout(timeID); 
clearInterval(intervalID);*/