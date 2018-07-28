// Function called newFunc that accepts parameters. Prompts x and returns y. 

function newFunc(x) { 
    return prompt(x);
};

//Invoke newFunc and return yourName
let yourName = newFunc('What\'s your name?'); 
console.log();

//Invoke newFunc and return teacherName
let teacherName = newFunc('What\'s your Javascript teacher\'s name?'); 
console.log(teacherName);

//Invoke newFunc and return favFood 
let favFood = newFunc('What\'s your favorite food?'); 
console.log(favFood);

//Confirm favFood
let agree = confirm("Is your favorite food " + favFood + "?")
console.log(agree);

//If condition is true, invoke alert function and use yourName and favFood variables. 
let favFood2;
let agree2;
if (agree === true)
{
    (alert("Great, " + yourName + ". I'm glad you still like " + favFood));
} 
//Else, invoke alert then invoke newFunc passing it a string and favFood2 variables. Then, invoke confirm function and set value to agree2. If agree2 condition is met, then invoke one alert. Else, invoke another alert. 
else 
{
    alert("Sounds like you may have changed your mind.");
    newFunc('What are you thinking at the moment is your favorite food?', favFood2); 
    agree2 = confirm("Is your favorite food " + favFood2 + "?"); 
    if (agree2 === true)
    {
        (alert ("Great. Let's get some " + favFood2 + " after all that thinking."))
    }
    else 
    {
        (alert("I give up. Both "+  favFood + " and " + favFood2 + " sound like good choices to me."))
    }
}; 

//Create function newFunc2 which uses HTML method and property 
function newFunc2(l, m) 
{
let elOne = document.getElementsByClassName(l)
    for(i = 0; i < elOne.length; i++)
    {
        elOne[i].innerHTML = m; 
    }; 
};

//Invoke newFunc2 and pass it arguments 
newFunc2('name', yourName); 
console.log(newFunc2);
newFunc2('food1', favFood); 
console.log(newFunc2); 

// Function called newFunc2. Gets element by id, using argument id1, and replaces it with a string. Sets element to equal parameter para1. 
function newFunc3(id1, para1)
{
    let elTwo= document.getElementById(id1)
    elTwo.innerHTML = para1; 
}; 

// Invoke newFunc2 three times by passing it arguments 
newFunc3('confirm', agree2);
console.log(newFunc3);
newFunc3('food2', favFood2); 
console.log(newFunc3); 
newFunc3('teacher', teacherName); 
console.log(newFunc3); 
