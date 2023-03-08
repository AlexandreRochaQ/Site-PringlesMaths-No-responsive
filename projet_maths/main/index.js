export var nicknameMain = localStorage.getItem("username");
export var scoreMain = localStorage.getItem("score");

export function main() {
    if(scoreMain == null && nicknameMain == null) {
        document.getElementById("userScore").innerHTML = `It's empty here`
    } else if (nicknameMain == null) {
        document.getElementById("userScore").innerHTML = `Your score: ${scoreMain}`
    } else if(scoreMain == null)  {
        document.getElementById("userScore").innerHTML = `Go play!` 
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