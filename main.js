let yourName = prompt("What's your name?");
let favFood = prompt("What's your favorite food?");
let agree = confirm("Is your favorite food " + favFood + "?")
if (agree === true) {
    (alert("Cool, " + yourName + ". I'm glad you still like " + favFood + "but feel free to change your mind next time."));
} else {
    alert("Sounds like you may have changed your mind.");
    let favFood2 = prompt(yourName + ", what are you thinking at moment is your favorite food?");
    let agree2 = confirm("Is your favorite food " + favFood2 + "?")
    if (agree2===true){
        (alert ("Great. Let's get some " + favFood2 + " after all that thinking."))
    } else {alert("I give up. Both "+  favFood + " and " + favFood2 + " sound like good choices to me.")}
}





console.log(yourName);
console.log(favFood);
console.log(agree);
console.log(agree2); 
console.log(favFood2); 


