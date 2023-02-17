import { easyRndInteger, mediumRndInteger, hardRndInteger} from "./mathLevels.js";

export var systemCalc1, systemCalc2;
export let operator = "x", levelInput = "Easy";

document.getElementById("difficultLevel").onchange = () => {
    levelInput = document.getElementById("difficultLevel").value;
    recalculate();
    document.getElementById("systemCalcules").innerHTML = `${systemCalc1} ${operator} ${systemCalc2}`;
}
document.getElementById("operatorInput").onchange = () => {
    operator = document.getElementById("operatorInput").value;
    document.getElementById("systemCalcules").innerHTML = `${systemCalc1} ${operator} ${systemCalc2}`;

}

export function recalculate() {
    if(levelInput == "Easy") {
        systemCalc1 = easyRndInteger();
        systemCalc2 = easyRndInteger();
    }
    else if(levelInput == "Medium") {
        systemCalc1 = mediumRndInteger();
        systemCalc2 = mediumRndInteger();
    }
    else if(levelInput == "Hard") {
        systemCalc1 = hardRndInteger();
        systemCalc2 = hardRndInteger();
    }
}


