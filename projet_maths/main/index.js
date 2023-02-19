export var nicknameMain = localStorage.getItem("username");
export var scoreMain = localStorage.getItem("score");

function main() {
    if(scoreMain == null && nicknameMain == null) {
        document.getElementById("userScore").innerHTML = `It's so cold and empty here :'(`
    } else if (nicknameMain == null) {
        document.getElementById("userScore").innerHTML = `Hey anonymous, your high score was: ${scoreMain}`
    } else if(scoreMain == null)  {
        document.getElementById("userScore").innerHTML = `${nicknameMain}, play to show your score` 
    } else {
        document.getElementById("userScore").innerHTML = `[${nicknameMain}] score: ${scoreMain}`
    }
    
    if (nicknameMain == null || nicknameMain == undefined) {
        document.getElementById("hideForm1").style.display = "flex";
        document.getElementById("hideForm2").style.display = "none";
    } 
    if (nicknameMain != null && nicknameMain != undefined) {
        document.getElementById("hideForm1").style.display = "none";
        document.getElementById("hideForm2").style.display = "flex";
    } 
}
main();